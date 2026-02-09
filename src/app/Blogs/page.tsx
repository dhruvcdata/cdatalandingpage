import ContentSection from "@/components/content-7";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero5-header";
import Testimonial from "@/components/testimonials";
import DarkThemeBlogPage from "./blogs";


export default function Home() {
  return (
    <div>
      <HeroHeader />
      <DarkThemeBlogPage />
      <FooterSection />

    </div>
  );
}
