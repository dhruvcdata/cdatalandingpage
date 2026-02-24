import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | CData Insights — Data Engineering, AI & Analytics",
    description:
        "Explore CData Insights services: data engineering, Snowflake implementation, data migration, AI/ML, data platform modernization, and BI visualization.",
    alternates: { canonical: "https://cdatainsights.com/services/" },
    openGraph: {
        title: "Our Services | CData Insights",
        description: "Data engineering, Snowflake implementation, data migration, AI/ML, and BI visualization services.",
        url: "https://cdatainsights.com/services/",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Our Services | CData Insights",
        description: "Data engineering, AI, and analytics services for enterprises.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
