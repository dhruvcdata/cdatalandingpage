import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data & AI Strategy Consulting | CData Insights — Enterprise AI Roadmap",
    description:
        "Develop a data and AI strategy aligned with your business goals. Roadmap planning, technology selection, governance frameworks, and AI readiness assessments.",
    alternates: { canonical: "https://cdatainsights.com/services/data-and-ai-strategy" },
    openGraph: {
        title: "Data & AI Strategy Consulting | CData Insights",
        description: "Develop a data and AI strategy aligned with your business goals.",
        url: "https://cdatainsights.com/services/data-and-ai-strategy",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Data & AI Strategy Consulting | CData Insights",
        description: "Enterprise data and AI strategy consulting and roadmap planning.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
