'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'

export default function CallToAction() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (response.ok) {
                setMessage('Your request has been sent successfully!')
                setEmail('')
            } else {
                setMessage(data.error || 'Failed to send the email.')
            }
        } catch (error) {
            setMessage('Something went wrong. Please try again.')
        }

        setLoading(false)
    }

    return (
        <section id="cta" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Take the next step with CData</h2>
                    <p className="mt-4">Learn how CData can help solve your most challenging data and AI problems.</p>

                    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-lg lg:mt-12">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input
                                placeholder="Your email address"
                                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button aria-label="submit" className="rounded-(--radius)" type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : (
                                        <>
                                            <span className="hidden md:block">Get Free Assessment</span>
                                            <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>

                    {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
                </div>
            </div>
        </section>
    )
}
