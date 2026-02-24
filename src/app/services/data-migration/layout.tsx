import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Migration Services | CData Insights — Seamless Cloud Migration",
    description:
        "Enterprise data migration services. Migrate from Redshift, Oracle, or on-premise systems to Snowflake with minimal downtime. Schema conversion, data validation, and cutover planning.",
    alternates: { canonical: "https://cdatainsights.com/services/data-migration" },
    openGraph: {
        title: "Data Migration Services | CData Insights",
        description: "Migrate from Redshift, Oracle, or on-premise systems to Snowflake with minimal downtime.",
        url: "https://cdatainsights.com/services/data-migration",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Data Migration Services | CData Insights",
        description: "Enterprise data migration to Snowflake with minimal downtime.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
