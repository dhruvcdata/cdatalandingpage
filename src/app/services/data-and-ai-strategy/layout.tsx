import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Data & AI Strategy Services in Toronto & Mississauga",
    description:
        "Leading data & AI strategy services in Toronto & Mississauga. Get expert solutions to drive innovation and growth across Canada with proven AI strategies.",
    alternates: { canonical: "https://cdatainsights.com/services/data-and-ai-strategy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
