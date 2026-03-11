import type { Metadata } from "next";
import { BLOG_DATA_MAP } from "@/lib/mock-blog-data";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = BLOG_DATA_MAP[slug];

    if (!blog) {
        return { title: "Blog Not Found | CData Insights" };
    }

    return {
        title: `${blog.title} | CData Insights`,
        description: blog.subtitle,
        alternates: { canonical: `https://cdatainsights.com/blogs/${slug}` },
        openGraph: {
            title: blog.title,
            description: blog.subtitle,
            url: `https://cdatainsights.com/blogs/${slug}`,
            type: "article",
            images: [{ url: blog.heroImage }],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.subtitle,
            images: [blog.heroImage],
        },
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
