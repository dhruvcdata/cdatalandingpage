import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cdata",
    description:
        "Cdata",
    alternates: { canonical: "https://cdatainsights.com/privacy-policies" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
