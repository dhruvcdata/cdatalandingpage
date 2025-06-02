'use client';
import FooterSection from "@/components/footer";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { HeroHeader } from "@/components/hero5-header";

import { Cpu, Zap } from 'lucide-react'



import DataRevivalComponent from "../tog2";
import CallToAction from "@/components/call-to-action";

const members = [
  {
    name: 'Nitin Jain',
    role: 'Founder & CEO',
    avatar: 'https://example.com',
  },

]
type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [

]
const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}
const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))
export default function Home() {
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
                At <span className="text-accent-foreground font-bold">CData Consulting</span>, we specialize in transforming raw data into actionable insights. Our expertise spans across data engineering, AI/ML, digital marketing, and more, helping businesses unlock their full potential.
              </p>
              <p className="text-muted-foreground">
                Whether you're looking to streamline your data pipelines, build scalable platforms, or leverage cutting-edge AI technologies, we provide tailored solutions to meet your unique needs.
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
              <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl to-transparent p-px ">

                <DotLottieReact
                  src="https://lottie.host/ce0e90f8-d790-4b2f-a673-72cba8ec8672/dVcXgTaprK.lottie"
                  loop
                  autoplay
                  width={1606}
                  height={612}
                />

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <DataVisualizationSection /> */}
      <DataRevivalComponent />
      {/* <section className="py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote>
              <p className="text-lg font-medium sm:text-xl md:text-3xl">Words from the founder... </p>

              <div className="mt-12 flex items-center justify-center gap-6">
                <Avatar className="size-12">
                  <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>

                <div className="space-y-1 border-l pl-6">
                  <cite className="font-medium">Nitin Jain</cite>
                  <span className="text-muted-foreground block text-sm">CEO, Cdata Consulting</span>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section> */}

      <section className="py-6">
        <div className="mx-auto max-w-3xl px-3s lg:px-0">


          <section>
            <div className="py-8">
              <div className="mx-auto max-w-6xl px-4">
                <div className="text-center">
                  <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
                  <p className="text-body mt-6">Trusted by the Elite</p>
                </div>
              </div>
            </div>
          </section>
          <br />
          <blockquote className="border-l-4 pl-4">
            <p>As the VP of Data, time was of the essence in establishing a robust data platform for our organization. Working with Nitin J at CData Insights was nothing short of remarkable. Despite tight deadlines, Nitin’s team demonstrated unparalleled expertise and dedication, ensuring the rapid creation and deployment of our data platform on GCP. Their swift action and meticulous attention to detail enabled us to meet our objectives efficiently and effectively. I am immensely grateful for CData’s invaluable contributions and highly recommend their services to anyone seeking rapid and reliable data solutions</p>

            <div className="mt-6 space-y-3">
              <cite className="block font-medium">Alex, VP of Data</cite>
              {/* <img className="h-5 w-fit dark:invert" src="" alt="Nvidia Logo" height="20" width="auto" /> */}
            </div>
          </blockquote>


        </div>
      </section>
      <CallToAction />
      <FooterSection />
    </div>
  );
}
