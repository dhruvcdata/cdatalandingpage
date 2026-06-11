'use client'

/**
 * Act I — cinematic full-viewport hero for the World Cup data hub.
 *
 * Structure: a 200vh scroll track with a sticky 100vh stage inside.
 * That gives exactly two full-viewport story beats before any real
 * content appears:
 *
 *   beat 1 (progress 0 → ~0.45): oversized stat typography
 *       "104 matches. / 16 cities. / 3 countries. / One data pipeline."
 *   beat 2 (progress ~0.45 → 1): the page h1, positioning line and
 *       last-updated badges.
 *
 * Scroll binding: motion's useScroll on the 200vh track. The raw
 * MotionValue drives beat opacity/translate via useTransform (zero
 * re-renders), while a quantized copy (~1/144 steps) is mirrored into
 * React state to feed the globe's `scrollProgress` prop — the globe
 * camera is critically damped internally, so the quantization is
 * invisible and re-renders stay rare and cheap.
 *
 * The 3D globe is loaded via next/dynamic ssr:false and mounted only
 * on ≥768px screens (matchMedia); below that a static CSS gradient
 * "globe" stands in. First paint never waits on the three chunk: the
 * backdrop is plain CSS and the beat-1 typography animates in with a
 * pure CSS keyframe (runs without JS, honors prefers-reduced-motion).
 */

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'motion/react'
import type { GlobeArc, GlobeMarker } from '@/lib/worldcup/journeys'

const WorldCupGlobe = dynamic(() => import('./three/WorldCupGlobe'), {
    ssr: false,
    loading: () => null,
})

const STAT_LINES = [
    { text: '104 matches.', accent: false },
    { text: '16 cities.', accent: false },
    { text: '3 countries.', accent: false },
    { text: 'One data pipeline.', accent: true },
] as const

export type WorldCupHeroProps = {
    markers: GlobeMarker[]
    arcs: GlobeArc[]
    /** Pre-formatted on the server so SSR and client markup agree */
    lastUpdatedLabel: string
}

export default function WorldCupHero({
    markers,
    arcs,
    lastUpdatedLabel,
}: WorldCupHeroProps) {
    const trackRef = useRef<HTMLElement>(null)
    const [globeProgress, setGlobeProgress] = useState(0)
    const [render3d, setRender3d] = useState(false)

    // SEO/first-paint guard: the scrubbed beat-2 styles start at
    // opacity 0, which would bake style="opacity:0" into the SSR
    // markup for the page's only <h1>. Crawlers don't scroll, so the
    // rendered document would carry a permanently hidden headline.
    // Instead the server (and first client paint) render beat 2
    // unstyled — fully visible — and the scroll choreography binds
    // only after hydration.
    const [hydrated, setHydrated] = useState(false)
    useEffect(() => setHydrated(true), [])

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ['start start', 'end end'],
    })

    // Quantized mirror of scroll progress for the globe prop. The
    // globe damps its camera, so ~144 steps over the whole hero is
    // visually continuous while keeping React re-renders sparse.
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setGlobeProgress(Math.round(v * 144) / 144)
    })

    // Mount the WebGL scene only on md+ screens; phones get the
    // static gradient variant baked into the backdrop below.
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)')
        const update = () => setRender3d(mq.matches)
        update()
        mq.addEventListener('change', update)
        return () => mq.removeEventListener('change', update)
    }, [])

    // Beat choreography — scrubbed, not animated, so it is
    // reduced-motion-safe (position follows scroll 1:1).
    const beat1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 1, 0])
    const beat1Y = useTransform(scrollYProgress, [0, 0.45], ['0vh', '-8vh'])
    const beat2Opacity = useTransform(scrollYProgress, [0.45, 0.62], [0, 1])
    const beat2Y = useTransform(scrollYProgress, [0.45, 0.62], ['8vh', '0vh'])
    const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

    return (
        <section ref={trackRef} aria-label="World Cup 2026: The Data View" className="relative h-[200vh]">
            {/* CSS entrance for the stat lines — runs at first paint,
                no JS required, disabled under prefers-reduced-motion. */}
            <style>{`
                @keyframes wc-rise {
                    from { opacity: 0; transform: translateY(0.55em); filter: blur(8px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                .wc-line { animation: wc-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
                @keyframes wc-cue {
                    0%, 100% { transform: translateY(0); opacity: 0.7; }
                    50% { transform: translateY(6px); opacity: 1; }
                }
                .wc-cue { animation: wc-cue 1.8s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .wc-line { animation: none; }
                    .wc-cue { animation: none; }
                }
            `}</style>

            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Static dark-gradient backdrop — always present, doubles
                    as the dynamic-import loading fallback and the mobile
                    stand-in for the 3D scene. */}
                <div aria-hidden className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.16),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_80%,rgba(56,189,248,0.07),transparent_70%)]" />
                    {/* Cheap CSS "globe" for small screens */}
                    <div className="absolute left-1/2 top-[62%] h-[130vw] w-[130vw] -translate-x-1/2 rounded-full border border-sky-400/15 bg-[radial-gradient(circle_at_35%_28%,rgba(56,189,248,0.18),rgba(2,6,15,0)_62%)] md:hidden" />
                </div>

                {/* 3D globe backdrop (md+ only, lazy three chunk) */}
                {render3d && (
                    <div className="pointer-events-none absolute inset-0">
                        <WorldCupGlobe
                            markers={markers}
                            arcs={arcs}
                            scrollProgress={globeProgress}
                            className="h-full w-full"
                        />
                    </div>
                )}

                {/* Legibility scrim at the bottom edge of the stage */}
                <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#02060f] to-transparent"
                />

                {/* Beat 1 — oversized stat typography */}
                <motion.div
                    data-wc-beat
                    style={{ opacity: beat1Opacity, y: beat1Y }}
                    className="absolute inset-0 flex items-center"
                >
                    <div className="mx-auto w-full max-w-6xl px-6">
                        <p
                            className="wc-line font-mono text-sm text-sky-400"
                            style={{ animationDelay: '0.05s' }}
                        >
                            cdatainsights.com/worldcup
                        </p>
                        <div className="mt-6 space-y-1">
                            {STAT_LINES.map((line, i) => (
                                <p
                                    key={line.text}
                                    className={`wc-line text-[clamp(2.6rem,8.5vw,6.5rem)] font-medium leading-[1.02] tracking-tight ${
                                        line.accent
                                            ? 'bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent'
                                            : 'text-slate-50'
                                    }`}
                                    style={{ animationDelay: `${0.2 + i * 0.18}s` }}
                                >
                                    {line.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Beat 2 — headline, positioning line, freshness badges.
                    Unstyled (visible) until hydration so SSR markup never
                    hides the h1; the brief pre-hydration overlap with
                    beat 1 resolves the moment the MotionValues bind. */}
                <motion.div
                    data-wc-beat
                    style={hydrated ? { opacity: beat2Opacity, y: beat2Y } : undefined}
                    className="absolute inset-0 flex items-center"
                >
                    <div className="mx-auto w-full max-w-6xl px-6">
                        <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-slate-50 md:text-6xl lg:text-7xl">
                            World Cup 2026:{' '}
                            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                The Data View
                            </span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-300">
                            We track the tournament the way we track business data:
                            probabilities, not opinions. Every match gets a transparent
                            Elo-based win probability; every result is scored against the
                            model — favorites, upsets, and all.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400">
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-sm">
                                Last updated: {lastUpdatedLabel}
                            </span>
                            <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1.5 text-sky-300 backdrop-blur-sm">
                                Refreshes hourly
                            </span>
                            <a
                                href="#writeup"
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-slate-300 backdrop-blur-sm transition-colors hover:border-sky-400/40 hover:text-sky-300"
                            >
                                Get the technical writeup ↓
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll cue */}
                <motion.div
                    aria-hidden
                    style={{ opacity: cueOpacity }}
                    className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 font-mono text-xs tracking-widest text-slate-400"
                >
                    <span>SCROLL</span>
                    <span className="wc-cue text-sky-400">↓</span>
                </motion.div>
            </div>
        </section>
    )
}
