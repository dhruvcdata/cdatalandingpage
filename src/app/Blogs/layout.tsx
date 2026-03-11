import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | CData Insights",
    description:
        "Insights, trends, and expert articles on data engineering, data architecture, cloud migration, and modern analytics from CData Insights.",
    alternates: { canonical: "https://cdatainsights.com/blogs" },
    openGraph: {
        title: "Blog | CData Insights",
        description:
            "Insights, trends, and expert articles on data engineering, data architecture, cloud migration, and modern analytics.",
        url: "https://cdatainsights.com/blogs",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | CData Insights",
        description:
            "Insights, trends, and expert articles on data engineering, data architecture, cloud migration, and modern analytics.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
