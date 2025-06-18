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
  AlertTriangle,
  Cloud,
  Cpu,
  Settings,
  Code,
  Layers,
  Box
} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Head from 'next/head';

export default function DataPlatformsPage() {
  // State for Solutions component
  type SolutionKey = 'DataInfrastructure' | 'CloudPlatforms' | 'DataIntegration' | 'PlatformModernization';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('DataInfrastructure');

  const solutions = [
    'DataInfrastructure',
    'CloudPlatforms',
    'DataIntegration',
    'PlatformModernization'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'DataInfrastructure': {
      title: 'Data Infrastructure',
      description: 'Build and manage robust data infrastructure that supports your organization’s data needs, from storage to processing and analytics.',
      points: [
        'Scalable and secure data storage solutions',
        'High-performance data processing frameworks',
        'Real-time data streaming capabilities',
        'Integration with existing systems and tools',
        '24/7 monitoring and support'
      ],
      color: 'bg-blue-500'
    },
    'CloudPlatforms': {
      title: 'Cloud Data Platforms',
      description: 'Leverage the power of cloud platforms to create flexible, scalable, and cost-effective data solutions for your business.',
      points: [
        'Migration to cloud platforms (AWS, Azure, GCP)',
        'Cloud-native data storage and processing',
        'Serverless data pipelines and workflows',
        'Cost optimization and resource management',
        'Hybrid and multi-cloud solutions'
      ],
      color: 'bg-blue-500'
    },
    'DataIntegration': {
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources into a unified platform, enabling better decision-making and analytics.',
      points: [
        'ETL/ELT pipeline development',
        'Real-time data synchronization',
        'API-based data integration',
        'Data quality and validation frameworks',
        'Integration with BI and analytics tools'
      ],
      color: 'bg-blue-500'
    },
    'PlatformModernization': {
      title: 'Platform Modernization',
      description: 'Modernize legacy data platforms to improve performance, reduce costs, and unlock new capabilities for your business.',
      points: [
        'Assessment of legacy systems and architecture',
        'Migration to modern data platforms',
        'Data model transformation and optimization',
        'Implementation of cloud-native technologies',
        'Knowledge transfer and training for your team'
      ],
      color: 'bg-blue-500'
    }
  };

  return (
    <div>
      <Head>
        <title>Top Customer Data & Digital Asset Platforms | GTA & Detroit | CData Consultancy</title>

        <meta name="description" content="Discover the best customer data platform in GTA, top digital asset management in Detroit, and expert solutions using Google Cloud database technology." />
        <meta name="author" content="CData Consultancy" />
        <meta name="keywords" content="Customer Data Platform, Digital Asset Management, GTA, Detroit, CData Consultancy" />

        <meta property="og:title" content="Top Customer Data & Digital Asset Platforms | GTA & Detroit | CData Consultancy" />
        <meta property="og:description" content="Discover the best customer data platform in GTA, top digital asset management in Detroit, and expert solutions using Google Cloud database technology." />
        <meta property="og:url" content="https://cdatainsights.com/services/data-platform" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CData Consultancy" />
        <meta property="og:image" content="https://cdatainsights.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Customer Data & Digital Asset Platforms | GTA & Detroit | CData Consultancy" />
        <meta name="twitter:description" content="Discover the best customer data platform in GTA, top digital asset management in Detroit, and expert solutions using Google Cloud database technology." />
        <meta name="twitter:url" content="https://cdatainsights.com/services/data-platform" />
        <meta name="twitter:image" content="https://cdatainsights.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader />

      {/* Hero Section */}
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl ple-500 bg-clip-text text-transarent">Empower Your Data with Modern Platforms</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Build, manage, and optimize data platforms that drive innovation and business growth.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base ">
                  <Link href="#cta">
                    <span className="text-nowrap">Start Your Data Journey</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg px-5 text-base ">
                  <Link href="/Contact">
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
              src="/videos/dp.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background  px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Build the Foundation for Data-Driven Success</h2>
            <div className="space-y-6">
              <p>Data platforms are the backbone of modern data-driven organizations. We design, build, and manage data platforms that enable seamless data access, processing, and analytics.</p>

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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-indigo-500 bg-clip-text text-transparent">Our Data Platform Expertise</h2>
            <p>We deliver robust, scalable, and efficient data platforms that power your business intelligence and analytics.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Cloud className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Cloud Platforms</h3>
              </div>
              <p>Leverage cloud platforms for scalable, cost-effective data storage and processing.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Cpu className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Infrastructure</h3>
              </div>
              <p>Build and manage robust data infrastructure that supports your organization’s needs.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Settings className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Integration</h3>
              </div>
              <p>Seamlessly integrate data from multiple sources into a unified platform.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Code className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Platform Modernization</h3>
              </div>
              <p>Modernize legacy data platforms to improve performance and reduce costs.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Layers className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Governance</h3>
              </div>
              <p>Implement data governance frameworks to ensure data quality and compliance.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Box className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Scalable Solutions</h3>
              </div>
              <p>Design scalable data platforms that grow with your business needs.</p>
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
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-gray-800 text-blue-500 mb-2">Data Platform Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Tailored For Your Data Needs</h2>
              <p className="text-xl text-blue-200">Every data platform project is unique. Our specialized solutions address your specific challenges and objectives.</p>
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
                  {solution === 'DataInfrastructure' ? 'Data Infrastructure' :
                    solution === 'CloudPlatforms' ? 'Cloud Platforms' :
                      solution === 'DataIntegration' ? 'Data Integration' : 'Platform Modernization'}
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
                  src="/data-platforms.png"
                  alt="Data platforms solution visualization"
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-500">Proven Data Platform Methodology</h2>
            <p className="max-w-2xl mx-auto">Our structured approach ensures successful data platform projects every time.</p>
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
              <p className="mb-4">Comprehensive analysis of your current data landscape, technical requirements, and business objectives.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <LineChart className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Plan & Design</h3>
              </div>
              <p className="mb-4">Creation of a detailed data platform strategy with timelines, resource allocation, and risk mitigation plans.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Server className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Execute & Validate</h3>
              </div>
              <p className="mb-4">Implementation of data platform solutions with continuous validation, automated testing, and quality assurance.</p>
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 tex-blue-500">Real-World Data Platform Impact</h2>
            <p className="max-w-2xl mx-auto">See how our data platform expertise has transformed organizations like yours.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Global Retailer</h3>
              </div>
              <p className="mb-4">Implemented a modern data platform that unified data from 50+ sources, enabling real-time inventory management and personalized customer experiences.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">30% increase in operational efficiency</p>
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
              <p className="mb-4">Built a secure data platform that enabled advanced analytics on patient data while ensuring compliance with HIPAA regulations.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">40% reduction in data processing time</p>
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
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-bue-500">Frequently Asked Questions</h2>
              <p>Common questions about data platform projects.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">What is a data platform?</h3>
                <p className="text-muted-foreground mt-4">A data platform is an integrated system that enables the collection, storage, processing, and analysis of data to support business operations and decision-making.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Why is a data platform important?</h3>
                <p className="text-muted-foreground mt-4">A data platform provides the foundation for data-driven decision-making, enabling businesses to access, analyze, and act on data efficiently.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What are the benefits of cloud data platforms?</h3>
                <p className="text-muted-foreground mt-4">Cloud data platforms offer scalability, flexibility, and cost-efficiency, making them ideal for modern data-driven organizations.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How do you ensure data security in a data platform?</h3>
                <p className="text-muted-foreground mt-4">We implement robust security measures, including encryption, access controls, and compliance with industry standards, to protect your data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20  text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Build Your Data Platform?</h2>
          <p className="max-w-2xl mx-auto mb-10">Let's discuss your data platform needs and develop a customized strategy that drives business value.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact">
              <Button className="bg-blue-500 text-white hover:bg-blue-400 py-3 px-6 rounded-full font-medium">
                Request Data Platform Assessment
              </Button>
            </a>
            {/* <a href="/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                Explore Data Platform Solutions
              </Button>
            </a> */}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}