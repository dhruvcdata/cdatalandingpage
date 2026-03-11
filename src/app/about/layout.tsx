import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | CData Insights — Data Engineering & AI Consulting",
    description:
        "Learn about CData Insights, a data engineering and AI consulting firm specializing in Snowflake, data platform modernization, and enterprise analytics for real estate, media, and financial services.",
    alternates: { canonical: "https://cdatainsights.com/about" },
    openGraph: {
        title: "About CData Insights",
        description: "Data engineering and AI consulting firm specializing in Snowflake, data platform modernization, and enterprise analytics.",
        url: "https://cdatainsights.com/about",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "About CData Insights",
        description: "Data engineering and AI consulting firm specializing in Snowflake and enterprise analytics.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
