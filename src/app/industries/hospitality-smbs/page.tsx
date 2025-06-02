'use client';
import React, { useState } from 'react';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Activity, BarChart, LineChart, ClipboardList, Users, Shield, Clock, Database, UserCheck, Building, Star, Truck, DollarSign } from 'lucide-react';

export default function HospitalitySMBsPage() {
  // State for Solutions component
  type SolutionKey = 'GuestExperience' | 'OperationalEfficiency' | 'MarketIntelligence' | 'RevenueOptimization';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('GuestExperience');

  const solutions = [
    'GuestExperience',
    'OperationalEfficiency',
    'MarketIntelligence',
    'RevenueOptimization'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'GuestExperience': {
      title: 'Guest Experience Excellence',
      description: 'Transform guest satisfaction with data-driven insights that enable personalized experiences, improve service delivery, and build lasting customer loyalty.',
      points: [
        'Create comprehensive guest profiles by integrating data from PMS, CRM, and social platforms',
        'Enable personalized recommendations and offers based on guest preferences and behavior',
        'Optimize guest journey touchpoints with sentiment analysis and feedback intelligence',
        'Improve engagement through targeted communication and loyalty program optimization',
        'Track satisfaction trends for continuous service improvement and retention'
      ],
      color: 'bg-blue-500'
    },
    'OperationalEfficiency': {
      title: 'Operational Efficiency',
      description: 'Streamline hospitality operations and resource allocation through intelligent workforce management, inventory optimization, and real-time performance tracking.',
      points: [
        'Reduce wait times and optimize staff scheduling with demand forecasting systems',
        'Improve resource utilization with AI-powered occupancy prediction and staff allocation',
        'Automate inventory and supply chain management for just-in-time procurement',
        'Identify service bottlenecks with process mining and operational analytics',
        'Optimize energy usage and facility management with IoT sensor integration'
      ],
      color: 'bg-blue-500'
    },
    'MarketIntelligence': {
      title: 'Market Intelligence & Competitive Analysis',
      description: 'Gain critical market insights to stay competitive, identify emerging trends, and make strategic decisions that position your business for sustainable growth.',
      points: [
        'Monitor competitor pricing and promotions in real-time for dynamic rate adjustments',
        'Analyze market segments and identify untapped opportunities for targeted marketing',
        'Track industry trends and consumer behavior shifts with predictive analytics',
        'Generate comprehensive market reports with visualized competitive positioning',
        'Leverage social listening and sentiment analysis for reputation management'
      ],
      color: 'bg-blue-500'
    },
    'RevenueOptimization': {
      title: 'Revenue Optimization',
      description: 'Maximize profitability with advanced analytics that optimize pricing strategies, identify upsell opportunities, and enhance distribution channel performance.',
      points: [
        'Implement dynamic pricing models based on demand forecasting and market conditions',
        'Identify high-value customer segments for personalized upsell and cross-sell initiatives',
        'Optimize distribution channel mix for maximum revenue and minimal commission costs',
        'Analyze booking patterns and cancellation data to refine revenue management strategies',
        'Forecast seasonal demand fluctuations for proactive business planning'
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
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl bg-blu-500 from-blue-500 to-purple-500 bg-clip-text tet-transparent">Elevate Hospitality & SMBs with Data Intelligence</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Unlock actionable insights from your hospitality and business data to enhance guest experiences, optimize operations, and drive sustainable growth.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base ">
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
              src="/videos/smb.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background to-indigo-900 px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Data-Powered Hospitality for Exceptional Guest Experiences</h2>
            <div className="space-y-6">
              <p>In today's competitive hospitality landscape, data is the key to exceptional service and business growth. Our advanced analytics solutions help hotels, restaurants, entertainment venues, and small businesses transform raw data into actionable insights that enhance guest experiences, optimize operations, and maximize revenue.</p>

              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5 bg-blue-500 text-white hover:bg-blue-700">
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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-indigo-500 bg-clip-text text-transparent">Comprehensive Hospitality & SMB Solutions</h2>
            <p>From guest analytics to revenue management, our platform provides the insights you need to improve service quality and business performance.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Users className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Guest Analytics</h3>
              </div>
              <p>Transform guest data into actionable insights that enhance personalization and drive loyalty.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Star className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Reputation Management</h3>
              </div>
              <p>Monitor and analyze feedback across platforms to improve service quality and online reputation.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Security</h3>
              </div>
              <p>Ensure guest data protection and regulatory compliance with our specialized security solutions.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <BarChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Revenue Management</h3>
              </div>
              <p>Optimize pricing and distribution strategies to maximize revenue and occupancy rates.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Clock className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Operational Efficiency</h3>
              </div>
              <p>Streamline staffing, inventory, and resource allocation with data-driven insights.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <LineChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Market Intelligence</h3>
              </div>
              <p>Leverage competitive analysis and market trends to inform strategic business decisions.</p>
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
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-gray-800 text-blue-500 mb-2">Tailored Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Hospitality Data Transformation</h2>
              <p className="text-xl text-blue-200">Driving exceptional guest experiences and business growth through innovative data strategies.</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setActiveSolution(solution as SolutionKey)}
                  className={`py-3 px-6 rounded-full transition-all duration-300 ${activeSolution === solution
                    ? `bg-blue-500 text-white shadow-lg border border-gray-700`
                    : 'bg-backgroiund text-blue-200 hover:bg-blue-800 border border-gray-700'}`}
                >
                  {solution === 'GuestExperience' ? 'Guest Experience' :
                    solution === 'OperationalEfficiency' ? 'Operational Efficiency' :
                      solution === 'MarketIntelligence' ? 'Market Intelligence' : 'Revenue Optimization'}
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
                <img
                  src="/hero.png"
                  alt="Hospitality data solutions in action"
                  className="relative rounded-lg shadow-2xl"
                />
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 tet-blue-500">Success Stories</h2>
            <p className="max-w-2xl mx-auto">See how our data solutions are transforming hospitality and small businesses.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Building className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Luxury Hotel Chain</h3>
              </div>
              <p className="mb-4">Implemented a comprehensive guest analytics platform that increased guest satisfaction scores by 27% and boosted repeat bookings through personalized experiences.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">35% increase in revenue per available room</p>
              </div>
              {/* <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View more details</span>
                  <ChevronRight className="size-3" />
                </Button>
              </Link> */}
            </div>
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <DollarSign className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Restaurant Group</h3>
              </div>
              <p className="mb-4">Deployed predictive demand forecasting and inventory management system that reduced food waste by 32% while improving menu planning and staff scheduling efficiency.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">22% improvement in operational profit margins</p>
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
              <div className="inline-block rounded-full bg-background border border-gray-800 px-3 py-1 text-sm font-medium text-blue-500 mb-4">Got Questions?</div>
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-bue-500">Frequently Asked Questions</h2>
              <p>Common questions about hospitality data analytics.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How do you protect guest privacy?</h3>
                <p className="text-muted-foreground mt-4">Our solutions implement multiple layers of security including encryption, access controls, and compliance frameworks to protect guest data while enabling personalized experiences.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can we integrate with existing property management systems?</h3>
                <p className="text-muted-foreground mt-4">Yes, our platform offers seamless integration with all major property management systems, point-of-sale solutions, and booking engines, ensuring you can leverage existing infrastructure.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What ROI can we expect from hospitality analytics?</h3>
                <p className="text-muted-foreground mt-4">Clients typically see ROI through increased revenue per available room, optimized pricing, improved operational efficiency, and enhanced guest satisfaction. We'll work with you to identify specific metrics.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Are your solutions appropriate for small businesses?</h3>
                <p className="text-muted-foreground mt-4">Absolutely. We offer scalable solutions tailored to businesses of all sizes, with modular approaches that allow SMBs to start with essential capabilities and expand as needs grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20  text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Hospitality Data?</h2>
          <p className="max-w-2xl mx-auto mb-10">Partner with us to unlock the full potential of your hospitality and business data, improving guest experiences and operational excellence.</p>
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