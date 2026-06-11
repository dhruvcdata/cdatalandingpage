import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroHeader } from '@/components/hero5-header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
    getWorldCupData,
    type GroupTable,
    type MatchTeam,
    type Stage,
    type ThirdPlaceRow,
    type WorldCupData,
    type WorldCupMatch,
} from '@/lib/worldcup/data'
import { computeTravelArcs, venueMarkers } from '@/lib/worldcup/journeys'
import { favorite } from '@/lib/worldcup/model'
import WorldCupHero from './hero'
import { Reveal } from './reveal'
import WorldCupSubscribe from './subscribe-form'

export const revalidate = 3600

const PAGE_TITLE = 'World Cup 2026: The Data View — CData Insights'
const PAGE_DESCRIPTION =
    'Live Elo win probabilities, an upset tracker, and all 12 group tables for the 2026 World Cup — rebuilt hourly from open data. The tournament, tracked the way we track business data: probabilities, not opinions.'
const PAGE_URL = 'https://cdatainsights.com/worldcup'

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    // Resolves the route's file-based opengraph-image.tsx (1200x630,
    // auto-wired with width/height for og:image and twitter:image)
    // to an absolute production URL.
    metadataBase: new URL('https://cdatainsights.com'),
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: 'website',
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        siteName: 'CData Insights',
    },
    twitter: {
        card: 'summary_large_image',
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    },
}

// ---------------------------------------------------------------------------
// Page-scoped dark "scroll story" styling
// ---------------------------------------------------------------------------
//
// The cinematic theme lives entirely on this route: a near-black canvas
// (#02060f), sky/cyan accent glow matching the globe scene, and floating
// glassmorphism panels. Nothing here touches globals.css or any shared
// component — the global nav/footer already run on the site's dark token
// set and read fine on this background.

/** Floating glass panel (cards) */
const GLASS_CARD =
    'rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md ' +
    'transition-all duration-300 hover:border-sky-400/40 ' +
    'hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.4)]'

/** Glass panel without hover affordance (static/explanatory blocks) */
const GLASS_STATIC =
    'rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md'

// ---------------------------------------------------------------------------
// Helpers (server-side, presentational)
// ---------------------------------------------------------------------------

const STAGE_LABELS: Record<Stage, string> = {
    group: 'Group stage',
    'round-of-32': 'Round of 32',
    'round-of-16': 'Round of 16',
    'quarter-final': 'Quarter-final',
    'semi-final': 'Semi-final',
    'third-place': 'Third place',
    final: 'Final',
}

function pct(p: number): number {
    return Math.round(p * 100)
}

function formatMatchDate(date: string): string {
    const d = new Date(`${date}T00:00:00Z`)
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
    }).format(d)
}

function formatLastUpdated(iso: string): string {
    const d = new Date(iso)
    return (
        new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'UTC',
        }).format(d) + ' UTC'
    )
}

function teamName(side: MatchTeam): string {
    return side.kind === 'team' ? side.team.openfootballName : side.label
}

function scoreLine(m: WorldCupMatch): string {
    if (!m.result) return ''
    const [a, b] = m.result.ft
    let line = `${a}–${b}`
    if (m.result.p) line += ` (${m.result.p[0]}–${m.result.p[1]} pens)`
    else if (m.result.et) line += ` (aet ${m.result.et[0]}–${m.result.et[1]})`
    return line
}

/**
 * Kickoff instant (epoch ms) parsed from the feed's venue-local date,
 * time, and UTC offset, e.g. "2026-06-11" + "22:00 UTC-4". Null when
 * the time is missing or unparseable.
 */
function kickoffMs(m: WorldCupMatch): number | null {
    if (!m.time) return null
    const parsed = /^(\d{1,2}):(\d{2})\s*UTC([+-])(\d{1,2})(?::(\d{2}))?$/.exec(m.time)
    if (!parsed) return null
    const [, hh, mm, sign, offH, offM] = parsed
    const iso = `${m.date}T${hh.padStart(2, '0')}:${mm}:00${sign}${offH.padStart(2, '0')}:${offM ?? '00'}`
    const ms = new Date(iso).getTime()
    return Number.isFinite(ms) ? ms : null
}

/**
 * Unplayed fixtures kicking off within the next 48 hours, compared as
 * real instants (date + venue-local time + UTC offset), not date
 * strings — venue days lag UTC days by up to 7 hours, so date-level
 * comparison drops imminent fixtures every UTC evening. If the window
 * is empty (feed gap, rest day), fall back to the next six scheduled
 * fixtures so the section never renders blank mid-tournament.
 */
function upcomingFixtures(data: WorldCupData): {
    fixtures: WorldCupMatch[]
    windowed: boolean
} {
    const now = new Date(data.lastUpdated).getTime()
    const windowEnd = now + 48 * 60 * 60 * 1000
    const upcoming = data.matches
        .filter((m) => !m.played)
        .sort((a, b) => {
            const ka = kickoffMs(a)
            const kb = kickoffMs(b)
            if (ka !== null && kb !== null) return ka - kb
            // Date-string ordering only when a kickoff time is missing.
            return (
                a.date.localeCompare(b.date) ||
                (a.time ?? '').localeCompare(b.time ?? '')
            )
        })
    const inWindow = upcoming.filter((m) => {
        const k = kickoffMs(m)
        if (k !== null) return k >= now && k <= windowEnd
        // No parseable kickoff time: degrade to date granularity.
        const startDay = new Date(now).toISOString().slice(0, 10)
        const endDay = new Date(windowEnd).toISOString().slice(0, 10)
        return m.date >= startDay && m.date <= endDay
    })
    if (inWindow.length > 0) return { fixtures: inWindow, windowed: true }
    return { fixtures: upcoming.slice(0, 6), windowed: false }
}

/** Pre-match favorite win probability, 0 when probabilities are missing. */
function favoriteProbability(m: WorldCupMatch): number {
    if (!m.probabilities) return 0
    return favorite(m.probabilities)?.probability ?? 0
}

/** Cap so a knockout-round pile of upsets can't push the page out. */
const MAX_UPSETS_SHOWN = 8

// ---------------------------------------------------------------------------
// Small presentational pieces
// ---------------------------------------------------------------------------

function TeamLabel({ side, alignRight = false }: { side: MatchTeam; alignRight?: boolean }) {
    if (side.kind === 'placeholder') {
        return (
            <span
                className={`font-mono text-sm text-muted-foreground ${alignRight ? 'text-right' : ''}`}
            >
                {side.label}
            </span>
        )
    }
    return (
        <span
            className={`flex min-w-0 items-center gap-2 ${alignRight ? 'flex-row-reverse text-right' : ''}`}
        >
            <span aria-hidden>{side.team.flag}</span>
            <span className="truncate text-sm font-medium">{side.team.openfootballName}</span>
        </span>
    )
}

/** Three-way win/draw/win probability bar — plain styled divs, no chart lib. */
function ProbabilityBar({ winA, draw, winB }: { winA: number; draw: number; winB: number }) {
    return (
        <div>
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="bg-blue-500" style={{ width: `${winA * 100}%` }} />
                <div className="bg-gray-600" style={{ width: `${draw * 100}%` }} />
                <div className="bg-gray-300" style={{ width: `${winB * 100}%` }} />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-xs text-muted-foreground">
                <span className="text-blue-400">{pct(winA)}%</span>
                <span>draw {pct(draw)}%</span>
                <span className="text-gray-300">{pct(winB)}%</span>
            </div>
        </div>
    )
}

function UpsetRow({ match }: { match: WorldCupMatch }) {
    const fav = match.probabilities ? favorite(match.probabilities) : null
    const favSide = fav?.side === 'A' ? match.team1 : match.team2
    const favPct = fav ? pct(fav.probability) : null
    return (
        <div className={`${GLASS_CARD} p-4 sm:p-5`}>
            <div className="flex items-center justify-between gap-3">
                <div className="grid min-w-0 flex-1 grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
                    <TeamLabel side={match.team1} />
                    <span className="whitespace-nowrap font-mono text-sm font-medium text-white">
                        {scoreLine(match)}
                    </span>
                    <TeamLabel side={match.team2} alignRight />
                </div>
            </div>
            {fav && favPct !== null && (
                <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                            Favorite: <span className="text-foreground">{teamName(favSide)}</span>{' '}
                            — {favPct}% to win pre-match
                        </span>
                        <span className="hidden font-mono sm:inline">
                            {STAGE_LABELS[match.stage]} · {formatMatchDate(match.date)}
                        </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${favPct}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

function FixtureCard({ match }: { match: WorldCupMatch }) {
    return (
        <div className={`${GLASS_CARD} p-4 sm:p-5`}>
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>
                    {formatMatchDate(match.date)}
                    {match.time ? ` · ${match.time}` : ''}
                </span>
                <span>
                    {match.group ? `Group ${match.group}` : STAGE_LABELS[match.stage]}
                    {match.ground ? ` · ${match.ground}` : ''}
                </span>
            </div>
            <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
                <TeamLabel side={match.team1} />
                <span className="text-xs text-muted-foreground">vs</span>
                <TeamLabel side={match.team2} alignRight />
            </div>
            <div className="mt-4">
                {match.probabilities ? (
                    <ProbabilityBar {...match.probabilities} />
                ) : (
                    <p className="font-mono text-xs text-muted-foreground">
                        Probabilities pending — opponents not yet decided
                    </p>
                )}
            </div>
        </div>
    )
}

function GroupCard({ table }: { table: GroupTable }) {
    // Before a group has played anything, rankRows falls back to
    // alphabetical order — highlighting "top two" then would present
    // an arbitrary artifact as a standing. Gate all visual claims on
    // actual play.
    const anyPlayed = table.rows.some((r) => r.played > 0)
    return (
        <div className={`${GLASS_CARD} p-4`}>
            <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium">Group {table.group}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                    {table.complete ? 'final' : anyPlayed ? 'in progress' : 'not started'}
                </span>
            </div>
            <table className="mt-3 w-full text-sm">
                <thead>
                    <tr className="border-b border-white/10 text-left font-mono text-xs text-muted-foreground">
                        <th className="py-1.5 pr-2 font-normal">Team</th>
                        <th className="py-1.5 px-2 text-right font-normal">P</th>
                        <th className="py-1.5 px-2 text-right font-normal">GD</th>
                        <th className="py-1.5 pl-2 text-right font-normal">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {table.rows.map((row, index) => {
                        // Encode current standing even mid-group: rows 1–2 are
                        // on direct-advance pace, row 3 is a third-place
                        // contender, eliminated teams are dimmed.
                        const out = row.status === 'out'
                        const top2 =
                            anyPlayed && !out && (row.status === 'top2' || index < 2)
                        const third =
                            anyPlayed &&
                            !out &&
                            (row.status === 'third-contender' || index === 2)
                        return (
                            <tr
                                key={row.team.openfootballName}
                                className={`border-b border-white/5 last:border-0 ${
                                    out ? 'opacity-40' : ''
                                } ${top2 ? 'bg-blue-500/10' : ''}`}
                            >
                                <td className="py-1.5 pr-2">
                                    <span className="flex min-w-0 items-center gap-2">
                                        <span
                                            aria-hidden
                                            className={`size-1.5 shrink-0 rounded-full ${
                                                top2
                                                    ? 'bg-blue-400'
                                                    : third
                                                      ? 'border border-blue-400 bg-transparent'
                                                      : 'bg-gray-700'
                                            }`}
                                        />
                                        <span aria-hidden>{row.team.flag}</span>
                                        <span className="truncate">
                                            {row.team.openfootballName}
                                        </span>
                                    </span>
                                </td>
                                <td className="py-1.5 px-2 text-right font-mono text-muted-foreground">
                                    {row.played}
                                </td>
                                <td className="py-1.5 px-2 text-right font-mono text-muted-foreground">
                                    {row.goalDiff > 0 ? `+${row.goalDiff}` : row.goalDiff}
                                </td>
                                <td className="py-1.5 pl-2 text-right font-mono font-medium text-white">
                                    {row.points}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

function ThirdPlaceTable({ rows }: { rows: ThirdPlaceRow[] }) {
    // Until results exist, the "ranking" is alphabetical fallback —
    // show neutral rows (no advancing badges, no dimming) plus an
    // honest note instead of fake precision.
    const anyPlayed = rows.some((r) => r.played > 0)
    return (
        <div className={`${GLASS_STATIC} overflow-x-auto p-4`}>
            {!anyPlayed && (
                <p className="mb-3 font-mono text-xs text-muted-foreground">
                    Ranking starts once group results land — until then, no team is
                    marked as advancing.
                </p>
            )}
            <table className="w-full min-w-[28rem] text-sm">
                <thead>
                    <tr className="border-b border-white/10 text-left font-mono text-xs text-muted-foreground">
                        <th className="py-1.5 pr-2 font-normal">#</th>
                        <th className="py-1.5 px-2 font-normal">Team</th>
                        <th className="py-1.5 px-2 font-normal">Grp</th>
                        <th className="py-1.5 px-2 text-right font-normal">P</th>
                        <th className="py-1.5 px-2 text-right font-normal">Pts</th>
                        <th className="py-1.5 px-2 text-right font-normal">GD</th>
                        <th className="py-1.5 pl-2 text-right font-normal">GF</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr
                            key={row.team.openfootballName}
                            className={`border-b border-white/5 last:border-0 ${
                                row.qualifies
                                    ? 'bg-blue-500/10'
                                    : anyPlayed
                                      ? 'opacity-50'
                                      : ''
                            }`}
                        >
                            <td className="py-1.5 pr-2 font-mono text-muted-foreground">
                                {index + 1}
                            </td>
                            <td className="py-1.5 px-2">
                                <span className="flex items-center gap-2">
                                    <span aria-hidden>{row.team.flag}</span>
                                    <span className="truncate">{row.team.openfootballName}</span>
                                    {row.qualifies && (
                                        <span className="rounded-full border border-blue-500/40 px-2 py-0.5 font-mono text-[10px] text-blue-400">
                                            advancing
                                        </span>
                                    )}
                                </span>
                            </td>
                            <td className="py-1.5 px-2 font-mono text-muted-foreground">
                                {row.group}
                            </td>
                            <td className="py-1.5 px-2 text-right font-mono text-muted-foreground">
                                {row.played}
                            </td>
                            <td className="py-1.5 px-2 text-right font-mono font-medium text-white">
                                {row.points}
                            </td>
                            <td className="py-1.5 px-2 text-right font-mono text-muted-foreground">
                                {row.goalDiff > 0 ? `+${row.goalDiff}` : row.goalDiff}
                            </td>
                            <td className="py-1.5 pl-2 text-right font-mono text-muted-foreground">
                                {row.goalsFor}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function PipelineNode({ title, body }: { title: string; body: string }) {
    return (
        <div className={`${GLASS_CARD} flex-1 p-4`}>
            <div className="font-mono text-xs text-sky-400">{title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{body}</div>
        </div>
    )
}

function PipelineArrow() {
    return (
        <div aria-hidden className="self-center font-mono text-sky-400 rotate-90 md:rotate-0">
            →
        </div>
    )
}

/** Soft accent glow behind a section (pure CSS, server-rendered). */
function SectionGlow({ className }: { className: string }) {
    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
        />
    )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function WorldCupPage() {
    const data = await getWorldCupData()
    const { fixtures, windowed } = upcomingFixtures(data)
    const { modelStats, upsets } = data

    // Biggest shocks first — the section's promise ("the longer the
    // bar, the bigger the shock") only reads if bars descend — and
    // capped so the list stays bounded deep into the knockouts.
    const shownUpsets = [...upsets]
        .sort((a, b) => favoriteProbability(b) - favoriteProbability(a))
        .slice(0, MAX_UPSETS_SHOWN)

    // Globe scene props, computed server-side (pure helpers) and pinned
    // to the feed's lastUpdated instant so ISR snapshots stay stable.
    const markers = venueMarkers()
    const arcs = computeTravelArcs(data.matches, {
        now: new Date(data.lastUpdated),
    })

    return (
        <div className="relative isolate min-h-screen overflow-x-clip bg-[#02060f] text-slate-50">
            {/* No-JS fallback: reveal shells and hero beats render at full
                opacity in normal flow, so every piece of content stays
                readable without JavaScript. */}
            <noscript>
                <style>{`
                    [data-wc-reveal] { opacity: 1 !important; transform: none !important; }
                    [data-wc-beat] { opacity: 1 !important; position: relative !important; transform: none !important; padding: 3rem 0; }
                `}</style>
            </noscript>

            <HeroHeader />

            {/* ============================== ACT I ==============================
                Two full-viewport story beats over the 3D globe (or its static
                gradient stand-in). All hero text is SSR'd inside hero.tsx. */}
            <WorldCupHero
                markers={markers}
                arcs={arcs}
                lastUpdatedLabel={formatLastUpdated(data.lastUpdated)}
            />

            {/* ============================== ACT II =============================
                The live model: server-rendered data in floating glass panels,
                revealed by small client shells (children stay server HTML). */}

            {/* Upset tracker */}
            <section id="upsets" className="relative scroll-mt-24 py-16 md:py-24">
                <SectionGlow className="-top-20 right-[-10rem] h-96 w-96 bg-sky-500/10" />
                <div className="mx-auto max-w-5xl px-6">
                    <Reveal>
                        <h2 className="text-4xl font-medium">Upset tracker</h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Decided matches where the Elo favorite failed. The bar shows the
                            favorite&apos;s pre-match win probability — the longer the bar,
                            the bigger the shock.
                        </p>
                    </Reveal>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
                        <div className="space-y-4">
                            {modelStats.decided === 0 ? (
                                <Reveal delay={0.1}>
                                    <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center backdrop-blur-md">
                                        <p className="text-lg font-medium">Model warming up</p>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            No decided matches scored yet. Results are scored
                                            against the model within an hour of full time —
                                            upsets land here automatically.
                                        </p>
                                    </div>
                                </Reveal>
                            ) : upsets.length === 0 ? (
                                <Reveal delay={0.1}>
                                    <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center backdrop-blur-md">
                                        <p className="text-lg font-medium">No upsets yet</p>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Favorites have held serve in all {modelStats.decided}{' '}
                                            decided {modelStats.decided === 1 ? 'match' : 'matches'}.
                                            The model is watching.
                                        </p>
                                    </div>
                                </Reveal>
                            ) : (
                                <>
                                    {shownUpsets.map((m, i) => (
                                        <Reveal
                                            key={`${m.date}-${teamName(m.team1)}`}
                                            delay={Math.min(i * 0.08, 0.4)}
                                            duration={0.7}
                                        >
                                            <UpsetRow match={m} />
                                        </Reveal>
                                    ))}
                                    {upsets.length > shownUpsets.length && (
                                        <Reveal delay={0.1}>
                                            <p className="font-mono text-xs text-muted-foreground">
                                                The {shownUpsets.length} biggest of{' '}
                                                {upsets.length} upsets so far.
                                            </p>
                                        </Reveal>
                                    )}
                                </>
                            )}
                        </div>

                        <Reveal delay={0.15} duration={0.9}>
                            <div className={`${GLASS_STATIC} h-fit p-6 shadow-[0_0_50px_-18px_rgba(56,189,248,0.45)]`}>
                                <p className="font-mono text-xs text-muted-foreground">
                                    Model accuracy
                                </p>
                                <p className="mt-2 text-4xl font-medium text-sky-400">
                                    {modelStats.accuracyPct !== null
                                        ? `${modelStats.accuracyPct}%`
                                        : '—'}
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {modelStats.decided > 0 ? (
                                        <>
                                            Favorites won{' '}
                                            <span className="text-foreground">
                                                {modelStats.favoriteWon} of {modelStats.decided}
                                            </span>{' '}
                                            decided matches.
                                        </>
                                    ) : (
                                        'No decided matches scored yet.'
                                    )}
                                </p>
                                <p className="mt-4 border-t border-white/10 pt-4 text-xs text-muted-foreground">
                                    An upset = a side with ≥55% pre-match win probability
                                    failing to win (draws count only against ≥65% favorites).
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Early, low-friction conversion path — the only other
                        ask lives several viewports down in the closing CTA. */}
                    <Reveal delay={0.2}>
                        <p className="mt-8 text-sm text-muted-foreground">
                            We&apos;re writing up how this page was built —{' '}
                            <a
                                href="#writeup"
                                className="text-sky-400 underline decoration-sky-400/40 underline-offset-4 transition-colors hover:text-sky-300"
                            >
                                get it by email
                            </a>
                            .
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Next matches */}
            <section id="fixtures" className="relative scroll-mt-24 py-16 md:py-24">
                <SectionGlow className="top-1/3 left-[-12rem] h-[28rem] w-[28rem] bg-blue-600/10" />
                <div className="mx-auto max-w-5xl px-6">
                    <Reveal>
                        <h2 className="text-4xl font-medium">
                            {windowed ? 'Next 48 hours' : 'Next fixtures'}
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Three-way pre-match probabilities — win, draw, win — straight from
                            the live Elo ratings.
                        </p>
                    </Reveal>
                    {fixtures.length === 0 ? (
                        <Reveal delay={0.1}>
                            <div className="mt-8 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center backdrop-blur-md">
                                <p className="text-sm text-muted-foreground">
                                    No upcoming fixtures in the feed right now — check back
                                    after the next hourly refresh.
                                </p>
                            </div>
                        </Reveal>
                    ) : (
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {fixtures.map((m, i) => (
                                <Reveal
                                    key={`${m.date}-${m.time ?? ''}-${teamName(m.team1)}`}
                                    delay={(i % 2) * 0.1}
                                    duration={0.7}
                                >
                                    <FixtureCard match={m} />
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Groups */}
            <section id="groups" className="relative scroll-mt-24 py-16 md:py-24">
                <SectionGlow className="bottom-0 right-[-8rem] h-[26rem] w-[26rem] bg-sky-500/[0.07]" />
                <div className="mx-auto max-w-5xl px-6">
                    <Reveal>
                        <h2 className="text-4xl font-medium">All 12 groups</h2>
                        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <span aria-hidden className="size-1.5 rounded-full bg-blue-400" />
                                Top two — advance directly
                            </span>
                            <span className="flex items-center gap-2">
                                <span
                                    aria-hidden
                                    className="size-1.5 rounded-full border border-blue-400"
                                />
                                Third place — contends for a best-8 slot
                            </span>
                            <span className="opacity-50">Dimmed — eliminated</span>
                        </div>
                    </Reveal>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {data.groups.map((g, i) => (
                            <Reveal key={g.group} delay={(i % 3) * 0.08} duration={0.7}>
                                <GroupCard table={g} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <h3 className="mt-16 text-xl font-medium">
                            Best eight third-placed teams
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                            The 48-team format&apos;s data-engineering edge case: no group can
                            compute its own fate, because the eight advancing thirds are a
                            cross-group ranking — effectively a window function over all 12
                            tables at once, re-evaluated after every match.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1} duration={0.9}>
                        <div className="mt-6">
                            <ThirdPlaceTable rows={data.thirdPlaceTable} />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============================== ACT III ============================
                How it's built, then the conversion close on dark glass. */}

            {/* How this works */}
            <section id="pipeline" className="relative scroll-mt-24 py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <Reveal>
                        <h2 className="text-4xl font-medium">How this works</h2>
                    </Reveal>
                    <Reveal delay={0.1} duration={0.9}>
                        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-stretch">
                            <PipelineNode
                                title="sources"
                                body="openfootball schedule & results + eloratings.net live ratings"
                            />
                            <PipelineArrow />
                            <PipelineNode
                                title="refresh"
                                body="Hourly ISR — Next.js revalidates both feeds every 3600s"
                            />
                            <PipelineArrow />
                            <PipelineNode
                                title="model"
                                body="Transparent Elo → win/draw/win probabilities, upsets, accuracy"
                            />
                            <PipelineArrow />
                            <PipelineNode
                                title="this page"
                                body="Server-rendered, zero client-side data fetching"
                            />
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="mt-8 max-w-3xl text-muted-foreground">
                            Two open data feeds are joined against a verified 48-team mapping,
                            scored by a textbook Elo model with one documented draw heuristic,
                            and rendered server-side — no chart libraries, no client fetches.
                            If a source goes down, the page degrades to its baseline snapshot
                            instead of breaking. It&apos;s the same pipeline discipline we
                            apply to revenue data, at toy scale.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Lead CTA — the conversion close, deliberately the brightest
                object on the page. */}
            <section id="writeup" className="relative scroll-mt-24 py-16 md:py-32">
                <SectionGlow className="left-1/2 top-1/2 h-[30rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 bg-sky-500/[0.08]" />
                <div className="mx-auto max-w-5xl px-6">
                    <Reveal duration={0.9}>
                        <div className="relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-sky-500/10 via-white/[0.03] to-transparent p-8 shadow-[0_0_90px_-25px_rgba(56,189,248,0.5)] backdrop-blur-md md:p-14">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-28 right-[-4rem] h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"
                            />
                            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <h2 className="text-4xl font-medium md:text-5xl">
                                        Want your business data this fresh?
                                    </h2>
                                    <p className="mt-4 max-w-xl text-lg text-slate-300">
                                        This page went from idea to production in a weekend: live
                                        sources, a defensible model, hourly refresh. We build the
                                        same thing for pipelines that actually pay the bills.
                                    </p>
                                    <div className="mt-8 flex flex-wrap items-center gap-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 bg-sky-500 px-10 text-base text-white shadow-[0_0_35px_-8px_rgba(56,189,248,0.9)] transition-shadow hover:bg-sky-400 hover:shadow-[0_0_45px_-6px_rgba(56,189,248,1)]"
                                        >
                                            <Link href="/contact">Book a call</Link>
                                        </Button>
                                        <span className="font-mono text-xs text-slate-400">
                                            30 minutes, straight to your stack — no deck.
                                        </span>
                                    </div>
                                </div>
                                <WorldCupSubscribe />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}
