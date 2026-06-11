/**
 * World Cup 2026 — server-side data layer.
 *
 * Fetches the live schedule/results (openfootball) and live Elo
 * ratings (eloratings.net), joins them against the verified team
 * mapping in teams.ts, and computes everything the dashboard needs:
 * per-match pre-match probabilities, upsets, model accuracy, group
 * tables with FIFA-style tiebreakers, and the best-8 third-place
 * ranking.
 *
 * Resilience contract: this module must NEVER throw at build time or
 * runtime because a third-party source is down. Every fetch is
 * wrapped in try/catch; on failure we fall back to the baseline Elo
 * snapshot from teams.ts and an empty results set.
 */

import {
    ALL_GROUPS,
    TEAM_BY_ELO_CODE,
    TEAM_BY_OPENFOOTBALL_NAME,
    TEAMS,
    type GroupLetter,
    type Team,
} from './teams'
import {
    favorite,
    isUpset,
    matchProbabilities,
    type MatchOutcome,
    type MatchProbabilities,
} from './model'

// ---------------------------------------------------------------------------
// Source URLs
// ---------------------------------------------------------------------------

const SCHEDULE_URL =
    'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json'
const ELO_URL = 'https://www.eloratings.net/World.tsv'

/** Revalidate third-party data at most once an hour. */
const REVALIDATE_SECONDS = 3600

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export type Stage =
    | 'group'
    | 'round-of-32'
    | 'round-of-16'
    | 'quarter-final'
    | 'semi-final'
    | 'third-place'
    | 'final'

/** [home goals, away goals] (team1, team2) */
export type Score = readonly [number, number]

/**
 * A side of a match: either a resolved team (with its current Elo,
 * live if available, baseline otherwise) or an unresolved knockout
 * placeholder such as "1A", "3A/B/C/D/F" or "W73".
 */
export type MatchTeam =
    | { kind: 'team'; team: Team; elo: number }
    | { kind: 'placeholder'; label: string }

export type MatchResult = {
    /** Half-time score, when published */
    ht: Score | null
    /** Full-time (90-minute) score — the result for group matches */
    ft: Score
    /** Score after extra time, knockout matches only */
    et: Score | null
    /** Penalty shootout score, knockout matches only */
    p: Score | null
    /**
     * Decisive outcome from team1's perspective: penalties if taken,
     * else extra time if played, else full time.
     */
    outcome: MatchOutcome
}

export type WorldCupMatch = {
    /** Official match number (present on knockout matches in the feed) */
    num: number | null
    /** Raw round label from the feed, e.g. "Matchday 3", "Final" */
    round: string
    stage: Stage
    /** Kickoff date, YYYY-MM-DD */
    date: string
    /** Local kickoff time with UTC offset, e.g. "13:00 UTC-6" */
    time: string | null
    /** Venue city string from the feed */
    ground: string | null
    /** Group letter for group-stage matches */
    group: GroupLetter | null
    team1: MatchTeam
    team2: MatchTeam
    played: boolean
    /**
     * Pre-match win/draw/win probabilities from the Elo model.
     * Null when either side is still an unresolved placeholder.
     * Computed from current ratings at fetch time (we do not store
     * historical Elo, so probabilities for past matches use today's
     * ratings — a documented approximation).
     */
    probabilities: MatchProbabilities | null
    result: MatchResult | null
    /**
     * True when a decided match defied the model, judged on the
     * 90-minute score — the basis of the probabilities (see model.ts).
     */
    isUpset: boolean
}

export type AdvancingStatus = 'top2' | 'third-contender' | 'out' | 'alive'

export type GroupTableRow = {
    team: Team
    /** Current Elo (live if available, baseline otherwise) */
    elo: number
    played: number
    won: number
    drawn: number
    lost: number
    goalsFor: number
    goalsAgainst: number
    goalDiff: number
    points: number
    /**
     * 'top2' / 'third-contender' / 'out' are assigned once the group
     * is complete; while in progress, teams are 'alive' unless
     * mathematically unable to finish in the top 3.
     */
    status: AdvancingStatus
}

export type GroupTable = {
    group: GroupLetter
    /**
     * Ranked by FIFA tiebreakers: points, goal difference, goals
     * scored, then head-to-head points among the tied subset, then
     * alphabetical (documented approximation of the full criteria).
     */
    rows: GroupTableRow[]
    complete: boolean
}

export type ThirdPlaceRow = {
    group: GroupLetter
    team: Team
    played: number
    points: number
    goalDiff: number
    goalsFor: number
    /** True for the current best 8 thirds (ranked by points, GD, GF) */
    qualifies: boolean
}

export type ModelStats = {
    /** Played matches where the model had pre-match probabilities */
    decided: number
    /** Of those, how often the higher-probability side won in 90 minutes */
    favoriteWon: number
    /** favoriteWon / decided as a percentage; null before any results */
    accuracyPct: number | null
}

export type WorldCupData = {
    /**
     * ISO timestamp of the schedule data's actual age (the schedule
     * response's Date header when available, else compute time).
     */
    lastUpdated: string
    matches: WorldCupMatch[]
    upsets: WorldCupMatch[]
    modelStats: ModelStats
    groups: GroupTable[]
    /** All 12 current third-placed teams, ranked; top 8 qualify */
    thirdPlaceTable: ThirdPlaceRow[]
}

// ---------------------------------------------------------------------------
// Raw feed shapes (openfootball worldcup.json, verified 2026 + 2022 files)
// ---------------------------------------------------------------------------

type RawScore = {
    ht?: [number, number]
    ft?: [number, number]
    et?: [number, number]
    p?: [number, number]
}

type RawMatch = {
    round?: string
    date?: string
    time?: string
    team1?: string
    team2?: string
    group?: string
    ground?: string
    num?: number
    score?: RawScore
}

type RawSchedule = {
    name?: string
    matches?: RawMatch[]
}

// ---------------------------------------------------------------------------
// Fetchers (every one falls back silently — the page must never throw)
// ---------------------------------------------------------------------------

type ScheduleFetch = {
    matches: RawMatch[]
    /**
     * The schedule response's `Date` header — when the data was
     * actually fetched from the source. The fetch data cache and the
     * page's ISR cache revalidate independently, so a page regen may
     * be served cached fetch data up to an hour old; this header is
     * the honest age of that data. Null when unavailable.
     */
    fetchedAt: string | null
}

async function fetchSchedule(): Promise<ScheduleFetch> {
    try {
        const res = await fetch(SCHEDULE_URL, {
            next: { revalidate: REVALIDATE_SECONDS },
        })
        if (!res.ok) {
            console.error(`[worldcup] schedule fetch failed: HTTP ${res.status}`)
            return { matches: [], fetchedAt: null }
        }
        const fetchedAt = res.headers.get('date')
        const json = (await res.json()) as RawSchedule
        if (!Array.isArray(json.matches)) {
            console.error('[worldcup] schedule feed missing "matches" array')
            return { matches: [], fetchedAt }
        }
        return { matches: json.matches, fetchedAt }
    } catch (err) {
        console.error('[worldcup] schedule fetch failed:', err)
        return { matches: [], fetchedAt: null }
    }
}

/**
 * Parse eloratings.net World.tsv: tab-separated, no header row.
 * Column 3 (index 2) = 2-letter team code, column 4 (index 3) =
 * current Elo rating. We only read those two columns, which sidesteps
 * the feed's Unicode-minus (U+2212) signed change columns entirely.
 */
async function fetchLiveElo(): Promise<Map<string, number>> {
    const ratings = new Map<string, number>()
    try {
        const res = await fetch(ELO_URL, {
            next: { revalidate: REVALIDATE_SECONDS },
        })
        if (!res.ok) {
            console.error(`[worldcup] elo fetch failed: HTTP ${res.status}`)
            return ratings
        }
        const text = await res.text()
        for (const line of text.split(/\r?\n/)) {
            if (!line) continue
            const cols = line.split('\t')
            const code = cols[2]
            const rating = Number(cols[3])
            if (code && code.length === 2 && Number.isFinite(rating)) {
                ratings.set(code, rating)
            }
        }
    } catch (err) {
        console.error('[worldcup] elo fetch failed:', err)
    }
    return ratings
}

// ---------------------------------------------------------------------------
// Parsing helpers
// ---------------------------------------------------------------------------

/**
 * Known placeholder formats in the 2026 feed for not-yet-determined
 * knockout participants: "1A".."3L" (group finishers), best-third
 * slots like "3A/B/C/D/F", and bracket references "W73" (winner of
 * match 73) / "L101" (loser of match 101).
 */
const PLACEHOLDER_PATTERN = /^([123][A-L]|3[A-L](\/[A-L])+|[WL]\d+)$/

function resolveMatchTeam(
    name: string,
    liveElo: Map<string, number>
): MatchTeam {
    const team = TEAM_BY_OPENFOOTBALL_NAME.get(name)
    if (team) {
        return { kind: 'team', team, elo: liveElo.get(team.eloCode) ?? team.elo }
    }
    if (!PLACEHOLDER_PATTERN.test(name)) {
        // A real-looking team name we cannot map — log and degrade to a
        // placeholder so the rest of the page still renders.
        console.warn(`[worldcup] unmapped team name in schedule feed: "${name}"`)
    }
    return { kind: 'placeholder', label: name }
}

function stageFromRound(round: string): Stage {
    if (round.startsWith('Matchday')) return 'group'
    switch (round) {
        case 'Round of 32':
            return 'round-of-32'
        case 'Round of 16':
            return 'round-of-16'
        case 'Quarter-final':
        case 'Quarter-finals':
            return 'quarter-final'
        case 'Semi-final':
        case 'Semi-finals':
            return 'semi-final'
        case 'Match for third place':
            return 'third-place'
        case 'Final':
            return 'final'
        default:
            // Unknown label — treat as group stage rather than crash.
            console.warn(`[worldcup] unknown round label: "${round}"`)
            return 'group'
    }
}

function toScore(pair: [number, number] | undefined): Score | null {
    if (
        Array.isArray(pair) &&
        pair.length === 2 &&
        Number.isFinite(pair[0]) &&
        Number.isFinite(pair[1])
    ) {
        return [pair[0], pair[1]]
    }
    return null
}

/**
 * Presence of "score" with a full-time entry means the match was
 * played. The decisive score is penalties if present, else extra
 * time, else full time (verified against the 2022 file in the same
 * repo — e.g. the 2022 final: ft [2,2], et [3,3], p [4,2]).
 */
function parseResult(raw: RawScore | undefined): MatchResult | null {
    if (!raw) return null
    const ft = toScore(raw.ft)
    if (!ft) return null
    const ht = toScore(raw.ht)
    const et = toScore(raw.et)
    const p = toScore(raw.p)
    return { ht, ft, et, p, outcome: outcomeOf(p ?? et ?? ft) }
}

/** Outcome of a score from team1's perspective. */
function outcomeOf(score: Score): MatchOutcome {
    return score[0] > score[1] ? 'A' : score[0] < score[1] ? 'B' : 'draw'
}

function parseGroupLetter(group: string | undefined): GroupLetter | null {
    if (!group) return null
    const letter = group.replace(/^Group\s+/, '')
    return (ALL_GROUPS as readonly string[]).includes(letter)
        ? (letter as GroupLetter)
        : null
}

function buildMatch(raw: RawMatch, liveElo: Map<string, number>): WorldCupMatch | null {
    if (!raw.round || !raw.date || !raw.team1 || !raw.team2) {
        console.warn('[worldcup] skipping malformed match entry:', raw)
        return null
    }
    const team1 = resolveMatchTeam(raw.team1, liveElo)
    const team2 = resolveMatchTeam(raw.team2, liveElo)
    const probabilities =
        team1.kind === 'team' && team2.kind === 'team'
            ? matchProbabilities(team1.elo, team2.elo)
            : null
    const result = parseResult(raw.score)
    return {
        num: typeof raw.num === 'number' ? raw.num : null,
        round: raw.round,
        stage: stageFromRound(raw.round),
        date: raw.date,
        time: raw.time ?? null,
        ground: raw.ground ?? null,
        group: parseGroupLetter(raw.group),
        team1,
        team2,
        played: result !== null,
        probabilities,
        result,
        // The model's probabilities are for the 90-minute result
        // (model.ts), so upsets are judged on full time: a favorite
        // that draws and loses the shootout is treated as a draw here
        // (upset only above DRAW_UPSET_THRESHOLD), not an outright
        // underdog win. result.outcome keeps the decisive score for
        // bracket/advancement display.
        isUpset:
            result !== null && probabilities !== null
                ? isUpset({ probabilities, outcome: outcomeOf(result.ft) })
                : false,
    }
}

// ---------------------------------------------------------------------------
// Group tables
// ---------------------------------------------------------------------------

type MutableRow = Omit<GroupTableRow, 'status'>

function emptyRow(team: Team, liveElo: Map<string, number>): MutableRow {
    return {
        team,
        elo: liveElo.get(team.eloCode) ?? team.elo,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDiff: 0,
        points: 0,
    }
}

function applyResult(row: MutableRow, scored: number, conceded: number): void {
    row.played += 1
    row.goalsFor += scored
    row.goalsAgainst += conceded
    row.goalDiff = row.goalsFor - row.goalsAgainst
    if (scored > conceded) {
        row.won += 1
        row.points += 3
    } else if (scored === conceded) {
        row.drawn += 1
        row.points += 1
    } else {
        row.lost += 1
    }
}

/**
 * Head-to-head points earned in group matches played strictly among
 * the given subset of teams. Used to break ties after points/GD/GF.
 */
function headToHeadPoints(
    teamNames: Set<string>,
    groupMatches: WorldCupMatch[]
): Map<string, number> {
    const pts = new Map<string, number>()
    for (const name of teamNames) pts.set(name, 0)
    for (const m of groupMatches) {
        if (m.result === null || m.team1.kind !== 'team' || m.team2.kind !== 'team') {
            continue
        }
        const n1 = m.team1.team.openfootballName
        const n2 = m.team2.team.openfootballName
        if (!teamNames.has(n1) || !teamNames.has(n2)) continue
        const [g1, g2] = m.result.ft
        if (g1 > g2) pts.set(n1, (pts.get(n1) ?? 0) + 3)
        else if (g1 < g2) pts.set(n2, (pts.get(n2) ?? 0) + 3)
        else {
            pts.set(n1, (pts.get(n1) ?? 0) + 1)
            pts.set(n2, (pts.get(n2) ?? 0) + 1)
        }
    }
    return pts
}

/**
 * Rank rows by points, GD, GF; then break remaining ties by
 * head-to-head points among the tied subset; then alphabetical.
 * (Documented approximation of the full FIFA criteria, which also
 * include head-to-head GD/GF and fair play — those rarely bite and
 * would add opacity for negligible accuracy.)
 */
function rankRows(rows: MutableRow[], groupMatches: WorldCupMatch[]): MutableRow[] {
    const base = [...rows].sort(
        (a, b) =>
            b.points - a.points ||
            b.goalDiff - a.goalDiff ||
            b.goalsFor - a.goalsFor ||
            a.team.openfootballName.localeCompare(b.team.openfootballName)
    )
    // Find runs still tied on points/GD/GF and reorder by head-to-head.
    const ranked: MutableRow[] = []
    let i = 0
    while (i < base.length) {
        let j = i + 1
        while (
            j < base.length &&
            base[j].points === base[i].points &&
            base[j].goalDiff === base[i].goalDiff &&
            base[j].goalsFor === base[i].goalsFor
        ) {
            j++
        }
        const tied = base.slice(i, j)
        if (tied.length > 1) {
            const names = new Set(tied.map((r) => r.team.openfootballName))
            const h2h = headToHeadPoints(names, groupMatches)
            tied.sort(
                (a, b) =>
                    (h2h.get(b.team.openfootballName) ?? 0) -
                        (h2h.get(a.team.openfootballName) ?? 0) ||
                    a.team.openfootballName.localeCompare(b.team.openfootballName)
            )
        }
        ranked.push(...tied)
        i = j
    }
    return ranked
}

const GROUP_MATCHES_PER_TEAM = 3

function statusFor(
    index: number,
    row: MutableRow,
    ranked: MutableRow[],
    complete: boolean
): AdvancingStatus {
    if (complete) {
        if (index < 2) return 'top2'
        if (index === 2) return 'third-contender'
        return 'out'
    }
    // Group in progress: a team is out only when it can no longer catch
    // the current 3rd place even by winning every remaining match
    // (3rd place's points can only grow, so this check is conservative
    // and never eliminates a team prematurely).
    const maxPossible =
        row.points + 3 * (GROUP_MATCHES_PER_TEAM - row.played)
    const thirdPlacePoints = ranked[2]?.points ?? 0
    if (maxPossible < thirdPlacePoints) return 'out'
    return 'alive'
}

function buildGroupTables(
    matches: WorldCupMatch[],
    liveElo: Map<string, number>
): GroupTable[] {
    const groupMatches = matches.filter((m) => m.stage === 'group')
    return ALL_GROUPS.map((group) => {
        const teams = TEAMS.filter((t) => t.group === group)
        const rows = new Map<string, MutableRow>(
            teams.map((t) => [t.openfootballName, emptyRow(t, liveElo)])
        )
        const thisGroup = groupMatches.filter((m) => m.group === group)
        for (const m of thisGroup) {
            if (m.result === null || m.team1.kind !== 'team' || m.team2.kind !== 'team') {
                continue
            }
            const r1 = rows.get(m.team1.team.openfootballName)
            const r2 = rows.get(m.team2.team.openfootballName)
            if (!r1 || !r2) {
                console.warn(
                    `[worldcup] group ${group} match references team outside the group:`,
                    m.team1.team.openfootballName,
                    'vs',
                    m.team2.team.openfootballName
                )
                continue
            }
            // Group matches are decided in 90 minutes — use full time.
            const [g1, g2] = m.result.ft
            applyResult(r1, g1, g2)
            applyResult(r2, g2, g1)
        }
        const ranked = rankRows([...rows.values()], thisGroup)
        const complete = ranked.every((r) => r.played >= GROUP_MATCHES_PER_TEAM)
        return {
            group,
            complete,
            rows: ranked.map((row, index) => ({
                ...row,
                status: statusFor(index, row, ranked, complete),
            })),
        }
    })
}

/** Rank the 12 current third-placed teams; the best 8 advance. */
function buildThirdPlaceTable(groups: GroupTable[]): ThirdPlaceRow[] {
    const BEST_THIRDS = 8
    const thirds = groups
        .map((g) => ({ group: g.group, row: g.rows[2] }))
        .filter((entry): entry is { group: GroupLetter; row: GroupTableRow } =>
            entry.row !== undefined
        )
    thirds.sort(
        (a, b) =>
            b.row.points - a.row.points ||
            b.row.goalDiff - a.row.goalDiff ||
            b.row.goalsFor - a.row.goalsFor ||
            a.row.team.openfootballName.localeCompare(b.row.team.openfootballName)
    )
    return thirds.map((entry, index) => ({
        group: entry.group,
        team: entry.row.team,
        played: entry.row.played,
        points: entry.row.points,
        goalDiff: entry.row.goalDiff,
        goalsFor: entry.row.goalsFor,
        // A team with no matches played sits in the table only via
        // alphabetical fallback — never claim it is advancing.
        qualifies: index < BEST_THIRDS && entry.row.played > 0,
    }))
}

// ---------------------------------------------------------------------------
// Model accuracy
// ---------------------------------------------------------------------------

function buildModelStats(matches: WorldCupMatch[]): ModelStats {
    let decided = 0
    let favoriteWon = 0
    for (const m of matches) {
        if (m.result === null || m.probabilities === null) continue
        decided += 1
        const fav = favorite(m.probabilities)
        // Compare on the 90-minute score — the basis of the model's
        // win probabilities. A favorite winning only on penalties does
        // not count as the model being right about a 90-minute win.
        if (fav !== null && outcomeOf(m.result.ft) === fav.side) favoriteWon += 1
    }
    return {
        decided,
        favoriteWon,
        accuracyPct:
            decided > 0 ? Math.round((favoriteWon / decided) * 1000) / 10 : null,
    }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

/**
 * Fetch schedule + live Elo, join, and compute the full dashboard
 * dataset. Never throws: on any source failure it degrades to
 * baseline Elo ratings and/or an empty match list.
 */
export async function getWorldCupData(): Promise<WorldCupData> {
    const [schedule, liveElo] = await Promise.all([
        fetchSchedule(),
        fetchLiveElo(),
    ])

    const matches = schedule.matches
        .map((raw) => buildMatch(raw, liveElo))
        .filter((m): m is WorldCupMatch => m !== null)

    const groups = buildGroupTables(matches, liveElo)

    // Stamp the snapshot with the schedule data's actual age (its
    // response Date header), not the page-regeneration time — the two
    // caches drift up to an hour apart. Fall back to "now" when the
    // header is missing or unparseable.
    const fetchedAtMs = schedule.fetchedAt ? Date.parse(schedule.fetchedAt) : NaN

    return {
        lastUpdated: Number.isFinite(fetchedAtMs)
            ? new Date(fetchedAtMs).toISOString()
            : new Date().toISOString(),
        matches,
        upsets: matches.filter((m) => m.isUpset),
        modelStats: buildModelStats(matches),
        groups,
        thirdPlaceTable: buildThirdPlaceTable(groups),
    }
}
