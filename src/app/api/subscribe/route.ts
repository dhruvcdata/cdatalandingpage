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
        return NextResponse.json(
            { error: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' },
            { status: 503 }
        )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const { email } = await req.json()

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
        }

        const adminEmail = process.env.ADMIN_EMAIL || 'info@cdatainsights.com'

        await Promise.all([
            // Notify admin of new subscriber
            resend.emails.send({
                from: 'noreply@cdatainsights.com',
                to: adminEmail,
                subject: `New Blog Subscriber: ${email}`,
                html: `
                    <h2>New Blog Subscriber</h2>
                    <p>A new user has subscribed to the CData Insights blog newsletter.</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${new Date().toISOString()}</p>
                `,
            }),

            // Send welcome email to subscriber
            resend.emails.send({
                from: 'noreply@cdatainsights.com',
                to: email,
                subject: 'Welcome to CData Insights Newsletter',
                html: `
                    <p>Thank you for subscribing to the CData Insights blog newsletter!</p>
                    <p>You'll receive insights on Snowflake, data architecture, and modern analytics directly in your inbox.</p>
                    <p>In the meantime, check out our latest articles at <a href="https://cdatainsights.com/blogs">cdatainsights.com/blogs</a>.</p>
                    <p>Best regards,<br>The CData Insights Team</p>
                `,
            }),
        ])

        return NextResponse.json(
            { success: true, message: 'Successfully subscribed!' },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to subscribe. Please try again later.' },
            { status: 500 }
        )
    }
}
