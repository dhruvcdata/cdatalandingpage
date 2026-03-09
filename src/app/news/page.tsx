"use client";

import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import CallToAction from "@/components/call-to-action";
import { ExternalLink, Play, Newspaper } from "lucide-react";

interface NewsItem {
    title: string;
    publication: string;
    description: string;
    url: string;
    date: string;
    type: "article" | "case-study" | "video";
    image: string;
}

const NEWS_ITEMS: NewsItem[] = [
    {
        title: "Harnessing AI & Data: The Visionary Approach of Nitin Jain",
        publication: "TechBullion",
        description:
            "Profile on how Nitin Jain helps organizations leverage artificial intelligence and data analytics to improve operations, reduce costs, and drive strategic decision-making at scale.",
        url: "https://techbullion.com/harnessing-ai-data-the-visionary-approach-of-nitin-jain/",
        date: "2025",
        type: "article",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    },
    {
        title: "Modern Entrepreneur Profile: Mississauga's Nitin Jain",
        publication: "Modern Mississauga",
        description:
            "Entrepreneur profile featuring Nitin Jain, founder of CData Consulting, discussing his journey building a data analytics and AI consulting firm and his vision for 2025.",
        url: "https://www.modernmississauga.com/main/2025/1/27/modern-entrepreneur-profile-mississaugas-nitin-jain",
        date: "January 2025",
        type: "article",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    },
    {
        title: "SevenRooms Cuts Time to Insights with Fivetran and Google Cloud",
        publication: "Fivetran",
        description:
            "Case study featuring Nitin Jain as Senior Data Engineer at SevenRooms, where he helped accelerate data insights from months to days using Fivetran and Google Cloud.",
        url: "https://www.fivetran.com/blog/sevenrooms-cuts-time-to-insights-with-fivetran-and-google-cloud",
        date: "2023",
        type: "case-study",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
        title: "Data Engineering & AI Strategy",
        publication: "YouTube",
        description:
            "Video interview discussing modern data platform architecture, AI-driven decision making, and how organizations can build scalable data infrastructure.",
        url: "https://www.youtube.com/watch?v=6iMAE6KEG9M",
        date: "2024",
        type: "video",
        image: "https://img.youtube.com/vi/6iMAE6KEG9M/maxresdefault.jpg",
    },
];

export default function NewsPage() {
    return (
        <div>
            <HeroHeader />

            {/* Hero */}
            <section className="border-b border-gray-200 bg-white py-20 md:py-28">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Newspaper className="h-5 w-5 text-gray-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                            News & Press
                        </span>
                    </div>
                    <h1 className="text-4xl font-medium tracking-tight text-gray-900 lg:text-5xl">
                        Featured In
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500">
                        Press coverage, case studies, and media appearances from our work in data engineering, AI strategy, and platform modernization.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {NEWS_ITEMS.map((item, i) => (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {item.type === "video" && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                                                <Play className="h-6 w-6 text-gray-900 ml-0.5" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute top-3 left-3">
                                        <span className="inline-block rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-700 shadow-sm backdrop-blur-sm">
                                            {item.publication}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-2 text-xs font-medium text-gray-400">
                                        {item.date} &middot;{" "}
                                        {item.type === "article"
                                            ? "Article"
                                            : item.type === "case-study"
                                            ? "Case Study"
                                            : "Video"}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-blue-600">
                                        <span>Read more</span>
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
            <FooterSection />
        </div>
    );
}
