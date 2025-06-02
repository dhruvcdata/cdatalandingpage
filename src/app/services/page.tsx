import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight, BrainCircuit, Cloud, BarChart, Globe, Database, ShoppingCart, LineChart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import DataRevivalComponent from "../tog2";
import DataServicesGrid from "../gridser";
import CallToAction from "@/components/call-to-action";



export default function ServicesPage() {
  return (
    <div>
      <HeroHeader />

      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Data Innovation Journeys </h1>
              <p className="mt-8 max-w-6xl text-balance text-lg">Every successful journey begins with a plan, and a good plan is informed by experience and insight. CData Consultancy wrapped our expertise and research into a framework called The Data Innovation Journey, enabling your organization to deliver pragmatic solutions to real world problems.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base">
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
                  className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                  <Link href="/industries">
                    <span className="text-nowrap">Industries we Serve</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
            <video
              autoPlay
              loop
              className="size-full -scale-x-100 object-cover opacity-30  dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="/videos/vid2data.mp4"></video>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      <section className="bg-background py-8 ">
        <div className="mx-auto max-w-5xl text-center ">

          <p className="text-lg text-muted-foreground">
            We offer a wide range of services designed to help businesses thrive in the digital era. From data solutions to AI, marketing, and CRM management, our expertise drives innovation and efficiency.
          </p>
        </div>
      </section >
      <DataServicesGrid />

      <br></br>

      <br></br>
      <DataRevivalComponent />
      {/* Why Choose Us Section */}
      < section className="py-16 md:py-32" >
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-medium">Why Choose Our Services?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are dedicated to delivering high-quality, scalable, and innovative solutions tailored to your business needs.</p>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-3">
            <div className="text-center p-6 border rounded-lg shadow-md">
              <LineChart className="size-8 mx-auto text-primary" />
              <h3 className="mt-4 text-xl font-medium">Data-Driven Solutions</h3>
              <p className="mt-2 text-muted-foreground">We harness the power of data to drive informed business decisions and optimize workflows.</p>
            </div>

            <div className="text-center p-6 border rounded-lg shadow-md">
              <BrainCircuit className="size-8 mx-auto text-primary" />
              <h3 className="mt-4 text-xl font-medium">Cutting-Edge AI</h3>
              <p className="mt-2 text-muted-foreground">Our AI-driven solutions empower businesses with automation, predictive analytics, and machine learning.</p>
            </div>

            <div className="text-center p-6 border rounded-lg shadow-md">
              <Globe className="size-8 mx-auto text-primary" />
              <h3 className="mt-4 text-xl font-medium">End-to-End Digital Strategies</h3>
              <p className="mt-2 text-muted-foreground">From marketing to CRM solutions, we provide full-spectrum digital transformation services.</p>
            </div>
          </div>
        </div>
      </section >

      <CallToAction />
      <FooterSection />
    </div >
  );
}
