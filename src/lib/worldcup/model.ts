/**
 * World Cup 2026 — Elo win-probability model.
 *
 * Deliberately simple and fully transparent: a textbook Elo expected
 * score plus a single documented draw heuristic. No home advantage,
 * no recency weighting, no tuning to taste. Every constant below has
 * a stated rationale so the model can be explained — and defended —
 * in one paragraph.
 */

/**
 * Standard Elo logistic scale. A 400-point rating gap means the
 * stronger team is expected to score 10x as often (10:1 odds).
 * This is the original Arpad Elo constant used by eloratings.net
 * itself, so our probabilities are consistent with the source data.
 */
export const ELO_SCALE = 400

/**
 * Maximum draw probability, reached when the two teams are exactly
 * level on Elo. ~28% is the long-run draw rate observed in
 * closely-matched international fixtures (World Cup group stages
 * historically draw at roughly 22–30%). We taper it linearly toward
 * 0 as the mismatch grows: lopsided games rarely end level.
 */
export const MAX_DRAW_PROBABILITY = 0.28

/**
 * A side is only called the "favorite" for upset accounting when its
 * win probability is at least 55%. Below that the match is effectively
 * a coin flip and calling any result an upset would be noise.
 */
export const FAVORITE_THRESHOLD = 0.55

/**
 * A draw only counts as an upset when the favorite's win probability
 * was at least 65%. Draws are common enough in football that a
 * moderate favorite dropping points is unremarkable; a heavy favorite
 * dropping points is news.
 */
export const DRAW_UPSET_THRESHOLD = 0.65

/** Three-way outcome probabilities for a match (sums to 1). */
export type MatchProbabilities = {
    /** P(team A wins in 90 minutes) */
    winA: number
    /** P(draw in 90 minutes) */
    draw: number
    /** P(team B wins in 90 minutes) */
    winB: number
}

/** Result of a played match, from team A's perspective. */
export type MatchOutcome = 'A' | 'B' | 'draw'

/**
 * Elo expected score for team A vs team B:
 * We = 1 / (1 + 10^(-(eloA - eloB) / 400)).
 * No home-advantage adjustment — 2026 host nations get no bonus,
 * which keeps the model honest and the same for all 48 teams.
 */
export function expectedScore(eloA: number, eloB: number): number {
    return 1 / (1 + Math.pow(10, -(eloA - eloB) / ELO_SCALE))
}

/**
 * Convert two Elo ratings into three-way (win/draw/win) probabilities.
 *
 * Draw model: pDraw = MAX_DRAW_PROBABILITY * (1 - |2*We - 1|).
 * |2*We - 1| is 0 for perfectly even teams and 1 for a total
 * mismatch, so the draw chance peaks at 28% for even teams and
 * shrinks linearly to 0 as one side dominates. The remaining
 * probability mass is split between the two sides in proportion to
 * the Elo expected score, then renormalized to guard against
 * floating-point drift.
 */
export function matchProbabilities(eloA: number, eloB: number): MatchProbabilities {
    const we = expectedScore(eloA, eloB)
    const draw = MAX_DRAW_PROBABILITY * (1 - Math.abs(2 * we - 1))
    const winA = we * (1 - draw)
    const winB = (1 - we) * (1 - draw)
    // Renormalize (the three terms already sum to 1 analytically;
    // this is purely defensive against floating-point error).
    const total = winA + draw + winB
    return { winA: winA / total, draw: draw / total, winB: winB / total }
}

/** The favored side of a match and its pre-match win probability. */
export type Favorite = {
    side: 'A' | 'B'
    /** That side's pre-match win probability */
    probability: number
}

/**
 * The side with the higher win probability, or null when the two are
 * exactly level (no meaningful favorite).
 */
export function favorite(probabilities: MatchProbabilities): Favorite | null {
    if (probabilities.winA > probabilities.winB) {
        return { side: 'A', probability: probabilities.winA }
    }
    if (probabilities.winB > probabilities.winA) {
        return { side: 'B', probability: probabilities.winB }
    }
    return null
}

/**
 * Whether a decided match was an upset.
 *
 * Definition: the side with pre-match win probability >= 55%
 * (FAVORITE_THRESHOLD) did not win. A draw counts as an upset only
 * when the favorite's win probability was >= 65%
 * (DRAW_UPSET_THRESHOLD) — see the constants above for rationale.
 * Matches with no favorite at or above 55% can never be upsets.
 */
export function isUpset(match: {
    probabilities: MatchProbabilities
    outcome: MatchOutcome
}): boolean {
    const fav = favorite(match.probabilities)
    if (fav === null || fav.probability < FAVORITE_THRESHOLD) return false
    if (match.outcome === fav.side) return false
    if (match.outcome === 'draw') return fav.probability >= DRAW_UPSET_THRESHOLD
    // The underdog won outright.
    return true
}
