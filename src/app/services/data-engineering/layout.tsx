import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Engineering Services | CData Insights — Snowflake & Cloud Data Pipelines",
    description:
        "Enterprise data engineering services. Build scalable ETL/ELT pipelines, data warehouses on Snowflake, and real-time data infrastructure for analytics and AI.",
    alternates: { canonical: "https://cdatainsights.com/services/data-engineering" },
    openGraph: {
        title: "Data Engineering Services | CData Insights",
        description: "Scalable ETL/ELT pipelines, Snowflake data warehouses, and real-time data infrastructure.",
        url: "https://cdatainsights.com/services/data-engineering",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Data Engineering Services | CData Insights",
        description: "Enterprise data engineering with Snowflake and cloud data pipelines.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
