'use client'

/**
 * Tiny client-side reveal shell for the World Cup scroll story.
 *
 * Server components pass fully server-rendered children through this
 * wrapper — no data or markup moves to the client, only the reveal
 * animation does. The children's HTML is therefore always present in
 * the initial document (view-source test). A page-level <noscript>
 * rule targets [data-wc-reveal] so no-JS visitors still see the
 * content at full opacity.
 *
 * The animation is a short fade + rise, fired once per element.
 * Under prefers-reduced-motion the translate is dropped entirely
 * (motion/react defaults to reducedMotion: 'never', so we check
 * useReducedMotion ourselves) and only the opacity fade remains.
 */

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function Reveal({
    children,
    className,
    delay = 0,
    duration = 0.8,
    y = 32,
}: {
    children: ReactNode
    className?: string
    /** Stagger delay in seconds */
    delay?: number
    /** Duration in seconds (0.6–0.9 per the page's motion spec) */
    duration?: number
    /** Initial rise distance in px */
    y?: number
}) {
    const reducedMotion = useReducedMotion()
    return (
        <motion.div
            data-wc-reveal
            className={className}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration, delay, ease: EASE_OUT_EXPO }}
        >
            {children}
        </motion.div>
    )
}
