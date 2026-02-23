'use client'

import { useState } from 'react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

const links = [
    {
        group: 'Industries',
        items: [
            { title: 'Real Estate', href: '/industries/real-estate' },
            { title: 'Health & Wellness', href: '/industries/health-wellness' },
            { title: 'Retail & Consumer Goods', href: '/industries/retail-consumer-goods' },
            { title: 'Finance & Public Services', href: '/industries/finance-public-services' },
            { title: 'Hospitality & SMBs', href: '/industries/hospitality-smbs' },
        ],
    },
    {
        group: 'Resources',
        items: [
            { title: 'Home', href: '/' },
            { title: 'About Us', href: '/About' },
            { title: 'Blog', href: '/Blogs' },
            { title: 'Careers', href: '/career' },
            { title: 'Contact Us', href: '/Contact' },
        ],
    },
    {
        group: 'Services',
        items: [
            { title: 'Data Engineering', href: '/services/data-engineering' },
            { title: 'Data Platform', href: '/services/data-platform' },
            { title: 'AI/ML with GenAI', href: '/services/ai-ml' },
            { title: 'Data Migration', href: '/services/data-migration' },
            { title: 'Data and AI Strategy', href: '/services/data-and-ai-strategy' },
            { title: 'Data Visualization', href: '/services/data-visualization' },
        ],
    },
    {
        group: 'Compliance',
        items: [
            { title: 'Privacy Policy', href: '/privacy-policies' },
            { title: 'Terms of Service', href: '/terms-and-conditions' },
            { title: 'Security', href: '/security-compliance-certifications' },
        ],
    },
]

export default function FooterSection() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [hasClickedOnce, setHasClickedOnce] = useState(false)

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        // 🪤 FIRST CLICK — FAKE SUBMIT (ANTI-BOT)
        if (!hasClickedOnce) {
            setHasClickedOnce(true)
            setMessage('Click again to subscribe')
            return
        }

        // ✅ SECOND CLICK — REAL SUBMIT
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
                setMessage('Subscribed successfully!')
                setEmail('')
                setHasClickedOnce(false)
            } else {
                setMessage(data.error || 'Failed to subscribe.')
            }
        } catch (error) {
            setMessage('Something went wrong. Please try again.')
        }

        setLoading(false)
    }

    return (
        <footer className="border-b bg-background pt-20 dark:bg-transparent">
            <div className="mb-8 border-b md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <Link href="/" aria-label="go home">
                        <Logo />
                    </Link>

                    <div className="flex gap-6 text-sm">
                        <Link
                            href="https://www.linkedin.com/company/cdatainsights/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5 lg:grid-cols-4">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 lg:col-span-3">
                        {links.map((link, index) => (
                            <div key={index} className="space-y-4 text-sm">
                                <span className="font-medium block">{link.group}</span>
                                {link.items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* 📬 Newsletter */}
                    <form
                        onSubmit={handleSubmit}
                        className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1"
                    >
                        <div className="space-y-4">
                            <Label htmlFor="mail" className="font-medium block">
                                Newsletter
                            </Label>

                            <div className="flex gap-2">
                                <Input
                                    id="mail"
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setHasClickedOnce(false)
                                        setMessage('')
                                    }}
                                    required
                                />
                                <Button size="sm" type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Submit'}
                                </Button>
                            </div>

                            {message && (
                                <span className="block text-sm text-muted-foreground">
                                    {message}
                                </span>
                            )}

                            <span className="text-muted-foreground text-sm block">
                                Don&apos;t miss any update!
                            </span>
                        </div>
                    </form>
                </div>

                <div className="mt-12 flex flex-wrap justify-between gap-6 border-t py-6">
                    <small className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Cdata Consultancy. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    )
}
