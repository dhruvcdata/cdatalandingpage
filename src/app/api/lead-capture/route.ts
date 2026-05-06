import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { verifyTurnstile } from '@/lib/turnstile'

const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000
const RATE_LIMIT_MAX = 3

const RESOURCE_CATALOG: Record<
    string,
    { title: string; downloadPath: string }
> = {
    'metric-drift-audit': {
        title: 'The Metric Drift Audit Template',
        downloadPath: '/resources/metric-drift-audit.csv',
    },
}

interface LeadRequestBody {
    email?: unknown
    name?: unknown
    company?: unknown
    resource?: unknown
    source?: unknown
    turnstileToken?: unknown
}

function isString(value: unknown): value is string {
    return typeof value === 'string'
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const timestamps = rateLimitMap.get(ip) || []
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW)
    rateLimitMap.set(ip, recent)
    if (recent.length >= RATE_LIMIT_MAX) return true
    recent.push(now)
    rateLimitMap.set(ip, recent)
    return false
}

export async function POST(req: Request) {
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
        )
    }

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { error: 'Email service is not configured.' },
            { status: 503 }
        )
    }

    let body: LeadRequestBody
    try {
        body = (await req.json()) as LeadRequestBody
    } catch {
        return NextResponse.json(
            { error: 'Invalid request body.' },
            { status: 400 }
        )
    }

    const email = isString(body.email) ? body.email.trim() : ''
    const name = isString(body.name) ? body.name.trim() : ''
    const company = isString(body.company) ? body.company.trim() : ''
    const resourceKey = isString(body.resource) ? body.resource.trim() : ''
    const source = isString(body.source) ? body.source.trim() : 'unknown'
    const turnstileToken = isString(body.turnstileToken)
        ? body.turnstileToken
        : ''

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
            { error: 'Please provide a valid email address.' },
            { status: 400 }
        )
    }
    if (!name) {
        return NextResponse.json(
            { error: 'Please provide your name.' },
            { status: 400 }
        )
    }
    if (!company) {
        return NextResponse.json(
            { error: 'Please provide your company.' },
            { status: 400 }
        )
    }
    const resource = RESOURCE_CATALOG[resourceKey]
    if (!resource) {
        return NextResponse.json(
            { error: 'Unknown resource requested.' },
            { status: 400 }
        )
    }

    if (!turnstileToken || !(await verifyTurnstile(turnstileToken))) {
        return NextResponse.json(
            { error: 'Verification failed. Please try again.' },
            { status: 403 }
        )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const adminEmail = process.env.ADMIN_EMAIL || 'info@cdatainsights.com'
    const downloadUrl = `https://cdatainsights.com${resource.downloadPath}`
    const safeName = escapeHtml(name)
    const safeCompany = escapeHtml(company)
    const safeEmail = escapeHtml(email)
    const safeSource = escapeHtml(source)
    const safeResourceTitle = escapeHtml(resource.title)

    try {
        await Promise.all([
            resend.emails.send({
                from: 'noreply@cdatainsights.com',
                to: adminEmail,
                subject: `New lead: ${safeName} (${safeCompany}) — ${safeResourceTitle}`,
                html: `
                    <h2>New Lead Magnet Download</h2>
                    <p><strong>Resource:</strong> ${safeResourceTitle}</p>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Company:</strong> ${safeCompany}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Source:</strong> ${safeSource}</p>
                    <p><strong>Date:</strong> ${new Date().toISOString()}</p>
                `,
            }),
            resend.emails.send({
                from: 'noreply@cdatainsights.com',
                to: email,
                subject: `Your download: ${resource.title}`,
                html: `
                    <p>Hi ${safeName},</p>
                    <p>Thanks for grabbing <strong>${safeResourceTitle}</strong>. Here's your direct download link:</p>
                    <p><a href="${downloadUrl}">${downloadUrl}</a></p>
                    <p>Most teams find 4-7 definitions of "revenue" hiding in their stack on the first pass. Once you've run the audit, the natural next step is a free 60-minute Semantic Layer Strategy Call where we walk through your real metrics and scope a 90-day rollout plan.</p>
                    <p><a href="https://cdatainsights.com/contact">Book a strategy call →</a></p>
                    <p>Best,<br>Nitin Jain<br>Founder, CData Insights</p>
                `,
            }),
        ])

        return NextResponse.json(
            {
                success: true,
                downloadPath: resource.downloadPath,
                resourceTitle: resource.title,
            },
            { status: 200 }
        )
    } catch {
        return NextResponse.json(
            { error: 'Failed to send confirmation. Please try again later.' },
            { status: 500 }
        )
    }
}
