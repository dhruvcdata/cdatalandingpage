import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Platform Modernization | CData Insights — Snowflake & Cloud Platforms",
    description:
        "Modernize your data platform with Snowflake, Databricks, and cloud-native architectures. Data lakehouse design, platform migration, and governance frameworks.",
    alternates: { canonical: "https://cdatainsights.com/services/data-platform" },
    openGraph: {
        title: "Data Platform Modernization | CData Insights",
        description: "Snowflake, Databricks, and cloud-native data platform modernization.",
        url: "https://cdatainsights.com/services/data-platform",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Data Platform Modernization | CData Insights",
        description: "Modernize your data platform with Snowflake and cloud-native architectures.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
