'use client'

import { useState } from 'react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ChevronsUpDown } from 'lucide-react'
import Link from 'next/link'

const links = [
    {
        group: 'Industries',
        items: [
            { title: 'Real Estate', href: '/industries/real-estate' },
            { title: 'Health & Wellness', href: '/industries/health-wellness' }, // (Combines Fitness & Healthcare)
            { title: 'Retail & Consumer Goods', href: '/industries/retail-consumer-goods' }, // (Combines Retail & Grocery + CPG)
            { title: 'Finance & Public Services', href: '/industries/finance-public-services' }, // (Combines Financial Services & Public Sector)
            { title: 'Hospitality & SMBs', href: '/industries/hospitality-smbs' }, // (Combines Hospitality & SMBs)
        ],
    },
    {
        group: 'Resources',
        items: [
            { title: 'Home', href: '/' },
            { title: 'About Us', href: '/About' },
            // { title: 'Blog', href: '/blog' },
            { title: 'Careers', href: '/Careers' },
            // { title: 'Case Studies', href: '/case-studies' },
            { title: 'Contact Us', href: '/Contact' },
        ],
    },
    {
        group: 'Services',
        items: [
            { title: 'Data Engineering', href: '/services/data-engineering' },
            { title: 'Data Platform', href: '/services/data-platform' },
            { title: 'AI/ML with GenAI', href: '/services/ai-ml-genai' },
            { title: 'Data Migration', href: '/services/data-migration' },
            { title: 'Data and AI Strategy', href: '/services/data-and-ai-strategy' },
            { title: 'Data Visualization ', href: '/services/data-visualization' },
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
];

export default function FooterSection() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
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
                setMessage('Subscribed successfully!')
                setEmail('')
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
                    <Link href="/" aria-label="go home" className="block size-fit">
                        <Logo />
                    </Link>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="https://www.linkedin.com/company/cdatainsights/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary block">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        {/* <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary block">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                            </svg>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
                        {links.map((link, index) => (
                            <div key={index} className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link key={index} href={item.href} className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
                        <div className="space-y-4">
                            <Label htmlFor="mail" className="block font-medium">
                                Newsletter
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    id="mail"
                                    name="mail"
                                    placeholder="Your email"
                                    className="h-8 text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button size="sm" type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Submit'}
                                </Button>
                            </div>
                            {message && <span className="text-sm block">{message}</span>}
                            <span className="text-muted-foreground block text-sm">Don't miss any update!</span>
                        </div>
                    </form>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <small className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Cdata Consultancy, All rights reserved</small>
                    <form action="">
                        <div className="relative">
                            {/* <ChevronsUpDown className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75" size="0.75rem" /> */}

                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}