import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import CareersPage from "./c";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | CData Insights",
    description: "Join CData Insights — explore career opportunities in data engineering, AI consulting, and analytics.",
    alternates: { canonical: "https://cdatainsights.com/career" },
};


export default function Home() {
    return (
        <div>
            <HeroHeader />
            <CareersPage />

            <FooterSection />

        </div>
    );
}
