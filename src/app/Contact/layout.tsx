import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | CData Insights — Get a Free Data Assessment",
    description:
        "Get in touch with CData Insights for a free data assessment. We help enterprises with Snowflake implementation, data migration, cost optimization, and AI strategy.",
    alternates: { canonical: "https://cdatainsights.com/Contact" },
    openGraph: {
        title: "Contact CData Insights",
        description: "Get a free data assessment. Snowflake implementation, data migration, and AI strategy consulting.",
        url: "https://cdatainsights.com/Contact",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contact CData Insights",
        description: "Get a free data assessment for your enterprise data platform.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
