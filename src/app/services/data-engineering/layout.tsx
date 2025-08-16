import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Data Engineering Solutions in Toronto & GTA",
    description:
        "Expert data engineering solutions in Toronto & GTA. Boost performance with advanced data engineering and machine learning services tailored to your business.",
    alternates: { canonical: "https://cdatainsights.com/services/data-engineering" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
