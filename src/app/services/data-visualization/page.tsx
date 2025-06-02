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
  PieChart,
  Eye,
  LayoutDashboard,
  TrendingUp,
  Filter,
  Share2
} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function DataVisualizationPage() {
  // State for Solutions component
  type SolutionKey = 'Dashboards' | 'Reports' | 'AdvancedAnalytics' | 'DataStorytelling';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('Dashboards');

  const solutions = [
    'Dashboards',
    'Reports',
    'AdvancedAnalytics',
    'DataStorytelling'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'Dashboards': {
      title: 'Interactive Dashboards',
      description: 'Create dynamic, real-time dashboards that provide actionable insights and enable data-driven decision-making across your organization.',
      points: [
        'Customizable and user-friendly interfaces',
        'Real-time data integration and updates',
        'Interactive visualizations and drill-down capabilities',
        'Role-based access control and security',
        'Integration with multiple data sources'
      ],
      color: 'bg-blue-500'
    },
    'Reports': {
      title: 'Automated Reporting',
      description: 'Generate automated, scheduled reports that deliver key metrics and insights directly to stakeholders, saving time and improving accuracy.',
      points: [
        'Custom report templates and layouts',
        'Automated data extraction and processing',
        'Scheduled delivery via email or cloud storage',
        'Interactive and exportable report formats',
        'Integration with BI tools and platforms'
      ],
      color: 'bg-blue-500'
    },
    'AdvancedAnalytics': {
      title: 'Advanced Analytics',
      description: 'Leverage advanced analytics and machine learning to uncover hidden patterns, trends, and opportunities in your data.',
      points: [
        'Predictive and prescriptive analytics',
        'Machine learning model integration',
        'Custom analytics workflows and pipelines',
        'Visualization of complex data relationships',
        'Real-time insights and alerts'
      ],
      color: 'bg-blue-500'
    },
    'DataStorytelling': {
      title: 'Data Storytelling',
      description: 'Transform raw data into compelling narratives that communicate insights effectively and drive decision-making.',
      points: [
        'Custom data visualization design',
        'Interactive storytelling tools',
        'Integration with multimedia content',
        'Audience-specific narrative tailoring',
        'Collaborative storytelling platforms'
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
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl bgblue-500 from-blue-500 to-purple-500 bg-clip-text text-trasparent">Unlock Insights with Data Visualization</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Transform your data into actionable insights with powerful, interactive visualizations and analytics.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base">
                  <Link href="#cta">
                    <span className="text-nowrap">Start Your Visualization Journey</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg px-5 text-base ">
                  <Link href="#Contact">
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
              className="size-full -scale-x-100 object-cover opacity-50 dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="/videos/dv.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background to-indigo-900 psx-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Visualize Your Data for Impact</h2>
            <div className="space-y-6">
              <p>Data visualization is the key to unlocking the full potential of your data. We create intuitive, interactive visualizations that make complex data easy to understand and act upon.</p>

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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-indigo-500 bg-clip-text text-transparent">Our Data Visualization Expertise</h2>
            <p>We deliver powerful, interactive visualizations that drive insights and decision-making.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <PieChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Interactive Dashboards</h3>
              </div>
              <p>Create dynamic, real-time dashboards that provide actionable insights and enable data-driven decision-making.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Eye className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Automated Reporting</h3>
              </div>
              <p>Generate automated, scheduled reports that deliver key metrics and insights directly to stakeholders.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <LayoutDashboard className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Advanced Analytics</h3>
              </div>
              <p>Leverage advanced analytics and machine learning to uncover hidden patterns and trends in your data.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <TrendingUp className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Storytelling</h3>
              </div>
              <p>Transform raw data into compelling narratives that communicate insights effectively.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Filter className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Custom Visualizations</h3>
              </div>
              <p>Design custom visualizations tailored to your specific business needs and data.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Share2 className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Collaborative Tools</h3>
              </div>
              <p>Enable collaboration and sharing of insights across teams with interactive tools.</p>
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
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-gray-800 text-blue-500 mb-2">Data Visualization Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Tailored For Your Data Needs</h2>
              <p className="text-xl text-blue-200">Every data visualization project is unique. Our specialized solutions address your specific challenges and objectives.</p>
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
                  {solution === 'Dashboards' ? 'Interactive Dashboards' :
                    solution === 'Reports' ? 'Automated Reporting' :
                      solution === 'AdvancedAnalytics' ? 'Advanced Analytics' : 'Data Storytelling'}
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
                  src="/data-visualization.png"
                  alt="Data visualization solution visualization"
                  className="relative rounded-lg shadow-2xl"
                /> */}
                <DotLottieReact
                  src="https://lottie.host/03a90c45-87d6-4a91-b57e-12b75e284770/UxG03qf8NJ.lottie"
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-500">Proven Data Visualization Methodology</h2>
            <p className="max-w-2xl mx-auto">Our structured approach ensures successful data visualization projects every time.</p>
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
              <p className="mb-4">Creation of a detailed data visualization strategy with timelines, resource allocation, and risk mitigation plans.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Server className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Execute & Validate</h3>
              </div>
              <p className="mb-4">Implementation of data visualization solutions with continuous validation, automated testing, and quality assurance.</p>
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-00">Real-World Data Visualization Impact</h2>
            <p className="max-w-2xl mx-auto">See how our data visualization expertise has transformed organizations like yours.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Global Retailer</h3>
              </div>
              <p className="mb-4">Implemented interactive dashboards that unified data from 50+ sources, enabling real-time inventory management and personalized customer experiences.</p>
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
              <p className="mb-4">Built a secure data visualization platform that enabled advanced analytics on patient data while ensuring compliance with HIPAA regulations.</p>
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
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-lue-500">Frequently Asked Questions</h2>
              <p>Common questions about data visualization projects.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">What is data visualization?</h3>
                <p className="text-muted-foreground mt-4">Data visualization is the process of representing data in graphical or pictorial formats to make it easier to understand and analyze.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Why is data visualization important?</h3>
                <p className="text-muted-foreground mt-4">Data visualization helps businesses make sense of complex data, identify trends, and make informed decisions quickly.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What tools do you use for data visualization?</h3>
                <p className="text-muted-foreground mt-4">We use a variety of tools, including Tableau, Power BI, D3.js, and custom-built solutions tailored to your needs.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How do you ensure data accuracy in visualizations?</h3>
                <p className="text-muted-foreground mt-4">We implement data validation and quality checks to ensure that visualizations are based on accurate and reliable data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20  text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Data into Insights?</h2>
          <p className="max-w-2xl mx-auto mb-10">Let's discuss your data visualization needs and develop a customized strategy that drives business value.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact">
              <Button className="bg-blue-500 text-white hover:bg-blue-400 py-3 px-6 rounded-full font-medium">
                Request Data Visualization Assessment
              </Button>
            </a>
            {/* <a href="/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                Explore Data Visualization Solutions
              </Button>
            </a> */}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}