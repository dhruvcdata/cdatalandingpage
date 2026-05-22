import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { HeroHeader } from '@/components/hero5-header'
import FooterSection from '@/components/footer'
import DownloadForm from './DownloadForm'

const PAGE_URL = 'https://cdatainsights.com/resources/metric-drift-audit'
const PAGE_TITLE = 'The Metric Drift Audit Template — Free Download'
const PAGE_DESCRIPTION =
    'The exact spreadsheet CData Consulting uses on day 1 of every semantic layer engagement. Surface every place "revenue", "active customer", and "MRR" are defined across your stack — most teams find 4-7 definitions hiding in plain sight.'

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: 'article',
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        siteName: 'CData Insights',
    },
    twitter: {
        card: 'summary_large_image',
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    },
}

export default function MetricDriftAuditPage() {
    const offerSchema = {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        name: 'Metric Drift Audit Template',
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        price: '0',
        priceCurrency: 'USD',
        seller: {
            '@type': 'Organization',
            name: 'CData Insights',
            url: 'https://cdatainsights.com',
        },
    }

    return (
        <>
            <HeroHeader />
            <main className="bg-black text-white min-h-screen">
                <Script
                    id="metric-drift-audit-offer-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(offerSchema),
                    }}
                />

                {/* HERO */}
                <section className="border-b border-white/10 bg-gradient-to-b from-neutral-950 to-black px-6 py-16">
                    <div className="mx-auto max-w-4xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-400">
                            Free Resource · Lead Magnet
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            The Metric Drift Audit Template
                        </h1>
                        <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-3xl">
                            The spreadsheet we run on day one of every semantic layer
                            engagement. Surface every place &ldquo;revenue,&rdquo;
                            &ldquo;active customer,&rdquo; and &ldquo;MRR&rdquo; are
                            defined across your stack — and how badly they disagree.
                        </p>
                    </div>
                </section>

                {/* WHAT'S IN IT */}
                <section className="mx-auto max-w-4xl px-6 py-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">
                                What&apos;s in it
                            </h2>
                            <ul className="mt-4 space-y-3 text-gray-300 leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        Pre-filled rows for the 5 metrics that drift
                                        the most: revenue, active customer, MRR,
                                        pipeline, retention.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        10 columns covering source system, owner, SQL
                                        location, calculation logic, grain, filters,
                                        and last-validated date.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        Worked examples showing the 4-7 definitions
                                        of each metric hiding in real data stacks.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        A read-out section so you can show the result
                                        to your CFO and fund the cleanup.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-white">
                                Who it&apos;s for
                            </h2>
                            <ul className="mt-4 space-y-3 text-gray-300 leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        Heads of Data, Analytics Engineering Leads,
                                        and VP Data planning a semantic layer rollout
                                        (dbt, Cube, LookML, MetricFlow).
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        Teams putting an AI agent in front of the
                                        warehouse who can&apos;t afford the chatbot
                                        to invent definitions.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-400">→</span>
                                    <span>
                                        Anyone whose CFO has asked &ldquo;why does
                                        Finance say $4.2M and Sales says
                                        $4.7M?&rdquo; in the last quarter.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FORM */}
                <section className="mx-auto max-w-4xl px-6 py-8">
                    <h2 className="text-2xl font-semibold text-white">
                        Get the template
                    </h2>
                    <p className="mt-2 text-gray-400 text-sm">
                        Work email required. We&apos;ll send the link to your inbox
                        and start the download.
                    </p>
                    <div className="mt-6">
                        <DownloadForm />
                    </div>
                </section>

                {/* STRATEGY CALL CTA */}
                <section className="mx-auto max-w-4xl px-6 py-12">
                    <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-7 lg:p-8">
                        <h2 className="text-xl font-semibold text-white md:text-2xl">
                            Want us to run the audit with you?
                        </h2>
                        <p className="mt-3 text-gray-300 leading-relaxed max-w-2xl">
                            We offer a free 60-minute Semantic Layer Strategy Call: a
                            live walkthrough of the audit on one of your real
                            metrics, a scoped recommendation on dbt MetricFlow vs.
                            Cube vs. Looker for your stack, and a 90-day rollout plan
                            you can run yourself or with us. Limited to 4 calls per
                            month.
                        </p>
                        <div className="mt-5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                            >
                                Book a Strategy Call →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* LINK BACK TO POST */}
                <section className="mx-auto max-w-4xl px-6 py-12 border-t border-white/10 text-center">
                    <p className="text-gray-400">
                        Want the full thinking behind this?
                    </p>
                    <Link
                        href="/blogs/semantic-layer-synonyms-cutting-time-to-answer"
                        className="mt-2 inline-block text-blue-400 underline underline-offset-2 hover:text-blue-300"
                    >
                        Read: The Semantic Layer Is the Synonym Map →
                    </Link>
                </section>
            </main>
            <FooterSection />
        </>
    )
}
