import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Data & Cloud Migration Services | Toronto & GTA",
    description:
        "Get the best data migration services in Toronto, GTA & Mississauga. We offer expert cloud data and database migration solutions tailored to your business needs.",
    alternates: { canonical: "https://cdatainsights.com/services/data-migration" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
