import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Visualization & BI Dashboards | CData Insights",
    description:
        "Transform data into actionable insights with custom dashboards and BI solutions. Tableau, Power BI, and Snowflake-native visualization for enterprise analytics.",
    alternates: { canonical: "https://cdatainsights.com/services/data-visualization" },
    openGraph: {
        title: "Data Visualization & BI Dashboards | CData Insights",
        description: "Custom dashboards and BI solutions with Tableau, Power BI, and Snowflake.",
        url: "https://cdatainsights.com/services/data-visualization",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Data Visualization & BI Dashboards | CData Insights",
        description: "Enterprise data visualization and BI dashboard consulting.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
