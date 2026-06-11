import { ImageResponse } from 'next/og'

/**
 * Dedicated 1200x630 share card for /worldcup.
 *
 * Next.js auto-wires this file as og:image (and the twitter:image
 * fallback) with correct width/height hints — replacing the old
 * whitelogo.png (600x199, white on transparent), which rendered as a
 * blank card on LinkedIn/X/Slack previews. Solid dark background so
 * it reads on any preview chrome; same palette as the page itself
 * (#02060f canvas, sky/cyan accents).
 */

export const alt =
    'World Cup 2026: The Data View — 104 matches. One data pipeline. CData Insights'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '64px 72px',
                    backgroundColor: '#02060f',
                    backgroundImage:
                        'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.25), transparent 70%), ' +
                        'radial-gradient(circle at 88% 92%, rgba(56,189,248,0.18), transparent 55%)',
                    color: '#f8fafc',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Stylized football, bottom-right: outline circle + hexagon
                    panel + radiating seam lines. Generic ball geometry only —
                    no protected tournament marks. Drawn first so all text
                    stacks above it. */}
                <svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    fill="none"
                    style={{ position: 'absolute', right: -140, bottom: -150 }}
                >
                    <circle
                        cx="300"
                        cy="300"
                        r="250"
                        stroke="rgba(56,189,248,0.18)"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M300 205L382 252.5V347.5L300 395L218 347.5V252.5Z"
                        stroke="rgba(56,189,248,0.32)"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M300 205V50M382 252.5L517 175M382 347.5L517 425M300 395V550M218 347.5L83 425M218 252.5L83 175"
                        stroke="rgba(56,189,248,0.18)"
                        strokeWidth="2.5"
                    />
                </svg>
                {/* Faint pitch center circle + halfway line peeking in from
                    the top edge. */}
                <svg
                    width="440"
                    height="440"
                    viewBox="0 0 440 440"
                    fill="none"
                    style={{ position: 'absolute', top: -250, left: 330 }}
                >
                    <line
                        x1="220"
                        y1="0"
                        x2="220"
                        y2="440"
                        stroke="rgba(125,211,252,0.10)"
                        strokeWidth="2"
                    />
                    <circle
                        cx="220"
                        cy="220"
                        r="150"
                        stroke="rgba(125,211,252,0.10)"
                        strokeWidth="2"
                    />
                </svg>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            fontSize: 28,
                            color: '#38bdf8',
                            letterSpacing: 1,
                        }}
                    >
                        cdatainsights.com/worldcup
                    </div>
                    <div
                        style={{
                            fontSize: 26,
                            color: '#94a3b8',
                            border: '1px solid rgba(56,189,248,0.4)',
                            borderRadius: 999,
                            padding: '8px 24px',
                        }}
                    >
                        Refreshes hourly
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            fontSize: 84,
                            fontWeight: 600,
                            lineHeight: 1.05,
                            letterSpacing: -2,
                        }}
                    >
                        104 matches.
                    </div>
                    <div
                        style={{
                            fontSize: 84,
                            fontWeight: 600,
                            lineHeight: 1.05,
                            letterSpacing: -2,
                            color: '#38bdf8',
                        }}
                    >
                        One data pipeline.
                    </div>
                    <div
                        style={{
                            marginTop: 28,
                            fontSize: 30,
                            color: '#cbd5e1',
                        }}
                    >
                        World Cup 2026: The Data View — live Elo win probabilities,
                        upsets, all 12 groups.
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: 999,
                            backgroundColor: '#38bdf8',
                        }}
                    />
                    <div style={{ fontSize: 32, fontWeight: 600 }}>CData Insights</div>
                </div>
            </div>
        ),
        size
    )
}
