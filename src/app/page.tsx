import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud2";
import Testimonial from "@/components/testimonials";
import DataServicesGrid from "./gridser";
import DataVisualizationSection from "./tog1";
import DataRevivalComponent from "./tog2";
import LatestInsightsComponent from "./blogcomp";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Cdata Consultancy</title>
        <meta name="Cdata Consultancy" />
      </Head >
      <HeroSection />
      <Features />
      <DataServicesGrid />
      {/* <DataVisualizationSection /> */}
      <DataRevivalComponent />
      <LogoCloud />
      {/* <LatestInsightsComponent /> */}
      {/* <Testimonial /> */}
      <CallToAction />
      <FooterSection />

    </div>
  );
}

