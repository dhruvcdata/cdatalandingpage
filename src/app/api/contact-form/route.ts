import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, phone, subject, message } = await req.json()

        // Basic validation
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 })
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
                from: 'noreply@medicbuilds.com', // Update to match your domain
                to: process.env.ADMIN_EMAIL as string,
                subject: `[Contact Form] ${subject}`,
                html: adminEmailHtml,

            }),

            // Confirmation email to the user
            resend.emails.send({
                from: 'noreply@medicbuilds.com', // Update to match your domain
                to: email,
                subject: `Thank you for contacting ${process.env.COMPANY_NAME || 'CData Insights'}`,
                html: userEmailHtml,
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