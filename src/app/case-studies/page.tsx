import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import CaseStudiesShowcase from "./cs";
import CallToAction from "@/components/call-to-action";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | CData Insights",
    description: "See how CData Insights delivers data engineering, analytics, and AI solutions for enterprises across industries.",
    alternates: { canonical: "https://cdatainsights.com/case-studies" },
};

export default function Home() {
    return (
        <div>
            <HeroHeader />
            <CaseStudiesShowcase />
            <CallToAction />
            <FooterSection />

        </div>
    );
}
