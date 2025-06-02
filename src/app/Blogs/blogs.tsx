import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BlogPage() {
    // Sample blog data (replace with dynamic data later)
    const blogs = Array.from({ length: 15 }).map((_, index) => ({
        id: index + 1,
        image: `https://picsum.photos/400/300?random=${index + 1}`,
        tag: index % 3 === 0 ? 'Technology' : index % 3 === 1 ? 'Business' : 'Innovation',
        title: `Blog Post Title ${index + 1}`,
        subtitle: `A brief subtitle for blog post ${index + 1}`,
        excerpt: `This is a short excerpt from the blog post ${index + 1}. It provides a quick overview of the content.`,
        date: `October ${index + 1}, 2023`,
        author: `Author ${index + 1}`,
    }))

    // Pagination state (static for now)
    const currentPage = 1
    const blogsPerPage = 12
    const totalPages = Math.ceil(blogs.length / blogsPerPage)

    return (
        <section className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-8 lg:px-0">
                {/* Page Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Our Blog
                    </h1>
                    <p className="mt-4 text-balance text-lg">
                        Insights, trends, and updates from our team of experts.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(0, blogsPerPage).map((blog) => (
                        <Card key={blog.id} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                                    {blog.tag}
                                </span>
                                <h2 className="mt-4 text-xl font-semibold">{blog.title}</h2>
                                <p className="mt-2 text-sm text-muted-foreground">{blog.subtitle}</p>
                                <p className="mt-4 text-sm text-muted-foreground">{blog.excerpt}</p>
                                <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                                    <span>{blog.date}</span>
                                    <span>By {blog.author}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex items-center justify-center gap-4">
                    <Button variant="outline" size="sm" disabled={currentPage === 1}>
                        <ChevronLeft className="size-4" />
                        <span className="ml-2">Previous</span>
                    </Button>
                    <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button variant="outline" size="sm" disabled={currentPage === totalPages}>
                        <span className="mr-2">Next</span>
                        <ChevronRight className="size-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}