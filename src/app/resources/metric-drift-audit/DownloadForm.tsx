'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTurnstile, TurnstileWidget } from '@/components/turnstile'

const FREE_EMAIL_DOMAINS: ReadonlySet<string> = new Set([
    'gmail.com',
    'yahoo.com',
    'yahoo.co.uk',
    'yahoo.co.in',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'icloud.com',
    'me.com',
    'aol.com',
    'proton.me',
    'protonmail.com',
    'mail.com',
    'zoho.com',
    'gmx.com',
    'yandex.com',
])

const RESOURCE_KEY = 'metric-drift-audit'
const SOURCE = 'blog:semantic-layer-synonyms'
const FALLBACK_DOWNLOAD_PATH = '/resources/metric-drift-audit.csv'

type FormStatus =
    | { kind: 'idle' }
    | { kind: 'submitting' }
    | { kind: 'success'; downloadPath: string }
    | { kind: 'error'; message: string }

function isWorkEmail(email: string): boolean {
    const trimmed = email.trim().toLowerCase()
    const at = trimmed.lastIndexOf('@')
    if (at <= 0 || at === trimmed.length - 1) return false
    const domain = trimmed.slice(at + 1)
    if (!domain.includes('.')) return false
    return !FREE_EMAIL_DOMAINS.has(domain)
}

function triggerDownload(downloadPath: string): void {
    const link = document.createElement('a')
    link.href = downloadPath
    link.download = 'metric-drift-audit-template.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export default function DownloadForm() {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<FormStatus>({ kind: 'idle' })
    const {
        token: turnstileToken,
        containerRef,
        reset: resetTurnstile,
    } = useTurnstile()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!isWorkEmail(email)) {
            setStatus({
                kind: 'error',
                message:
                    'Please use a work email address (no gmail / yahoo / hotmail).',
            })
            return
        }

        if (!turnstileToken) {
            setStatus({
                kind: 'error',
                message: 'Please complete the verification check.',
            })
            return
        }

        setStatus({ kind: 'submitting' })

        try {
            const response = await fetch('/api/lead-capture', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.trim(),
                    name: name.trim(),
                    company: company.trim(),
                    resource: RESOURCE_KEY,
                    source: SOURCE,
                    turnstileToken,
                }),
            })

            const data = (await response.json()) as {
                success?: boolean
                downloadPath?: string
                error?: string
            }

            if (response.ok && data.success && data.downloadPath) {
                if (typeof window !== 'undefined') {
                    window.gtag?.('event', 'generate_lead', {
                        event_category: 'Resource Download',
                        event_label: RESOURCE_KEY,
                    })
                }
                triggerDownload(data.downloadPath)
                setStatus({ kind: 'success', downloadPath: data.downloadPath })
                resetTurnstile()
            } else {
                setStatus({
                    kind: 'error',
                    message:
                        data.error || 'Something went wrong. Please try again.',
                })
                resetTurnstile()
            }
        } catch {
            setStatus({
                kind: 'error',
                message: 'Network error. Please try again.',
            })
            resetTurnstile()
        }
    }

    if (status.kind === 'success') {
        return (
            <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-7">
                <h3 className="text-xl font-semibold text-white">
                    Your download is starting.
                </h3>
                <p className="mt-3 text-gray-300 leading-relaxed">
                    If it didn&apos;t open automatically,{' '}
                    <a
                        href={status.downloadPath}
                        download="metric-drift-audit-template.csv"
                        className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
                    >
                        click here to grab the CSV
                    </a>
                    . We&apos;ve also emailed you the link.
                </p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                    Most teams find 4-7 definitions of &ldquo;revenue&rdquo; on the
                    first pass. When you&apos;re done, the natural next step is a
                    60-minute strategy call to turn your audit into a 90-day rollout
                    plan.
                </p>
                <div className="mt-5">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                        Book a free Semantic Layer Strategy Call →
                    </Link>
                </div>
            </div>
        )
    }

    const submitting = status.kind === 'submitting'

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/10 bg-neutral-900 p-6 lg:p-8"
            noValidate
        >
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <Label htmlFor="lead-name" className="text-sm text-white">
                        Full name
                    </Label>
                    <Input
                        id="lead-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="mt-2 h-11 bg-neutral-950 border-white/10 text-white placeholder:text-gray-500"
                    />
                </div>
                <div>
                    <Label htmlFor="lead-company" className="text-sm text-white">
                        Company
                    </Label>
                    <Input
                        id="lead-company"
                        type="text"
                        required
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Inc."
                        className="mt-2 h-11 bg-neutral-950 border-white/10 text-white placeholder:text-gray-500"
                    />
                </div>
            </div>

            <div className="mt-4">
                <Label htmlFor="lead-email" className="text-sm text-white">
                    Work email
                </Label>
                <Input
                    id="lead-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@yourcompany.com"
                    className="mt-2 h-11 bg-neutral-950 border-white/10 text-white placeholder:text-gray-500"
                />
                <p className="mt-1.5 text-xs text-gray-500">
                    We&apos;ll email the template + a one-page playbook on running the
                    audit. No newsletter spam.
                </p>
            </div>

            <div className="mt-5 flex justify-center sm:justify-start">
                <TurnstileWidget containerRef={containerRef} />
            </div>

            {status.kind === 'error' && (
                <p className="mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                    {status.message}
                </p>
            )}

            <Button
                type="submit"
                disabled={submitting}
                className="mt-5 h-11 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold disabled:opacity-50"
            >
                {submitting
                    ? 'Preparing your download…'
                    : 'Download the audit template →'}
            </Button>
        </form>
    )
}
