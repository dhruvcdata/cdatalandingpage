'use client'

import { useMemo, useState } from 'react'
import { Blogs } from '../../lib/blogcards'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const BLOGS_PER_PAGE = 6
const FALLBACK_IMAGE = '/logo.png'
const TAGS = ['Technology', 'Business', 'Innovation'] as const

export default function BlogPage() {
    const [search, setSearch] = useState('')
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest')
    const [currentPage, setCurrentPage] = useState(1)

    const filteredBlogs = useMemo(() => {
        let result = Blogs.filter((blog) => {
            const matchesSearch =
                blog.title.toLowerCase().includes(search.toLowerCase()) ||
                blog.subtitle.toLowerCase().includes(search.toLowerCase())

            const matchesTag =
                selectedTags.length === 0 || selectedTags.includes(blog.tag)

            return matchesSearch && matchesTag
        })

        result.sort((a, b) => {
            const dateA = new Date(a.date).getTime()
            const dateB = new Date(b.date).getTime()
            return sortBy === 'newest' ? dateB - dateA : dateA - dateB
        })

        return result
    }, [search, selectedTags, sortBy])

    const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)

    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * BLOGS_PER_PAGE,
        currentPage * BLOGS_PER_PAGE
    )

    return (
        <section className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-8 lg:px-0">

                {/* PAGE HEADER */}
                <div className="text-center">
                    <h1 className="text-4xl font-semibold lg:text-5xl text-white">
                        Our Blog
                    </h1>
                    <p className="mt-4 text-balance text-lg text-muted-foreground">
                        Insights, trends, and updates from our team of experts.
                    </p>
                </div>

                {/* FILTERS */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    {/* SEARCH */}
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setCurrentPage(1)
                        }}
                        placeholder="Search by keyword..."
                        className="w-full max-w-xs rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    {/* TAG FILTERS */}
                    {TAGS.map((tag) => {
                        const isActive = selectedTags.includes(tag)
                        return (
                            <button
                                key={tag}
                                onClick={() => {
                                    setSelectedTags((prev) =>
                                        prev.includes(tag)
                                            ? prev.filter((t) => t !== tag)
                                            : [...prev, tag]
                                    )
                                    setCurrentPage(1)
                                }}
                                className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${isActive
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-transparent text-muted-foreground hover:border-blue-600'
                                    }`}
                            >
                                {tag}
                            </button>
                        )
                    })}

                    {/* DATE SORT */}
                    <select
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value as 'newest' | 'oldest')
                            setCurrentPage(1)
                        }}
                        className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>

                </div>

                {/* BLOG GRID */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {paginatedBlogs.map((blog) => (
                        <Card
                            key={blog.slug}
                            className="
    group
    relative
    overflow-hidden
    rounded-xl
    bg-black
    shadow-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
    p-0
    gap-0
  "
                        >
                            {/* FULL CARD CLICK AREA */}
                            <Link
                                href={`/blogs/${blog.slug}`}
                                aria-label={`Read blog ${blog.title}`}
                                className="absolute inset-0 z-10"
                            />

                            {/* IMAGE SECTION */}
                            <div className="relative h-56 w-full overflow-hidden rounded-t-xl">

                                {/* IMAGE */}
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    onError={(e) => {
                                        e.currentTarget.src = '/logo.png'
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                {/* TAG OVER IMAGE */}
                                <span
                                    className="
        absolute
        bottom-4
        left-4
        z-20
        inline-block
        rounded-full
        bg-blue-100
        px-3
        py-1
        text-sm
        font-medium
        text-blue-600
        backdrop-blur-sm
      "
                                >
                                    {blog.tag}
                                </span>

                                {/* IMAGE → CONTENT BLUR + GRADIENT */}
                                <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black to-transparent backdrop-blur-[2px]" />

                                {/* <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm" /> */}
                            </div>

                            {/* CONTENT */}
                            <div className="relative z-20 px-6 pt-6 pb-6">
                                <h2 className="text-xl font-semibold text-white">
                                    {blog.title}
                                </h2>

                                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                    {blog.subtitle}
                                </p>

                                <div className="mt-6 text-sm text-muted-foreground">
                                    <span>{blog.date}</span>
                                </div>
                            </div>

                            {/* BOTTOM DEPTH SHADOW */}
                            <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-black/60 to-transparent" />
                        </Card>






                    ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                        >
                            <ChevronLeft className="size-4" />
                            <span className="ml-2">Previous</span>
                        </Button>

                        <span className="text-sm text-muted-foreground">
                            Page {currentPage} of {totalPages}
                        </span>

                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                        >
                            <span className="mr-2">Next</span>
                            <ChevronRight className="size-4" />
                        </Button>
                    </div>
                )}


            </div>
        </section>
    )
}
