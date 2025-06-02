'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [formStatus, setFormStatus] = useState({
        success: false,
        error: false,
        message: ''
    })

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)
        setFormStatus({ success: false, error: false, message: '' })

        try {
            const response = await fetch('/api/contact-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setFormStatus({
                    success: true,
                    error: false,
                    message: 'Your message has been sent successfully! We will get back to you soon.'
                })
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            } else {
                setFormStatus({
                    success: false,
                    error: true,
                    message: data.error || 'Failed to send your message. Please try again.'
                })
            }
        } catch (error) {
            setFormStatus({
                success: false,
                error: true,
                message: 'Something went wrong. Please try again later.'
            })
        }

        setLoading(false)
    }

    return (
        <section className="py-12 bg-background md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
                    Contact Us
                </h1>
                <p className="mt-4 text-center text-balance text-lg text-muted-foreground">
                    We're here to help! Reach out to our team for any inquiries or support.
                </p>

                {/* Two-Column Layout */}
                <div className="mt-12 flex lg:flex-row flex-col gap-8 ">
                    {/* Left Column: Contact Information */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <div className="p-6">
                            <div className="flex flex-col items-center gap-4">
                                <div className="rounded-full bg-blue-100 p-3">
                                    <Mail className="size-5 text-blue-600" />
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <h3 className="text-lg font-medium">Email Addresses</h3>
                                    <p className="flex flex-col items-center mt- text-sm text-muted-foreground">
                                        <strong>General Inquiries:</strong><br />
                                        <a href="mailto:info@cdatainsights.com" className="text-blue-600 hover:underline">
                                            info@cdatainsights.com
                                        </a>
                                    </p>
                                </div>
                                <div className="rounded-full bg-blue-100 p-3">
                                    <MapPin className="size-5 text-blue-600" />
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <h3 className="text-lg font-medium">Our Offices</h3>
                                    <div className="mt-2 space-y-2">
                                        <img
                                            src="/Map.png"
                                            alt="Office Locations"
                                            className="w-full h-auto max-h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Right Column: Contact Form */}
                    <Card className=" p-6 lg:p-10 bg-background rounded-lg shadow-md">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-gray-100 sm:text-3xl">Send us a message</h2>
                            <p className="text-sm text-gray-200">
                                We'll get back to you within 24 hours.
                            </p>
                        </div>

                        {formStatus.success && (
                            <div className="mt-6 flex items-start gap-3 rounded-lg bg-green-50 p-4 text-green-800 border border-green-100">
                                <CheckCircle className="size-5 mt-0.5 flex-shrink-0" />
                                <p className="text-sm font-medium">{formStatus.message}</p>
                            </div>
                        )}

                        {formStatus.error && (
                            <div className="mt-6 flex items-start gap-3 rounded-lg bg-red-50 p-4 text-red-800 border border-red-100">
                                <AlertCircle className="size-5 mt-0.5 flex-shrink-0" />
                                <p className="text-sm font-medium">{formStatus.message}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-white font-medium">First name</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-white font-medium">Last name</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white font-medium">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-white font-medium">Phone <span className="text-gray-400 font-normal">(optional)</span></Label>
                                <Input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-white font-medium">Subject</Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-white font-medium">Message</Label>
                                <Textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 min-h-[120px]"
                                />
                            </div>

                            <Button
                                type="submit"
                                className={cn(
                                    "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200",
                                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                    loading && "opacity-70 cursor-not-allowed"
                                )}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}