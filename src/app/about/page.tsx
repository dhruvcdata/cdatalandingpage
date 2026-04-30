'use client';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Cpu, Zap } from 'lucide-react'
import DataRevivalComponent from "../tog2";
import CallToAction from "@/components/call-to-action";

export default function AboutPage() {
  return (
    <div>
      <HeroHeader />
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            Empowering Businesses with Data-Driven Solutions
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                At <span className="text-accent-foreground font-bold">Cdata Consulting</span>, we specialize in transforming raw data into actionable insights. Our expertise spans across data engineering, AI/ML, and cloud platforms, helping businesses unlock their full potential.
              </p>
              <p className="text-muted-foreground">
                Whether you&apos;re looking to streamline your data pipelines, build scalable platforms, or leverage cutting-edge AI technologies, we provide tailored solutions to meet your unique needs.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4" />
                    <h3 className="text-sm font-medium">Fast & Efficient</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We deliver streamlined data solutions that optimize performance and reduce operational costs.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="size-4" />
                    <h3 className="text-sm font-medium">Innovative</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our cutting-edge AI/ML and data visualization tools empower smarter decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-6 sm:mt-0">
              <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl to-transparent p-px">
                <img
                  src="/about3.png"
                  alt="Cdata Consulting team and approach"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DataRevivalComponent />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
          </div>
          <blockquote className="border-l-4 border-blue-500 pl-6">
            <p className="text-muted-foreground leading-relaxed">
              &ldquo;Working with Nitin and the Cdata team was nothing short of remarkable. Despite tight deadlines, they demonstrated unparalleled expertise and dedication, ensuring the rapid creation and deployment of our data platform on GCP. Their swift action and meticulous attention to detail enabled us to meet our objectives efficiently.&rdquo;
            </p>
            <div className="mt-6">
              <cite className="block font-medium not-italic">Alex</cite>
              <span className="text-sm text-muted-foreground">VP of Data, Enterprise SaaS Company</span>
            </div>
          </blockquote>
        </div>
      </section>

      <CallToAction />
      <FooterSection />
    </div>
  );
}
