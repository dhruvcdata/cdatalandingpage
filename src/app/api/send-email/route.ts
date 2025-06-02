import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        // Send email to admin
        await resend.emails.send({
            from: 'info@cdatainsights.com',
            to: process.env.ADMIN_EMAIL as string,
            subject: 'New Contact Request Received',
            html: `<p>You have received a new contact request from: <strong>${email}</strong></p>`,
        })

        // Send confirmation email to sender
        await resend.emails.send({
            from: 'info@cdatainsights.com',
            to: email,
            subject: `Thank You for Contacting ${process.env.COMPANY_NAME}`,
            html: `<p>Thank you for reaching out to ${process.env.COMPANY_NAME}. We will get back to you shortly.</p>`,
        })

        return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 })
    }
}
