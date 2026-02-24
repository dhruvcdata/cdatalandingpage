import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Machine Learning Services | CData Insights — Enterprise AI Solutions",
    description:
        "Enterprise AI and machine learning consulting. Custom ML models, generative AI integration, NLP, and predictive analytics to drive smarter business decisions.",
    alternates: { canonical: "https://cdatainsights.com/services/ai-ml" },
    openGraph: {
        title: "AI & Machine Learning Services | CData Insights",
        description: "Custom ML models, generative AI integration, and predictive analytics for enterprises.",
        url: "https://cdatainsights.com/services/ai-ml",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "AI & Machine Learning Services | CData Insights",
        description: "Enterprise AI and machine learning consulting and custom model development.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
