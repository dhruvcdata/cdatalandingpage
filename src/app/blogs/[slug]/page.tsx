import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { BLOG_DATA_MAP } from '@/lib/mock-blog-data'
import Script from 'next/script'
import type { Metadata } from 'next'

export function generateStaticParams() {
    return Object.keys(BLOG_DATA_MAP).map((slug) => ({ slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const blog = BLOG_DATA_MAP[slug]
    if (!blog) return {}

    const url = `https://cdatainsights.com/blogs/${slug}`

    return {
        title: `${blog.title} | CData Insights`,
        description: blog.subtitle,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            title: blog.title,
            description: blog.subtitle,
            url,
            siteName: 'CData Insights',
            images: [{ url: blog.heroImage, alt: blog.title }],
            publishedTime: blog.date,
            authors: [blog.author.name],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.subtitle,
            images: [blog.heroImage],
        },
    }
}

export default async function BlogSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const blog = BLOG_DATA_MAP[slug]

    if (!blog) notFound()

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.title,
        description: blog.subtitle,
        image: blog.heroImage,
        datePublished: blog.date,
        author: {
            '@type': 'Person',
            name: blog.author.name,
            jobTitle: blog.author.role,
        },
        publisher: {
            '@type': 'Organization',
            name: 'CData Insights',
            logo: { '@type': 'ImageObject', url: 'https://cdatainsights.com/whitelogo.png' },
        },
        mainEntityOfPage: `https://cdatainsights.com/blogs/${slug}`,
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    }

    return (
        <article className="bg-black text-white min-hscreen overflow-x-hidden">
            <Script
                id={`article-schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id={`faq-schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ================= HERO ================= */}
            <section className="relative">

                {/* BACK BUTTON */}
                <Link
                    href="/blogs"
                    className="
            absolute
            top-6
            left-6
            z-30
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-black/60
            px-4
            py-2
            text-sm
            text-white
            backdrop-blur
            transition
            hover:bg-white
            hover:text-black
          "
                >
                    ← Back to Blogs
                </Link>

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />

                <Image
                    src={blog.heroImage}
                    alt={blog.title}
                    width={1600}
                    height={800}
                    className="w-full h-[45vh] object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 z-20 max-w-5xl mx-auto px-6 pb-12">
                    <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                        {blog.category}
                    </span>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        {blog.title}
                    </h1>

                    <p className="mt-4 text-lg text-gray-300 max-w-3xl">
                        {blog.subtitle}
                    </p>

                    <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readingTime}</span>
                    </div>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16">

                {/* MAIN CONTENT */}
                <div className="space-y-10 overflow-x-hidden">
                    {blog.content.map((block, index) => {
                        if (block.type === 'heading') {
                            return (
                                <h2 key={`heading-${index}`} className="text-2xl font-semibold text-white">
                                    {block.value}
                                </h2>
                            )
                        }

                        if (block.type === 'paragraph') {
                            return (
                                <p
                                    key={`paragraph-${index}`}
                                    className="text-gray-300 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_code]:text-blue-400 [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-300"
                                    dangerouslySetInnerHTML={{ __html: block.value }}
                                />
                            )
                        }

                        if (block.type === 'image') {
                            const isSvg = block.value.endsWith('.svg')
                            return (
                                <div
                                    key={`image-${index}`}
                                    className="mx-auto w-full max-w-3xl overflow-hidden"
                                >
                                    {isSvg ? (
                                        <img
                                            src={block.value}
                                            alt=""
                                            className="w-full h-auto rounded-lg"
                                        />
                                    ) : (
                                        <div className="relative w-full aspect-[16/9] max-h-[420px]">
                                            <Image
                                                src={block.value}
                                                alt=""
                                                fill
                                                sizes="(max-width: 768px) 100vw, 768px"
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            )
                        }

                        if (block.type === 'code') {
                            return (
                                <pre
                                    key={`code-${index}`}
                                    className="rounded-lg border border-white/10 bg-neutral-950 p-5 overflow-x-auto"
                                >
                                    {block.language && (
                                        <div className="mb-3 text-xs font-mono uppercase tracking-wider text-gray-500">
                                            {block.language}
                                        </div>
                                    )}
                                    <code className="text-sm font-mono text-gray-200 leading-relaxed whitespace-pre">
                                        {block.value}
                                    </code>
                                </pre>
                            )
                        }

                        if (block.type === 'list') {
                            const ListTag = block.ordered ? 'ol' : 'ul'
                            const listClass = block.ordered ? 'list-decimal' : 'list-disc'
                            return (
                                <ListTag
                                    key={`list-${index}`}
                                    className={`${listClass} pl-6 space-y-2 text-gray-300 leading-relaxed marker:text-blue-400 [&_strong]:text-white [&_strong]:font-semibold [&_code]:text-blue-400 [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-300`}
                                >
                                    {block.items.map((item, itemIndex) => (
                                        <li
                                            key={`list-${index}-item-${itemIndex}`}
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    ))}
                                </ListTag>
                            )
                        }

                        if (block.type === 'quote') {
                            return (
                                <blockquote
                                    key={`quote-${index}`}
                                    className="border-l-4 border-blue-500/60 bg-blue-500/5 pl-5 pr-4 py-4 rounded-r-md text-gray-200 italic [&_strong]:not-italic [&_strong]:text-white [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-300"
                                    dangerouslySetInnerHTML={{ __html: block.value }}
                                />
                            )
                        }

                        if (block.type === 'table') {
                            return (
                                <div
                                    key={`table-${index}`}
                                    className="overflow-x-auto rounded-lg border border-white/10"
                                >
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-white/5 text-white">
                                            <tr>
                                                {block.headers.map((header, headerIndex) => (
                                                    <th
                                                        key={`table-${index}-head-${headerIndex}`}
                                                        className="px-4 py-3 font-semibold border-b border-white/10"
                                                    >
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-300">
                                            {block.rows.map((row, rowIndex) => (
                                                <tr
                                                    key={`table-${index}-row-${rowIndex}`}
                                                    className="border-b border-white/5 last:border-b-0"
                                                >
                                                    {row.map((cell, cellIndex) => (
                                                        <td
                                                            key={`table-${index}-row-${rowIndex}-cell-${cellIndex}`}
                                                            className="px-4 py-3 align-top [&_strong]:text-white [&_strong]:font-semibold"
                                                            dangerouslySetInnerHTML={{ __html: cell }}
                                                        />
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }

                        if (block.type === 'cta') {
                            return (
                                <div
                                    key={`cta-${index}`}
                                    className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-7 lg:p-8"
                                >
                                    <h3 className="text-xl font-semibold text-white">
                                        {block.title}
                                    </h3>
                                    <p
                                        className="mt-3 text-gray-300 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-blue-400 [&_a]:underline hover:[&_a]:text-blue-300"
                                        dangerouslySetInnerHTML={{ __html: block.body }}
                                    />
                                    {block.buttons.length > 0 && (
                                        <div className="mt-5 flex flex-wrap gap-3">
                                            {block.buttons.map((button, btnIndex) => {
                                                const isPrimary =
                                                    (button.variant ?? 'primary') === 'primary'
                                                const className = isPrimary
                                                    ? 'inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500'
                                                    : 'inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10'
                                                const isExternal = button.href.startsWith('http')
                                                return isExternal ? (
                                                    <a
                                                        key={`cta-${index}-btn-${btnIndex}`}
                                                        href={button.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={className}
                                                    >
                                                        {button.label}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={`cta-${index}-btn-${btnIndex}`}
                                                        href={button.href}
                                                        className={className}
                                                    >
                                                        {button.label}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        }

                        if (block.type === 'divider') {
                            return (
                                <hr
                                    key={`divider-${index}`}
                                    className="border-t border-white/10"
                                />
                            )
                        }

                        return null
                    })}

                    {/* FAQ */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-6">
                            Frequently Asked Questions
                        </h3>

                        <div className="space-y-4">
                            {blog.faq.map((item) => (
                                <Card
                                    key={item.question}
                                    className="bg-neutral-900 border border-white/10 p-6"
                                >
                                    <h4 className="font-medium">{item.question}</h4>
                                    <p className="mt-2 text-gray-400">{item.answer}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 lg:p-10">
                        <h3 className="text-2xl font-semibold text-white">
                            Need help building your data platform?
                        </h3>
                        <p className="mt-3 text-gray-300 leading-relaxed max-w-2xl">
                            At CData Consulting, we design, build, and operate modern data
                            infrastructure for companies across North America. Whether you are
                            planning a migration, optimizing costs, or building from scratch
                            — let&apos;s talk.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                            >
                                Schedule a Consultation
                            </Link>
                            <a
                                href="mailto:nitin@cdatainsights.com"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Email Us Directly
                            </a>
                        </div>
                    </div>
                </div>

                {/* SIDEBAR */}
                <aside className="space-y-8">
                    {/* AUTHOR */}
                    <Card className="bg-neutral-900 border border-white/10 p-6">
                        <div className="flex items-center gap-4">
                            <Image
                                src={blog.author.avatar}
                                alt={blog.author.name}
                                width={56}
                                height={56}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-medium">{blog.author.name}</p>
                                <p className="text-sm text-gray-400">{blog.author.role}</p>
                            </div>
                        </div>
                    </Card>

                    {/* TAGS */}
                    <Card className="bg-neutral-900 border border-white/10 p-6">
                        <h4 className="font-medium mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                    {/* RELATED BLOGS */}
                    <Card className="bg-neutral-900 border border-white/10 p-6">
                        <h4 className="font-medium mb-4">Related Articles</h4>
                        <ul className="space-y-3">
                            {blog.relatedBlogs.map((item) => (
                                <li key={item.slug}>
                                    <Link
                                        href={item.slug}
                                        className="text-sm text-blue-400 hover:underline"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* SIDEBAR CTA */}
                    <Card className="bg-gradient-to-b from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-6">
                        <h4 className="font-medium text-white mb-2">Work with Us</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Data engineering, platform architecture, and cloud migration — delivered by senior consultants.
                        </p>
                        <Link
                            href="/contact"
                            className="block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
                        >
                            Get in Touch
                        </Link>
                    </Card>
                </aside>
            </section>
        </article>
    )
}
