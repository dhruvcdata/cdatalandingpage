/**
 * World Cup 2026 — the 48 qualified teams.
 *
 * Each entry joins three independent data sources:
 *  - `openfootballName`: exact team string used in the openfootball
 *    worldcup.json schedule/results feed (join key for match data)
 *  - `eloCode`: 2-letter team code used by eloratings.net World.tsv
 *    (join key for live Elo ratings; note nonstandard codes such as
 *    Scotland = SQ, England = EN)
 *  - `elo`: baseline Elo rating snapshot, used as a fallback whenever
 *    the live eloratings.net feed is unavailable
 */

export type GroupLetter =
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'

export type Team = {
    /** Team name exactly as it appears in the openfootball 2026 feed */
    openfootballName: string
    /** 2-letter team code used by eloratings.net (World.tsv column 3) */
    eloCode: string
    /** Group letter A–L */
    group: GroupLetter
    /** Baseline Elo rating (fallback when the live feed is down) */
    elo: number
    /** Flag emoji for display */
    flag: string
}

export const ALL_GROUPS: readonly GroupLetter[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
]

export const TEAMS: readonly Team[] = [
    { openfootballName: 'Algeria', eloCode: 'DZ', group: 'J', elo: 1772, flag: '🇩🇿' },
    { openfootballName: 'Argentina', eloCode: 'AR', group: 'J', elo: 2115, flag: '🇦🇷' },
    { openfootballName: 'Australia', eloCode: 'AU', group: 'D', elo: 1777, flag: '🇦🇺' },
    { openfootballName: 'Austria', eloCode: 'AT', group: 'J', elo: 1830, flag: '🇦🇹' },
    { openfootballName: 'Belgium', eloCode: 'BE', group: 'G', elo: 1894, flag: '🇧🇪' },
    { openfootballName: 'Bosnia & Herzegovina', eloCode: 'BA', group: 'B', elo: 1595, flag: '🇧🇦' },
    { openfootballName: 'Brazil', eloCode: 'BR', group: 'C', elo: 1991, flag: '🇧🇷' },
    { openfootballName: 'Canada', eloCode: 'CA', group: 'B', elo: 1788, flag: '🇨🇦' },
    { openfootballName: 'Cape Verde', eloCode: 'CV', group: 'H', elo: 1578, flag: '🇨🇻' },
    { openfootballName: 'Colombia', eloCode: 'CO', group: 'K', elo: 1982, flag: '🇨🇴' },
    { openfootballName: 'Croatia', eloCode: 'HR', group: 'L', elo: 1912, flag: '🇭🇷' },
    { openfootballName: 'Curaçao', eloCode: 'CW', group: 'E', elo: 1434, flag: '🇨🇼' },
    { openfootballName: 'Czech Republic', eloCode: 'CZ', group: 'A', elo: 1740, flag: '🇨🇿' },
    { openfootballName: 'DR Congo', eloCode: 'CD', group: 'K', elo: 1652, flag: '🇨🇩' },
    { openfootballName: 'Ecuador', eloCode: 'EC', group: 'E', elo: 1938, flag: '🇪🇨' },
    { openfootballName: 'Egypt', eloCode: 'EG', group: 'G', elo: 1696, flag: '🇪🇬' },
    { openfootballName: 'England', eloCode: 'EN', group: 'L', elo: 2024, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { openfootballName: 'France', eloCode: 'FR', group: 'I', elo: 2063, flag: '🇫🇷' },
    { openfootballName: 'Germany', eloCode: 'DE', group: 'E', elo: 1932, flag: '🇩🇪' },
    { openfootballName: 'Ghana', eloCode: 'GH', group: 'L', elo: 1510, flag: '🇬🇭' },
    { openfootballName: 'Haiti', eloCode: 'HT', group: 'C', elo: 1548, flag: '🇭🇹' },
    { openfootballName: 'Iran', eloCode: 'IR', group: 'G', elo: 1772, flag: '🇮🇷' },
    { openfootballName: 'Iraq', eloCode: 'IQ', group: 'I', elo: 1607, flag: '🇮🇶' },
    { openfootballName: 'Ivory Coast', eloCode: 'CI', group: 'E', elo: 1695, flag: '🇨🇮' },
    { openfootballName: 'Japan', eloCode: 'JP', group: 'F', elo: 1906, flag: '🇯🇵' },
    { openfootballName: 'Jordan', eloCode: 'JO', group: 'J', elo: 1680, flag: '🇯🇴' },
    { openfootballName: 'Mexico', eloCode: 'MX', group: 'A', elo: 1875, flag: '🇲🇽' },
    { openfootballName: 'Morocco', eloCode: 'MA', group: 'C', elo: 1827, flag: '🇲🇦' },
    { openfootballName: 'Netherlands', eloCode: 'NL', group: 'F', elo: 1948, flag: '🇳🇱' },
    { openfootballName: 'New Zealand', eloCode: 'NZ', group: 'G', elo: 1562, flag: '🇳🇿' },
    { openfootballName: 'Norway', eloCode: 'NO', group: 'I', elo: 1914, flag: '🇳🇴' },
    { openfootballName: 'Panama', eloCode: 'PA', group: 'L', elo: 1730, flag: '🇵🇦' },
    { openfootballName: 'Paraguay', eloCode: 'PY', group: 'D', elo: 1834, flag: '🇵🇾' },
    { openfootballName: 'Portugal', eloCode: 'PT', group: 'K', elo: 1989, flag: '🇵🇹' },
    { openfootballName: 'Qatar', eloCode: 'QA', group: 'B', elo: 1421, flag: '🇶🇦' },
    { openfootballName: 'Saudi Arabia', eloCode: 'SA', group: 'H', elo: 1576, flag: '🇸🇦' },
    { openfootballName: 'Scotland', eloCode: 'SQ', group: 'C', elo: 1782, flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { openfootballName: 'Senegal', eloCode: 'SN', group: 'I', elo: 1860, flag: '🇸🇳' },
    { openfootballName: 'South Africa', eloCode: 'ZA', group: 'A', elo: 1517, flag: '🇿🇦' },
    { openfootballName: 'South Korea', eloCode: 'KR', group: 'A', elo: 1758, flag: '🇰🇷' },
    { openfootballName: 'Spain', eloCode: 'ES', group: 'H', elo: 2157, flag: '🇪🇸' },
    { openfootballName: 'Sweden', eloCode: 'SE', group: 'F', elo: 1712, flag: '🇸🇪' },
    { openfootballName: 'Switzerland', eloCode: 'CH', group: 'B', elo: 1891, flag: '🇨🇭' },
    { openfootballName: 'Tunisia', eloCode: 'TN', group: 'F', elo: 1628, flag: '🇹🇳' },
    { openfootballName: 'Turkey', eloCode: 'TR', group: 'D', elo: 1911, flag: '🇹🇷' },
    { openfootballName: 'USA', eloCode: 'US', group: 'D', elo: 1726, flag: '🇺🇸' },
    { openfootballName: 'Uruguay', eloCode: 'UY', group: 'H', elo: 1892, flag: '🇺🇾' },
    { openfootballName: 'Uzbekistan', eloCode: 'UZ', group: 'K', elo: 1714, flag: '🇺🇿' },
]

/** Lookup by exact openfootball team name (join key for the schedule feed) */
export const TEAM_BY_OPENFOOTBALL_NAME: ReadonlyMap<string, Team> = new Map(
    TEAMS.map((t) => [t.openfootballName, t])
)

/** Lookup by eloratings.net 2-letter code (join key for the Elo feed) */
export const TEAM_BY_ELO_CODE: ReadonlyMap<string, Team> = new Map(
    TEAMS.map((t) => [t.eloCode, t])
)
