'use client';
import React, { useState } from 'react';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ShoppingBag, TrendingUp, BarChart, LineChart, ClipboardList, Truck, Shield, Clock, Database, Users } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function RetailConsumerGoodsPage() {
  // State for Solutions component
  type SolutionKey = 'CustomerInsights' | 'SupplyChain' | 'DataCompliance' | 'PredictiveAnalytics';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('CustomerInsights');

  const solutions = [
    'CustomerInsights',
    'SupplyChain',
    'DataCompliance',
    'PredictiveAnalytics'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'CustomerInsights': {
      title: 'Customer Insights & Personalization',
      description: 'Transform shopping experiences with data-driven insights that enable personalized recommendations, improve customer satisfaction, and drive brand loyalty.',
      points: [
        'Develop 360° customer profiles by integrating data from POS, e-commerce, and CRM systems',
        'Create personalized marketing campaigns based on purchase history and browsing behavior',
        'Identify high-value customer segments for targeted retention strategies',
        'Optimize pricing strategies with real-time competitive and demand analysis',
        'Track customer journey touchpoints to enhance the omnichannel experience'
      ],
      color: 'bg-blue-500'
    },
    'SupplyChain': {
      title: 'Supply Chain Optimization',
      description: 'Streamline retail operations and inventory management through intelligent demand forecasting, supplier analytics, and real-time inventory tracking.',
      points: [
        'Reduce stockouts and overstock situations with AI-powered demand forecasting',
        'Improve warehouse efficiency with location analytics and automated routing',
        'Optimize supplier relationships with performance analytics and risk assessment',
        'Identify bottlenecks in distribution networks with process mining and logistics analytics',
        'Enhance inventory turnover with product lifecycle and seasonality insights'
      ],
      color: 'bg-blue-500'
    },
    'DataCompliance': {
      title: 'Data Security & Compliance',
      description: 'Ensure the highest standards of data protection and regulatory compliance while enabling secure access to critical retail information across your organization.',
      points: [
        'Implement PCI-DSS compliant data storage and processing with robust encryption',
        'Establish data governance frameworks that balance security with accessibility',
        'Create audit trails and monitoring systems to track data access and usage',
        'Automate compliance reporting for regulatory requirements across multiple regions',
        'Deploy identity management and role-based access control for sensitive customer information'
      ],
      color: 'bg-blue-500'
    },
    'PredictiveAnalytics': {
      title: 'Predictive Retail Analytics',
      description: 'Leverage advanced analytics and AI to predict market trends, identify emerging opportunities, and develop strategic initiatives that improve sales and reduce costs.',
      points: [
        'Forecast product performance and market trends with machine learning models',
        'Predict customer churn and implement proactive retention strategies',
        'Analyze market basket data to optimize store layouts and cross-selling opportunities',
        'Forecast seasonal demand fluctuations for optimal inventory planning',
        'Detect anomalies in sales patterns for rapid response to market changes'
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
              {/* <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-500 mb-4">Retail & CPG Innovation</div> */}
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl bg-ble-500 from-blue-60 to-re-500 bg-clip-text text-trnsparent">Transform Retail & CPG with Data Intelligence</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Unlock actionable insights from your retail data to improve customer experiences, optimize supply chains, and drive sustainable growth.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base bg-white hver:b-blue-700">
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
              className="size-full -scale-x-100 object-cover opacity-30 dark:opacity-35 dark:invert-0 dark:lg:opacity-35"
              src="/videos/retail.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background to-indigo-900 px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Data-Powered Retail for Better Customer Experiences</h2>
            <div className="space-y-6">
              <p>In today's competitive retail landscape, data is the foundation of exceptional customer experiences. Our advanced analytics solutions help retailers, CPG brands, and e-commerce organizations transform raw data into actionable insights that improve customer satisfaction, streamline operations, and drive revenue growth.</p>

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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-red-500 bg-clip-text text-transparent">Comprehensive Retail Data Solutions</h2>
            <p>From customer analytics to supply chain optimization, our platform provides the insights you need to improve business performance and customer satisfaction.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <ShoppingBag className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Customer Analytics</h3>
              </div>
              <p>Turn POS and e-commerce data into actionable insights that improve customer experiences and drive loyalty.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <TrendingUp className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Market Intelligence</h3>
              </div>
              <p>Track and analyze market trends to identify opportunities and optimize pricing strategies.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Compliance</h3>
              </div>
              <p>Ensure data security and regulatory compliance with our specialized retail solutions.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <BarChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Merchandising Optimization</h3>
              </div>
              <p>Analyze product performance and customer preferences to optimize assortment and store layouts.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Truck className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Supply Chain Intelligence</h3>
              </div>
              <p>Optimize inventory, logistics, and supplier relationships with data-driven insights.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <LineChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Predictive Analytics</h3>
              </div>
              <p>Leverage AI to predict customer behavior, demand patterns, and market trends.</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Retail Data Transformation</h2>
              <p className="text-xl text-blue-200">Driving better business outcomes through innovative data strategies and advanced analytics.</p>
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
                  {solution === 'CustomerInsights' ? 'Customer Insights' :
                    solution === 'SupplyChain' ? 'Supply Chain' :
                      solution === 'DataCompliance' ? 'Data Compliance' : 'Predictive Analytics'}
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
                  src="/retail-analytics.png"
                  alt="Retail data solutions in action"
                  className="relative rounded-lg shadow-2xl"
                /> */}
                <DotLottieReact
                  src="https://lottie.host/d8c21b1e-017c-438a-8d93-b79d7d95cdc4/KSLqK00w34.lottie"
                  loop
                  autoplay
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-lue-500">Success Stories</h2>
            <p className="max-w-2xl mx-auto">See how our data solutions are transforming retail and consumer goods organizations.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">National Retail Chain</h3>
              </div>
              <p className="mb-4">Implemented an integrated customer analytics platform that increased customer retention by 18% through personalized marketing and improved shopping experiences.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">32% increase in customer lifetime value</p>
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
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Global CPG Manufacturer</h3>
              </div>
              <p className="mb-4">Deployed a supply chain analytics solution that reduced inventory costs by 21% while improving product availability through predictive demand forecasting.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">45% reduction in stockout incidents</p>
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
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-lue-500">Frequently Asked Questions</h2>
              <p>Common questions about retail and CPG data analytics.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How do you ensure customer data privacy?</h3>
                <p className="text-muted-foreground mt-4">Our solutions implement multiple layers of security including encryption, access controls, and anonymization techniques to maintain full compliance with GDPR, CCPA, and other privacy regulations.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can we integrate with existing retail systems?</h3>
                <p className="text-muted-foreground mt-4">Yes, our platform offers seamless integration with all major POS, e-commerce, ERP, and CRM systems, ensuring you can leverage existing infrastructure while enhancing data capabilities.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What ROI can we expect from retail analytics?</h3>
                <p className="text-muted-foreground mt-4">Clients typically see ROI through increased customer retention, optimized inventory, improved marketing efficiency, and enhanced supply chain performance. We'll work with you to identify and track specific metrics.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How quickly can we implement these solutions?</h3>
                <p className="text-muted-foreground mt-4">Implementation timelines vary based on complexity, but our modular approach allows for rapid deployment of initial capabilities with progressive enhancement over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20  text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Retail Data?</h2>
          <p className="max-w-2xl mx-auto mb-10">Partner with us to unlock the full potential of your retail and consumer goods data, improving customer experiences and business performance.</p>
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