'use client';
import React, { useState } from 'react';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Building, BarChart, LineChart, ClipboardList, Home, Shield, Clock, Database, TrendingUp } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function RealEstatePage() {
  // State for Solutions component
  type SolutionKey = 'PropertyAnalytics' | 'MarketIntelligence' | 'InvestmentOptimization' | 'CustomerExperience';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('PropertyAnalytics');

  const solutions = [
    'PropertyAnalytics',
    'MarketIntelligence',
    'InvestmentOptimization',
    'CustomerExperience'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'PropertyAnalytics': {
      title: 'Property Performance Analytics',
      description: 'Gain comprehensive visibility into your portfolio performance with data-driven insights that optimize property valuations, improve tenant satisfaction, and maximize ROI.',
      points: [
        'Analyze property performance metrics across diverse portfolios to identify optimization opportunities',
        'Track maintenance history, tenant turnover, and cost patterns to predict future needs',
        'Implement IoT-connected building systems for real-time environmental and occupancy monitoring',
        'Optimize energy usage and sustainability metrics to reduce costs and meet ESG goals',
        'Generate automated valuation models based on comparable properties and market conditions'
      ],
      color: 'bg-blue-500'
    },
    'MarketIntelligence': {
      title: 'Market Intelligence',
      description: 'Stay ahead of market trends with predictive analytics that identify emerging opportunities, evaluate neighborhood dynamics, and guide strategic investment decisions.',
      points: [
        'Access comprehensive market analytics including pricing trends, inventory levels, and days-on-market',
        'Evaluate neighborhood growth potential with demographic and economic indicator analysis',
        'Monitor zoning changes and development patterns to identify emerging opportunities',
        'Track competitive properties and rental rates across your target markets',
        'Generate location-based analytics to optimize site selection for new developments'
      ],
      color: 'bg-blue-500'
    },
    'InvestmentOptimization': {
      title: 'Investment Portfolio Optimization',
      description: 'Maximize returns across your investment portfolio through advanced analytics that optimize acquisition, development, and disposition strategies.',
      points: [
        'Build sophisticated investment models that account for market cycles and economic indicators',
        'Develop risk-adjusted return profiles for potential acquisitions and developments',
        'Optimize capital allocation across different property types and geographic markets',
        'Create scenario models to evaluate different economic conditions and their impact',
        'Identify optimal timing for property disposition based on market analysis'
      ],
      color: 'bg-blue-500'
    },
    'CustomerExperience': {
      title: 'Customer Experience Intelligence',
      description: 'Transform client and tenant relationships with data-driven insights that enhance satisfaction, improve retention, and drive referrals.',
      points: [
        'Track and analyze tenant satisfaction metrics to identify improvement opportunities',
        'Implement AI-powered chatbots for improved tenant communication and service requests',
        'Analyze client journey touchpoints to optimize the buying and leasing experience',
        'Develop personalized marketing campaigns based on behavioral data and preferences',
        'Create predictive models to identify at-risk tenants before lease expiration'
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
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl bg-blue600 from-blue-500 to-purple-600 bg-clip-text ext-transparent">Transform Real Estate with Data Intelligence</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Unlock actionable insights from your property data to maximize returns, optimize operations, and make smarter investment decisions.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base">
                  <Link href="#cta">
                    <span className="text-nowrap">Get Started</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg px-5 text-base  ">
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
              className="size-full -scale-x-100 object-cover opacity-30  dark:invert-0 lg:opacity-35"
              src="/videos/real.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background to-indigo-900 px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Data-Powered Real Estate for Better Investment Decisions</h2>
            <div className="space-y-6">
              <p>In today's competitive property market, data is the foundation of successful investment strategies. Our advanced analytics solutions help real estate developers, property managers, and investment firms transform raw data into actionable insights that maximize returns, optimize operations, and guide strategic decisions.</p>

              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5 bg-blue-500 text-white hover:bg-blue-500">
                <Link href="#">
                  <span>Learn More</span>
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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-600 from-blue-500 to-purple-600 bg-clip-text text-transparent">Comprehensive Real Estate Data Solutions</h2>
            <p>From property analytics to investment optimization, our platform provides the insights you need to improve portfolio performance and business outcomes.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-blue-500 p-3">
                  <Building className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Property Analytics</h3>
              </div>
              <p>Transform property data into actionable insights that improve valuations, operations, and tenant satisfaction.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-blue-500 p-3">
                  <TrendingUp className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Market Intelligence</h3>
              </div>
              <p>Stay ahead of market trends with predictive analytics that identify emerging opportunities and risks.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-blue-500 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Risk Management</h3>
              </div>
              <p>Identify and mitigate investment risks with advanced predictive models and scenario analysis.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-blue-500 p-3">
                  <BarChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Portfolio Management</h3>
              </div>
              <p>Optimize your property portfolio with data-driven insights that maximize returns and minimize risk.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-blue-500 p-3">
                  <Clock className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Operational Efficiency</h3>
              </div>
              <p>Streamline property management and leasing operations with intelligent workflow optimization.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-blue-500 p-3">
                  <LineChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Predictive Analytics</h3>
              </div>
              <p>Leverage AI to predict market trends, property values, and tenant behaviors to drive better decisions.</p>
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
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-blue-500 text-blue-500 mb-2">Tailored Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Real Estate Data Transformation</h2>
              <p className="text-xl text-indigo-200">Driving better investment outcomes through innovative data strategies and advanced analytics.</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setActiveSolution(solution as SolutionKey)}
                  className={`py-3 px-6 rounded-full transition-all duration-300 ${activeSolution === solution
                    ? `bg-blue-500 text-white shadow-lg border border-blue-500`
                    : 'bg-backgroiund text-indigo-200 hover:bg-indigo-800 border border-blue-500'}`}
                >
                  {solution === 'PropertyAnalytics' ? 'Property Analytics' :
                    solution === 'MarketIntelligence' ? 'Market Intelligence' :
                      solution === 'InvestmentOptimization' ? 'Investment Optimization' : 'Customer Experience'}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 pl-3 border-blue-500">
                  {solutionContent[activeSolution].title}
                </h3>
                <p className="text-indigo-200 mb-6">
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
                      <p className="text-indigo-100">{point}</p>
                    </div>
                  ))}
                </div>
                <Link href="/Contact">
                  <Button className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300 border hover:bg-blue-500">
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
                <DotLottieReact
                  src="https://lottie.host/ab050bc0-d03d-4364-8e39-1d96027084fc/FAPGbi2Flh.lottie"
                  loop
                  autoplay
                />
                {/* <img
                  src="/real-estate-analytics.png"
                  alt="Real estate data solutions in action"
                  className="relative rounded-lg shadow-2xl"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-16 bg-background rounded-3xl mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Real-World Impact</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-indgo-600">Success Stories</h2>
            <p className="max-w-2xl mx-auto">See how our data solutions are transforming real estate organizations.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-blue-500 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-blue-500 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">National Property Group</h3>
              </div>
              <p className="mb-4">Implemented a predictive analytics platform that increased portfolio ROI by 17% through optimized property acquisitions and disposition timing.</p>
              <div className="bg-background border border-blue-500 p-3 rounded-lg">
                <p className="text-sm text-blue-500 font-medium">35% improvement in property valuation accuracy</p>
              </div>
              {/* <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View more details</span>
                  <ChevronRight className="size-3" />
                </Button>
              </Link> */}
            </div>
            <div className="bg-background border-2 border-blue-500 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-blue-500 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Urban Development Firm</h3>
              </div>
              <p className="mb-4">Used market intelligence to identify high-potential development zones, resulting in 22% higher returns on new projects and reduced vacancy rates.</p>
              <div className="bg-background border border-blue-500 p-3 rounded-lg">
                <p className="text-sm text-blue-500 font-medium">40% faster tenant acquisition process</p>
              </div>
              {/* <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View more details</span>
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
              <div className="inline-block rounded-full bg-background border border-blue-500 px-3 py-1 text-sm font-medium text-blue-500 mb-4">Got Questions?</div>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-inigo-600">Frequently Asked Questions</h2>
              <p>Common questions about real estate data analytics.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How do you integrate with our existing property management systems?</h3>
                <p className="text-muted-foreground mt-4">Our platform offers seamless integration with all major property management systems, ensuring you can leverage existing infrastructure while enhancing data capabilities.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can your analytics help with ESG compliance and reporting?</h3>
                <p className="text-muted-foreground mt-4">Yes, our solutions include comprehensive ESG tracking, reporting, and optimization tools to help you meet sustainability goals and compliance requirements.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What ROI can we expect from real estate analytics?</h3>
                <p className="text-muted-foreground mt-4">Clients typically see ROI through improved property valuations, optimized portfolio performance, reduced vacancies, and enhanced tenant satisfaction. We'll work with you to identify and track specific metrics.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How quickly can we implement these real estate solutions?</h3>
                <p className="text-muted-foreground mt-4">Implementation timelines vary based on portfolio size and complexity, but our modular approach allows for rapid deployment of initial capabilities with progressive enhancement over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20 text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Real Estate Data?</h2>
          <p className="max-w-2xl mx-auto mb-10">Partner with us to unlock the full potential of your property portfolio data, improving returns and operational excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact">
              <Button className="bg-blue-500 text-white hover:bg-blue-400 py-3 px-6 rounded-full font-medium">
                Get Your Free Assessment
              </Button>
            </a>
            {/* <a href="/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                View Case Studies
              </Button>
            </a> */}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}