import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Retail & Consumer Goods Data Solutions | CData Insights",
    description:
        "Data engineering and AI solutions for retail and consumer goods. Demand forecasting, inventory optimization, and customer analytics powered by Snowflake.",
    alternates: { canonical: "https://cdatainsights.com/industries/retail-consumer-goods" },
    openGraph: {
        title: "Retail & Consumer Goods Data Solutions | CData Insights",
        description: "Demand forecasting, inventory optimization, and customer analytics powered by Snowflake.",
        url: "https://cdatainsights.com/industries/retail-consumer-goods",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Retail & Consumer Goods Data Solutions | CData Insights",
        description: "Data engineering and AI solutions for retail and consumer goods.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
