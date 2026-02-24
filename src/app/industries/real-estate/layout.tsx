import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real Estate Data Solutions | CData Insights — Snowflake for Real Estate",
    description:
        "Data engineering, analytics, and AI solutions for commercial and residential real estate. Portfolio analytics, tenant insights, and market intelligence powered by Snowflake.",
    alternates: { canonical: "https://cdatainsights.com/industries/real-estate" },
    openGraph: {
        title: "Real Estate Data Solutions | CData Insights",
        description: "Portfolio analytics, tenant insights, and market intelligence powered by Snowflake.",
        url: "https://cdatainsights.com/industries/real-estate",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Real Estate Data Solutions | CData Insights",
        description: "Data engineering and AI solutions for commercial and residential real estate.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
