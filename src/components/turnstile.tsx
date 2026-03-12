'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
    interface Window {
        turnstile?: {
            render: (element: HTMLElement, options: Record<string, unknown>) => string
            reset: (widgetId: string) => void
            remove: (widgetId: string) => void
        }
    }
}

const SITE_KEY = '0x4AAAAAACpdQmJsdOoKmt9u'

export function useTurnstile() {
    const [token, setToken] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<string | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.turnstile && containerRef.current && !widgetIdRef.current) {
                widgetIdRef.current = window.turnstile.render(containerRef.current, {
                    sitekey: SITE_KEY,
                    callback: (t: string) => setToken(t),
                    'expired-callback': () => setToken(null),
                    'error-callback': () => setToken(null),
                    theme: 'dark',
                    size: 'flexible',
                })
                clearInterval(interval)
            }
        }, 100)

        return () => {
            clearInterval(interval)
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current)
                widgetIdRef.current = null
            }
        }
    }, [])

    const reset = () => {
        setToken(null)
        if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current)
        }
    }

    return { token, containerRef, reset }
}

export function TurnstileWidget({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
    return <div ref={containerRef} className="mt-4" />
}
