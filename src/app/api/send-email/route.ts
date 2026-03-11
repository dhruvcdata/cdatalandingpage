import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const { email } = await req.json()

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
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
