import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Healthcare Data Solutions | CData Insights — Analytics for Health & Wellness",
    description:
        "HIPAA-compliant data engineering and analytics for healthcare and wellness organizations. Patient analytics, operational efficiency, and clinical data integration.",
    alternates: { canonical: "https://cdatainsights.com/industries/health-wellness" },
    openGraph: {
        title: "Healthcare Data Solutions | CData Insights",
        description: "HIPAA-compliant data engineering and analytics for healthcare and wellness organizations.",
        url: "https://cdatainsights.com/industries/health-wellness",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Healthcare Data Solutions | CData Insights",
        description: "Data engineering and analytics for healthcare and wellness organizations.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
