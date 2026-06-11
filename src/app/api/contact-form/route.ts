import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { verifyTurnstile } from '@/lib/turnstile'
import { saveLead } from '@/lib/leads'

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes
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
    // Rate limiting
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: 'Too many submissions. Please try again later.' },
            { status: 429 }
        )
    }

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { error: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' },
            { status: 503 }
        )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const { firstName, lastName, email, phone, subject, message, website, turnstileToken } = await req.json()

        // Honeypot: if the hidden "website" field is filled, it's a bot
        if (website) {
            return NextResponse.json({ success: true, message: 'Message sent.' }, { status: 200 })
        }

        // Cloudflare Turnstile verification
        if (!turnstileToken || !(await verifyTurnstile(turnstileToken))) {
            return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 403 })
        }

        // Basic validation
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 })
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 })
        }

        // Spam content detection: block messages with excessive URLs
        const urlCount = (message.match(/https?:\/\//gi) || []).length
        if (urlCount > 2) {
            return NextResponse.json({ success: true, message: 'Message sent.' }, { status: 200 })
        }

        // Format the data for the admin email
        const adminEmailHtml = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
        `

        // Format the confirmation email for the user
        const userEmailHtml = `
            <p>Dear ${firstName},</p>
            <p>Thank you for reaching out to us. We have received your message regarding "${subject}" and will get back to you as soon as possible.</p>
            <p>In the meantime, if you have any urgent inquiries, please contact us directly at ${process.env.ADMIN_EMAIL || 'info@cdatainsights.com'}.</p>
            <p>Best regards,<br>The ${process.env.COMPANY_NAME || 'CData Insights'} Team</p>
        `

        // Send both emails concurrently for better performance
        const [adminEmailResult, userEmailResult] = await Promise.all([
            // Email to admin with all form details
            resend.emails.send({
                from: 'noreply@cdatainsights.com',
                to: process.env.ADMIN_EMAIL || 'info@cdatainsights.com',
                subject: `[Contact Form] ${subject}`,
                html: adminEmailHtml,

            }),

            // Confirmation email to the user
            resend.emails.send({
                from: 'noreply@cdatainsights.com',
                to: email,
                subject: `Thank you for contacting ${process.env.COMPANY_NAME || 'CData Insights'}`,
                html: userEmailHtml,
            }),

            // Persist lead to Supabase (fail-open: never throws, never blocks emails)
            saveLead({
                email,
                source: 'contact',
                kind: 'contact',
                name: `${firstName} ${lastName}`.trim(),
                message,
                metadata: { subject, ...(phone ? { phone } : {}) },
            })
        ])

        // Verify both emails were sent successfully
        if (!adminEmailResult || !userEmailResult) {
            throw new Error('Failed to send one or both emails')
        }

        return NextResponse.json(
            { success: true, message: 'Your message has been sent successfully!' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form submission error:', error)
        return NextResponse.json(
            { error: 'Failed to send your message. Please try again later.' },
            { status: 500 }
        )
    }
}