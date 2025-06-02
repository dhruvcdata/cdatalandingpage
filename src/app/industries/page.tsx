import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building, ShoppingCart, Stethoscope, Briefcase, Factory, Users, BarChart, Globe } from "lucide-react";
import Link from "next/link";
import IndustriesGrid from "../gridserins";
import DataServicesGrid from "../gridserins";
import IndustriesComponent from "./industog1";
import CallToAction from "@/components/call-to-action";
import WhyChooseIndustries from "./whyind";

export default function IndustriesPage() {
  return (
    <div>
      <HeroHeader />
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Industries We Empower</h1>
              <p className="mt-8 max-w-6xl text-balance text-lg">Different industries face unique challenges, and the right data-driven solutions can make all the difference. At CData Consultancy, we leverage our expertise to help businesses in various sectors harness the power of data for growth, efficiency, and innovation.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base">
                  <Link href="/Contact">
                    <span className="text-nowrap">Get Free Assesment</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-lg px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                  <Link href="/services">
                    <span className="text-nowrap">Services we Provide</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
            <video
              autoPlay
              loop
              className="size-full -scale-x-100 object-cover opacity-30 dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="/videos/indus.mp4"></video>
          </div>
        </div>
      </section>
      <section className="bg-background py-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-muted-foreground">
            We collaborate with diverse industries to provide tailored data solutions, AI-driven insights, and digital strategies that drive growth and innovation. From healthcare to finance, retail to manufacturing, our expertise empowers businesses to thrive in an evolving digital landscape.
          </p>
        </div>
      </section>
      <DataServicesGrid />
      <IndustriesComponent />
      <WhyChooseIndustries />
      <CallToAction />






      <FooterSection />
    </div>
  );
}

