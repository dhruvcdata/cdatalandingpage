import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000
const RATE_LIMIT_MAX = 3

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const timestamps = rateLimitMap.get(ip) || []
    const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW)
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
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const { email, _ts } = await req.json()

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 })
        }

        // JS challenge: _ts must be a recent timestamp (set by client JS)
        if (!_ts || typeof _ts !== 'number' || Date.now() - _ts < 3000 || Date.now() - _ts > 24 * 60 * 60 * 1000) {
            return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 })
        }

        const adminEmail = process.env.ADMIN_EMAIL
        if (!adminEmail) {
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
        }

        // Send email to admin
        await resend.emails.send({
            from: 'info@cdatainsights.com',
            to: adminEmail,
            subject: 'New Contact Request Received',
            html: `<p>You have received a new contact request from: <strong>${email}</strong></p>`,
        })

        // Send confirmation email to sender
        await resend.emails.send({
            from: 'info@cdatainsights.com',
            to: email,
            subject: `Thank You for Contacting ${process.env.COMPANY_NAME || 'CData Insights'}`,
            html: `<p>Thank you for reaching out to ${process.env.COMPANY_NAME || 'CData Insights'}. We will get back to you shortly.</p>`,
        })

        return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 })
    }
}
