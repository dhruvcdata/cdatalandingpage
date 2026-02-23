'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function BlogSubscribe() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setMessage('')

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setMessage('You\'re subscribed! Check your inbox for a welcome email.')
                setEmail('')
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
        <section className="mt-16 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                    Get data engineering insights delivered to your inbox
                </h2>
                <p className="mt-3 text-muted-foreground">
                    Join our newsletter for weekly insights on Snowflake, data architecture, and modern analytics.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 max-w-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                    <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                </form>

                {message && (
                    <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                    </p>
                )}
            </div>
        </section>
    )
}
