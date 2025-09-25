import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Data Visualization Services | Toronto, Detroit & GTA",
    description:
        "Get top data visualization services in Toronto, Detroit & Mississauga. We offer the best online data analysis and visualization to turn insights into action.",
    alternates: { canonical: "https://cdatainsights.com/services/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
