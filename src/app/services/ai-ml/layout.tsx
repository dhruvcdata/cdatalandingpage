import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Machine Learning Services in Detroit & Mississauga",
    description:
        "Get expert machine learning services in Detroit & Mississauga. We offer AI solutions, machine learning consulting, and custom models for smarter decisions.",
    alternates: { canonical: "https://cdatainsights.com/services/ai-ml" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
