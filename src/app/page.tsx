import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud2";
import DataServicesGrid from "./gridser";
import DataRevivalComponent from "./tog2";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DataServicesGrid />
      <DataRevivalComponent />
      <LogoCloud />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
