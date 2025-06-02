import ContentSection from "@/components/content-7";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero5-header";
import Testimonial from "@/components/testimonials";
import CaseStudiesShowcase from "./cs";
import CallToAction from "@/components/call-to-action";



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
