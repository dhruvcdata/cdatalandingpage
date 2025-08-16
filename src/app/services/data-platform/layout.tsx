import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Customer Data & Digital Asset Platforms | GTA & Detroit",
    description:
        "Discover the best customer data platform in GTA, top digital asset management in Detroit, and expert solutions using Google Cloud database technology.",
    alternates: { canonical: "https://cdatainsights.com/services/data-platform" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
