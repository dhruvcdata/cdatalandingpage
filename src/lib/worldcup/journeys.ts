/**
 * World Cup 2026 — venue geography and team travel journeys.
 *
 * Pure helpers (no fetch, no Date side effects beyond an injectable
 * "now") that turn the match list from getWorldCupData() into the
 * props for the 3D globe scene:
 *
 *  - VENUES: the 16 host stadiums, keyed by the EXACT `ground` string
 *    used in the openfootball 2026 feed (WorldCupMatch.ground)
 *  - venueMarkers(): the stadium markers for the globe
 *  - computeTravelArcs(matches): for every fixture in the next ~7
 *    days, a great-circle arc from each competing team's previous
 *    match venue to the upcoming venue
 */

import type { WorldCupMatch } from './data'

// ---------------------------------------------------------------------------
// Types (shared contract with WorldCupGlobe)
// ---------------------------------------------------------------------------

export type Venue = {
    /** Exact `ground` string from the openfootball feed (join key) */
    key: string
    stadium: string
    city: string
    country: 'USA' | 'Mexico' | 'Canada'
    lat: number
    lon: number
}

export type GlobeMarker = {
    /** Venue key (feed `ground` string) */
    id: string
    /** Stadium name */
    label: string
    city: string
    lat: number
    lon: number
}

export type GlobeArc = {
    /** Stable unique id (team + route + date) */
    id: string
    /** Travelling team's openfootball name */
    team: string
    /** Venue key of the team's previous match */
    fromVenue: string
    /** Venue key of the upcoming match */
    toVenue: string
    /** Date (YYYY-MM-DD) of the upcoming match */
    date: string
    from: { lat: number; lon: number }
    to: { lat: number; lon: number }
}

// ---------------------------------------------------------------------------
// The 16 host stadiums (coordinates of the stadium itself, not the city)
// ---------------------------------------------------------------------------

const VENUE_LIST: readonly Venue[] = [
    // Mexico
    { key: 'Mexico City', stadium: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', lat: 19.3029, lon: -99.1505 },
    { key: 'Guadalajara (Zapopan)', stadium: 'Estadio Akron', city: 'Zapopan (Guadalajara)', country: 'Mexico', lat: 20.6818, lon: -103.4626 },
    { key: 'Monterrey (Guadalupe)', stadium: 'Estadio BBVA', city: 'Guadalupe (Monterrey)', country: 'Mexico', lat: 25.6692, lon: -100.2444 },
    // Canada
    { key: 'Toronto', stadium: 'BMO Field', city: 'Toronto', country: 'Canada', lat: 43.6332, lon: -79.4186 },
    { key: 'Vancouver', stadium: 'BC Place', city: 'Vancouver', country: 'Canada', lat: 49.2768, lon: -123.1119 },
    // USA
    { key: 'Seattle', stadium: 'Lumen Field', city: 'Seattle', country: 'USA', lat: 47.5952, lon: -122.3316 },
    { key: 'San Francisco Bay Area (Santa Clara)', stadium: "Levi's Stadium", city: 'Santa Clara', country: 'USA', lat: 37.4032, lon: -121.9696 },
    { key: 'Los Angeles (Inglewood)', stadium: 'SoFi Stadium', city: 'Inglewood (Los Angeles)', country: 'USA', lat: 33.9535, lon: -118.3391 },
    { key: 'Houston', stadium: 'NRG Stadium', city: 'Houston', country: 'USA', lat: 29.6847, lon: -95.4107 },
    { key: 'Dallas (Arlington)', stadium: 'AT&T Stadium', city: 'Arlington (Dallas)', country: 'USA', lat: 32.7473, lon: -97.0945 },
    { key: 'Kansas City', stadium: 'GEHA Field at Arrowhead Stadium', city: 'Kansas City', country: 'USA', lat: 39.0489, lon: -94.4839 },
    { key: 'Atlanta', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta', country: 'USA', lat: 33.7554, lon: -84.4009 },
    { key: 'Miami (Miami Gardens)', stadium: 'Hard Rock Stadium', city: 'Miami Gardens', country: 'USA', lat: 25.958, lon: -80.2389 },
    { key: 'Boston (Foxborough)', stadium: 'Gillette Stadium', city: 'Foxborough (Boston)', country: 'USA', lat: 42.0909, lon: -71.2643 },
    { key: 'Philadelphia', stadium: 'Lincoln Financial Field', city: 'Philadelphia', country: 'USA', lat: 39.9008, lon: -75.1675 },
    { key: 'New York/New Jersey (East Rutherford)', stadium: 'MetLife Stadium', city: 'East Rutherford (NY/NJ)', country: 'USA', lat: 40.8135, lon: -74.0745 },
]

/** Host venues keyed by the exact feed `ground` string. */
export const VENUES: ReadonlyMap<string, Venue> = new Map(
    VENUE_LIST.map((v) => [v.key, v])
)

/** The 16 stadium markers for the globe scene. */
export function venueMarkers(): GlobeMarker[] {
    return VENUE_LIST.map((v) => ({
        id: v.key,
        label: v.stadium,
        city: v.city,
        lat: v.lat,
        lon: v.lon,
    }))
}

// ---------------------------------------------------------------------------
// Travel arcs
// ---------------------------------------------------------------------------

export type TravelArcOptions = {
    /** "Now" for testability; defaults to the real current time */
    now?: Date
    /** Look-ahead window for upcoming fixtures (days, default 7) */
    horizonDays?: number
    /** Hard cap on arcs returned (default 30) */
    maxArcs?: number
}

function toDateString(d: Date): string {
    return d.toISOString().slice(0, 10)
}

function involvesTeam(m: WorldCupMatch, teamName: string): boolean {
    return (
        (m.team1.kind === 'team' && m.team1.team.openfootballName === teamName) ||
        (m.team2.kind === 'team' && m.team2.team.openfootballName === teamName)
    )
}

/**
 * The venue key of the team's latest match strictly before
 * `beforeDate` (played or not — by tournament time it will have been
 * played). Null when the team has no earlier match at a known venue,
 * e.g. before its opening fixture.
 */
function lastVenueBefore(
    matches: readonly WorldCupMatch[],
    teamName: string,
    beforeDate: string
): string | null {
    let best: WorldCupMatch | null = null
    for (const m of matches) {
        if (m.date >= beforeDate) continue
        if (!m.ground || !VENUES.has(m.ground)) continue
        if (!involvesTeam(m, teamName)) continue
        if (
            best === null ||
            m.date > best.date ||
            (m.date === best.date && (m.num ?? 0) > (best.num ?? 0))
        ) {
            best = m
        }
    }
    return best?.ground ?? null
}

/**
 * Team travel arcs for the globe: for each upcoming fixture in the
 * next `horizonDays` days, one arc per competing team from that
 * team's previous match venue to the upcoming venue.
 *
 * Skipped: teams with no previous venue (opening fixtures),
 * placeholder sides (unresolved knockout slots), fixtures at unmapped
 * grounds, and zero-length "arcs" (previous match at the same venue).
 * Output is deterministic for a given `now` and capped at `maxArcs`.
 */
export function computeTravelArcs(
    matches: readonly WorldCupMatch[],
    options: TravelArcOptions = {}
): GlobeArc[] {
    const { now = new Date(), horizonDays = 7, maxArcs = 30 } = options
    const startDate = toDateString(now)
    const endDate = toDateString(
        new Date(now.getTime() + horizonDays * 24 * 60 * 60 * 1000)
    )

    const upcoming = matches
        .filter(
            (m) =>
                !m.played &&
                m.ground !== null &&
                VENUES.has(m.ground) &&
                m.date >= startDate &&
                m.date <= endDate
        )
        .sort((a, b) => a.date.localeCompare(b.date) || (a.num ?? 0) - (b.num ?? 0))

    const arcs: GlobeArc[] = []
    const seen = new Set<string>()

    for (const match of upcoming) {
        if (arcs.length >= maxArcs) break
        const toVenue = VENUES.get(match.ground as string)
        if (!toVenue) continue

        for (const side of [match.team1, match.team2]) {
            if (arcs.length >= maxArcs) break
            if (side.kind !== 'team') continue
            const teamName = side.team.openfootballName

            const fromKey = lastVenueBefore(matches, teamName, match.date)
            if (fromKey === null || fromKey === toVenue.key) continue
            const fromVenue = VENUES.get(fromKey)
            if (!fromVenue) continue

            const id = `${teamName}|${fromKey}|${toVenue.key}|${match.date}`
            if (seen.has(id)) continue
            seen.add(id)

            arcs.push({
                id,
                team: teamName,
                fromVenue: fromKey,
                toVenue: toVenue.key,
                date: match.date,
                from: { lat: fromVenue.lat, lon: fromVenue.lon },
                to: { lat: toVenue.lat, lon: toVenue.lon },
            })
        }
    }

    return arcs
}
