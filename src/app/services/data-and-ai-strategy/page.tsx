'use client';
import React, { useState } from 'react';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import {
  Activity,
  BarChart,
  LineChart,
  ClipboardList,
  Database,
  Shield,
  Clock,
  ArrowRightLeft,
  Server,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function DataAndAIStrategyPage() {
  // State for Solutions component
  type SolutionKey = 'DataStrategy' | 'AIConsulting' | 'CloudAdoption' | 'DataGovernance';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('DataStrategy');

  const solutions = [
    'DataStrategy',
    'AIConsulting',
    'CloudAdoption',
    'DataGovernance'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'DataStrategy': {
      title: 'Data Strategy',
      description: 'Develop a comprehensive data strategy that aligns with your business goals and unlocks the full potential of your data assets.',
      points: [
        'Assessment of current data infrastructure and capabilities',
        'Roadmap for data-driven decision-making and innovation',
        'Alignment of data strategy with business objectives',
        'Implementation of scalable and future-proof data architectures',
        'Continuous monitoring and optimization of data initiatives'
      ],
      color: 'bg-blue-500'
    },
    'AIConsulting': {
      title: 'AI Consulting',
      description: 'Leverage our expertise to build a robust AI strategy that drives innovation and competitive advantage.',
      points: [
        'Identification of high-impact AI use cases',
        'Development of AI adoption roadmaps',
        'Integration of AI with existing business processes',
        'Training and upskilling of your workforce',
        'Governance frameworks for ethical and responsible AI'
      ],
      color: 'bg-blue-500'
    },
    'CloudAdoption': {
      title: 'Cloud Adoption',
      description: 'Accelerate your cloud adoption journey with a strategy that ensures scalability, security, and cost-efficiency.',
      points: [
        'Assessment of cloud readiness and migration opportunities',
        'Development of multi-cloud or hybrid cloud strategies',
        'Optimization of cloud costs and resource allocation',
        'Implementation of cloud-native architectures',
        'Ongoing cloud management and optimization'
      ],
      color: 'bg-blue-500'
    },
    'DataGovernance': {
      title: 'Data Governance',
      description: 'Establish a robust data governance framework to ensure data quality, security, and compliance.',
      points: [
        'Development of data governance policies and standards',
        'Implementation of data quality management processes',
        'Ensuring compliance with regulatory requirements',
        'Data security and privacy frameworks',
        'Continuous monitoring and improvement of data governance'
      ],
      color: 'bg-blue-500'
    }
  };

  return (
    <div>
      <HeroHeader />

      {/* Hero Section */}
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl  from-blue-500 to-purple-500 bg-clip-text text-trrent">Data & AI Strategy Services</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Transform your business with a data and AI strategy that drives innovation, efficiency, and growth.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base ">
                  <Link href="/Contact">
                    <span className="text-nowrap">Get Started</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg px-5 text-base ">
                  <Link href="#cta">
                    <span className="text-nowrap">Schedule a consultation</span>
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
              src="/videos/data.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Empower Your Business with Data & AI</h2>
            <div className="space-y-6">
              <p>Data and AI are transforming industries by enabling smarter decision-making, automating processes, and uncovering hidden insights. Our comprehensive strategy services help you harness the power of data and AI to drive innovation and growth.</p>

              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5 bg-blue-500 text-white hover:bg-blue-700">
                <Link href="#">
                  <span>View Our Approach</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background md:py-10">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-indigo-500 bg-clip-text text-transparent">Our Data & AI Strategy Advantage</h2>
            <p>We deliver cutting-edge data and AI strategies that drive real business value.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <ArrowRightLeft className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Strategic Alignment</h3>
              </div>
              <p>Align your data and AI initiatives with your business goals for maximum impact.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <CheckCircle className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Scalable Solutions</h3>
              </div>
              <p>Our strategies are designed to scale with your business needs.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Security</h3>
              </div>
              <p>We prioritize data security and compliance in all our strategies.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <BarChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Real-Time Insights</h3>
              </div>
              <p>Get real-time insights and predictions to make faster, smarter decisions.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Clock className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Accelerated Innovation</h3>
              </div>
              <p>Our solutions accelerate innovation and time-to-market for new products and services.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <AlertTriangle className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Custom Solutions</h3>
              </div>
              <p>We build custom data and AI strategies tailored to your specific business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-16 bg-background text-white">
        <div className="max-w-6xl mx-auto p-6 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-background z-0"></div>
          <div className="relative z-10">
            <div className="mb-10">
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-gray-800 text-blue-500 mb-2">Strategy Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Tailored Data & AI Strategies</h2>
              <p className="text-xl text-blue-200">Our strategies are designed to address your unique challenges and drive business growth.</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setActiveSolution(solution as SolutionKey)}
                  className={`py-3 px-6 rounded-full transition-all duration-300 ${activeSolution === solution
                    ? `bg-blue-500 text-white shadow-lg border border-gray-700`
                    : 'bg-background text-blue-200 hover:bg-blue-800 border border-gray-700'}`}
                >
                  {solution === 'DataStrategy' ? 'Data Strategy' :
                    solution === 'AIConsulting' ? 'AI Consulting' :
                      solution === 'CloudAdoption' ? 'Cloud Adoption' : 'Data Governance'}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 pl-3 border-blue-400">
                  {solutionContent[activeSolution].title}
                </h3>
                <p className="text-blue-200 mb-6">
                  {solutionContent[activeSolution].description}
                </p>
                <div className="space-y-4 mb-8">
                  {solutionContent[activeSolution].points.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-1 rounded-full bg-blue-500 text-white mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-blue-100">{point}</p>
                    </div>
                  ))}
                </div>
                <Link href="/Contact">
                  <Button className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300 border hover:bg-blue-700">
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    Explore Solution Details
                  </Button>
                </Link>
              </div>

              <div className="md:w-1/2 relative">
                <div className="absolute -inset-0.5 rounded-lg blur opacity-75"></div>
                {/* <img
                  src="/data-ai-strategy.png"
                  alt="Data & AI Strategy visualization"
                  className="relative rounded-lg shadow-2xl"
                /> */}
                <DotLottieReact
                  src="https://lottie.host/ce0e90f8-d790-4b2f-a673-72cba8ec8672/dVcXgTaprK.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-16 bg-background mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Our Process</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-500">Proven Strategy Methodology</h2>
            <p className="max-w-2xl mx-auto">Our structured approach ensures successful data and AI strategy implementations every time.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Database className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Discover & Assess</h3>
              </div>
              <p className="mb-4">Comprehensive analysis of your business needs and data infrastructure.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <LineChart className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Plan & Design</h3>
              </div>
              <p className="mb-4">Creation of a detailed strategy with timelines, resource allocation, and risk mitigation plans.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Server className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Execute & Validate</h3>
              </div>
              <p className="mb-4">Implementation of the strategy with continuous validation and quality assurance.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Activity className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Optimize & Support</h3>
              </div>
              <p className="mb-4">Post-implementation performance tuning, knowledge transfer, and ongoing optimization support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-16 bg-background rounded-3xl mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Success Stories</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-500">Real-World Strategy Impact</h2>
            <p className="max-w-2xl mx-auto">See how our data and AI strategies have transformed organizations like yours.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Retail Industry</h3>
              </div>
              <p className="mb-4">Developed a data strategy that improved inventory management and increased sales by 20%.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Enhanced customer experience and operational efficiency</p>
              </div>
              {/* <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View case study</span>
                  <ChevronRight className="size-3" />
                </Button>
              </Link> */}
            </div>
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Healthcare Provider</h3>
              </div>
              <p className="mb-4">Implemented an AI strategy that improved diagnostic accuracy and reduced operational costs by 15%.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Improved patient outcomes and reduced costs</p>
              </div>
              {/* <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View case study</span>
                  <ChevronRight className="size-3" />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
            <div className="text-center lg:text-left">
              <div className="inline-block rounded-full bg-background border border-gray-800 px-3 py-1 text-sm font-medium text-blue-500 mb-4">Got Questions?</div>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-blue-500">Frequently Asked Questions</h2>
              <p>Common questions about data and AI strategy projects.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How do I get started with a data and AI strategy?</h3>
                <p className="text-muted-foreground mt-4">We begin with a comprehensive assessment of your business needs and data infrastructure to identify the best opportunities.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What industries do you serve?</h3>
                <p className="text-muted-foreground mt-4">We serve a wide range of industries, including retail, healthcare, finance, manufacturing, and more.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How do you ensure strategy success?</h3>
                <p className="text-muted-foreground mt-4">We use rigorous planning, execution, and validation frameworks to ensure your strategy delivers measurable results.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can you integrate with existing systems?</h3>
                <p className="text-muted-foreground mt-4">Yes, we specialize in integrating data and AI strategies with your existing infrastructure and business systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20   text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Business with Data & AI?</h2>
          <p className="max-w-2xl mx-auto mb-10">Let's discuss your data and AI strategy needs and develop a customized plan that drives innovation and growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact">
              <Button className="bg-blue-500 text-white hover:bg-blue-400 py-3 px-6 rounded-full font-medium">
                Request Strategy Assessment
              </Button>
            </a>
            <a href="/case-studies">
              {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                Explore Strategy Solutions
              </Button> */}
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}