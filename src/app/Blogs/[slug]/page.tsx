'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { BLOG_DATA } from '../../../lib/mock-blog-data'


export default function BlogSlugPage() {
    const blog = BLOG_DATA

    return (

        <article className="bg-black text-white min-hscreen overflow-x-hidden">



            {/* ================= HERO (UNCHANGED) ================= */}
            <section className="relative">
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
                                <h2
                                    key={index}
                                    className="text-2xl font-semibold text-white"
                                >
                                    {block.value}
                                </h2>
                            )
                        }

                        if (block.type === 'paragraph') {
                            return (
                                <p
                                    key={index}
                                    className="text-gray-300 leading-relaxed"
                                >
                                    {block.value}
                                </p>
                            )
                        }

                        // ✅ STRICT IMAGE (NO BOX, NO BORDER, NO OVERFLOW)
                        if (block.type === 'image') {
                            return (
                                <div
                                    key={index}
                                    className="
                    mx-auto
                    w-full
                    max-w-3xl
                    overflow-hidden
                  "
                                >
                                    <div
                                        className="
                      relative
                      w-full
                      aspect-[16/9]
                      max-h-[420px]
                    "
                                    >
                                        <Image
                                            src={block.value}
                                            alt=""
                                            fill
                                            sizes="(max-width: 768px) 100vw, 768px"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
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
                            {blog.faq.map((item, i) => (
                                <Card
                                    key={i}
                                    className="bg-neutral-900 border border-white/10 p-6"
                                >
                                    <h4 className="font-medium">
                                        {item.question}
                                    </h4>
                                    <p className="mt-2 text-gray-400">
                                        {item.answer}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= SIDEBAR ================= */}
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
                                <p className="font-medium">
                                    {blog.author.name}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {blog.author.role}
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* TAGS (FIXED & FETCHED FROM DATA) */}
                    <Card className="bg-neutral-900 border border-white/10 p-6">
                        <h4 className="font-medium mb-4">
                            Tags
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="
                    rounded-full
                    border
                    border-white/20
                    px-3
                    py-1
                    text-xs
                    text-gray-300
                  "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                    {/* RELATED BLOGS */}
                    <Card className="bg-neutral-900 border border-white/10 p-6">
                        <h4 className="font-medium mb-4">
                            Related Articles
                        </h4>
                        <ul className="space-y-3">
                            {blog.relatedBlogs.map((item) => (
                                <li
                                    key={item.slug}
                                    className="text-sm text-blue-400 hover:underline cursor-pointer"
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </aside>
            </section>

        </article>
    )
}
