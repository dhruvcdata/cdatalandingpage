import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries We Serve | CData Insights — Data Solutions by Sector",
    description:
        "CData Insights delivers tailored data engineering, AI, and analytics solutions for real estate, media & entertainment, healthcare, retail, finance, and hospitality industries.",
    alternates: { canonical: "https://cdatainsights.com/industries/" },
    openGraph: {
        title: "Industries We Serve | CData Insights",
        description: "Tailored data engineering and AI solutions for real estate, media, healthcare, retail, finance, and hospitality.",
        url: "https://cdatainsights.com/industries/",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Industries We Serve | CData Insights",
        description: "Data engineering and AI solutions tailored by industry.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
