import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | CData Insights — Join Our Data Engineering Team",
    description:
        "Join CData Insights and work on cutting-edge data engineering, Snowflake, and AI projects. Explore open positions in data consulting and analytics.",
    alternates: { canonical: "https://cdatainsights.com/career" },
    openGraph: {
        title: "Careers | CData Insights",
        description: "Join our team and work on cutting-edge data engineering, Snowflake, and AI projects.",
        url: "https://cdatainsights.com/career",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Careers | CData Insights",
        description: "Explore open positions in data engineering and AI consulting.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
