import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Finance & Public Services Data Solutions | CData Insights",
    description:
        "Data engineering and analytics for financial services and public sector organizations. Regulatory compliance, risk analytics, and fraud detection powered by Snowflake.",
    alternates: { canonical: "https://cdatainsights.com/industries/finance-public-services" },
    openGraph: {
        title: "Finance & Public Services Data Solutions | CData Insights",
        description: "Regulatory compliance, risk analytics, and fraud detection powered by Snowflake.",
        url: "https://cdatainsights.com/industries/finance-public-services",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Finance & Public Services Data Solutions | CData Insights",
        description: "Data engineering and analytics for financial services and public sector.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
