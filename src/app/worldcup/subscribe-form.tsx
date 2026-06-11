'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTurnstile, TurnstileWidget } from '@/components/turnstile'

/**
 * Email capture for the World Cup data hub, reusing the existing
 * /api/subscribe contract (email + turnstileToken). A `source` field
 * is included for attribution; the current API ignores unknown fields
 * so this is forward-compatible, not a contract change.
 */
export default function WorldCupSubscribe() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')
    const { token: turnstileToken, containerRef, reset: resetTurnstile } = useTurnstile()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setMessage('')

        if (!turnstileToken) {
            setStatus('error')
            setMessage('Please complete the verification check.')
            return
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, turnstileToken, source: 'worldcup' }),
            })

            const data = await response.json()

            if (response.ok) {
                window.gtag?.('event', 'sign_up', {
                    event_category: 'World Cup Hub',
                    method: 'email',
                })
                setStatus('success')
                setMessage("You're in. The writeup lands in your inbox when it ships.")
                setEmail('')
                resetTurnstile()
            } else {
                setStatus('error')
                setMessage(data.error || 'Something went wrong. Please try again.')
            }
        } catch {
            setStatus('error')
            setMessage('Something went wrong. Please try again.')
        }
    }

    return (
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8">
            <h3 className="text-xl font-medium text-white">
                Get the technical writeup: how we built this in a weekend
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
                Two open data feeds, one transparent Elo model, hourly ISR — the full
                architecture, the edge cases, and what it means for your data stack.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 sm:max-w-sm"
                    />
                    <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send me the writeup'}
                    </Button>
                </div>
                <TurnstileWidget containerRef={containerRef} />
            </form>

            {message && (
                <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                </p>
            )}
        </div>
    )
}
