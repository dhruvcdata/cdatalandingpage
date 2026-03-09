import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Press | CData Insights — Data Engineering & AI Consulting",
    description:
        "Featured articles, press coverage, and media appearances by Nitin Jain and CData Consulting. Coverage in TechBullion, Modern Mississauga, Fivetran, and more.",
    alternates: { canonical: "https://cdatainsights.com/news" },
    openGraph: {
        title: "News & Press | CData Insights",
        description: "Featured articles, press coverage, and media appearances by Nitin Jain and CData Consulting.",
        url: "https://cdatainsights.com/news",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "News & Press | CData Insights",
        description: "Featured articles, press coverage, and media appearances by Nitin Jain and CData Consulting.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
