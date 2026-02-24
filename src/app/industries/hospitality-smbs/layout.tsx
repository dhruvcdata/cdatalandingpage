import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hospitality & SMB Data Solutions | CData Insights",
    description:
        "Data engineering and analytics for hospitality and small-to-medium businesses. Revenue management, guest analytics, and operational intelligence powered by Snowflake.",
    alternates: { canonical: "https://cdatainsights.com/industries/hospitality-smbs" },
    openGraph: {
        title: "Hospitality & SMB Data Solutions | CData Insights",
        description: "Revenue management, guest analytics, and operational intelligence powered by Snowflake.",
        url: "https://cdatainsights.com/industries/hospitality-smbs",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Hospitality & SMB Data Solutions | CData Insights",
        description: "Data engineering and analytics for hospitality and small-to-medium businesses.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
