'use client';
import React, { useState } from 'react';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BarChart3, LineChart, ClipboardList, DollarSign, Shield, Clock, Database, UserCheck, Building, AlertTriangle } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function FinancePublicServicesPage() {
  // State for Solutions component
  type SolutionKey = 'RiskManagement' | 'CustomerIntelligence' | 'DataCompliance' | 'FraudDetection';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('RiskManagement');

  const solutions = [
    'RiskManagement',
    'CustomerIntelligence',
    'DataCompliance',
    'FraudDetection'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'RiskManagement': {
      title: 'Risk Management & Analytics',
      description: 'Transform risk assessment with data-driven insights that enable proactive risk identification, improve regulatory compliance, and enhance decision-making processes.',
      points: [
        'Develop comprehensive risk profiles by integrating data from multiple internal and external sources',
        'Enable real-time monitoring of risk indicators and early warning systems',
        'Optimize risk models with machine learning algorithms analyzing past performance',
        'Improve stress testing and scenario analysis with advanced simulations',
        'Track emerging risk trends for enhanced preparedness and strategy development'
      ],
      color: 'bg-blue-500'
    },
    'CustomerIntelligence': {
      title: 'Customer Intelligence',
      description: 'Streamline financial operations and enhance customer experiences through intelligent segmentation, personalized offerings, and predictive lifecycle management.',
      points: [
        'Create 360° customer views by integrating data from all customer touchpoints',
        'Identify high-value segments and personalize services based on behavior patterns',
        'Predict customer needs and next-best actions with AI-powered recommendation engines',
        'Enhance customer retention with churn prediction and proactive engagement strategies',
        'Optimize customer acquisition costs through targeted marketing analytics'
      ],
      color: 'bg-blue-500'
    },
    'DataCompliance': {
      title: 'Regulatory Compliance & Reporting',
      description: 'Ensure the highest standards of data protection and regulatory compliance while enabling secure access to critical financial information across your organization.',
      points: [
        'Implement secure data governance frameworks that meet GDPR, GLBA, and other regulatory requirements',
        'Automate compliance reporting and reduce manual documentation processes',
        'Create comprehensive audit trails and monitoring systems for regulatory examinations',
        'Develop centralized data repositories that ensure consistent reporting across regulations',
        'Deploy advanced analytics to identify compliance gaps before they become violations'
      ],
      color: 'bg-blue-500'
    },
    'FraudDetection': {
      title: 'Fraud Detection & Prevention',
      description: 'Leverage advanced analytics and AI to detect fraudulent activities, identify suspicious patterns, and develop preventive strategies that protect assets and customer trust.',
      points: [
        'Identify potential fraud in real-time with machine learning pattern recognition',
        'Reduce false positives with behavioral analytics and contextual intelligence',
        'Analyze transaction networks to uncover sophisticated fraud schemes',
        'Deploy anomaly detection systems for early identification of unusual activities',
        'Enhance AML compliance with advanced entity resolution and link analysis'
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
              {/* <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-500 mb-4">Financial & Public Sector Innovation</div> */}
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl bg-lue-500 from-blue-500 to-teal-500 bg-clip-text texttransparent">Transform Finance & Public Services with Data Intelligence</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Unlock actionable insights from your financial data to improve risk management, enhance customer experiences, and ensure regulatory compliance.</p>

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
                  className="h-12 rounded-lg px-5 text-base">
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
              className="size-full -scale-x-100 object-cover opacity-30 dark:opacity-35 dark:invert-0 dark:lg:opacity-35"
              src="/videos/fin.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background to-indigo-900 px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Data-Powered Finance for Better Risk Management</h2>
            <div className="space-y-6">
              <p>In today's complex financial landscape, data is the foundation of sound risk management and exceptional customer service. Our advanced analytics solutions help banks, insurance companies, investment firms, and public sector organizations transform raw data into actionable insights that improve decision-making, streamline operations, and ensure regulatory compliance.</p>

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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-teal-500 bg-clip-text text-transparent">Comprehensive Financial Data Solutions</h2>
            <p>From risk analytics to fraud detection, our platform provides the insights you need to improve financial performance and regulatory compliance.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <AlertTriangle className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Risk Analytics</h3>
              </div>
              <p>Turn complex financial data into actionable risk insights that improve decision-making and portfolio management.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <UserCheck className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Customer Intelligence</h3>
              </div>
              <p>Analyze customer behavior to develop personalized financial products and enhance service delivery.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Regulatory Compliance</h3>
              </div>
              <p>Ensure data security and regulatory compliance with our specialized financial solutions.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <BarChart3 className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Market Analysis</h3>
              </div>
              <p>Analyze market trends and competitive intelligence to identify investment opportunities and optimize strategies.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Building className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Public Sector Solutions</h3>
              </div>
              <p>Optimize resource allocation and improve citizen services with data-driven insights for government agencies.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <DollarSign className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Fraud Detection</h3>
              </div>
              <p>Leverage AI to identify suspicious patterns and prevent financial fraud before it impacts your business.</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Financial Data Transformation</h2>
              <p className="text-xl text-blue-200">Driving better financial outcomes through innovative data strategies and advanced analytics.</p>
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
                  {solution === 'RiskManagement' ? 'Risk Management' :
                    solution === 'CustomerIntelligence' ? 'Customer Intelligence' :
                      solution === 'DataCompliance' ? 'Compliance & Reporting' : 'Fraud Detection'}
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
                  src="/finance-analytics.png"
                  alt="Financial data solutions in action"
                  className="relative rounded-lg shadow-2xl"
                /> */}
                {/* <DotLottieReact
                  src="https://lottie.host/e4f80812-d372-4f9d-8bbf-43cbd9d2dd31/UOO97SvwdW.lottie"
                  loop
                  autoplay
                /> */}
                <DotLottieReact
                  src="https://lottie.host/f8fc9667-c63f-443b-9baf-b9a71221cf81/DfK3ybuH0q.lottie"
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
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 tex-blue-500">Success Stories</h2>
            <p className="max-w-2xl mx-auto">See how our data solutions are transforming financial and public service organizations.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Regional Banking Group</h3>
              </div>
              <p className="mb-4">Implemented an integrated fraud detection platform that reduced fraudulent transactions by 62% while decreasing false positives by 40%, significantly improving customer experience.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">$4.2M annual savings in fraud prevention</p>
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
                <h3 className="font-medium text-lg text-blue-500">Municipal Government</h3>
              </div>
              <p className="mb-4">Developed a smart city data platform that optimized public transportation routes, reducing commute times by 18% and increasing citizen satisfaction ratings by 27%.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">35% improvement in resource allocation efficiency</p>
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
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl textblue-500">Frequently Asked Questions</h2>
              <p>Common questions about financial and public sector data analytics.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How do you ensure regulatory compliance?</h3>
                <p className="text-muted-foreground mt-4">Our solutions implement multiple layers of security and compliance features including encryption, access controls, and audit trails to maintain full compliance with GDPR, GLBA, FINRA, and other financial regulations.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can we integrate with existing financial systems?</h3>
                <p className="text-muted-foreground mt-4">Yes, our platform offers seamless integration with all major banking cores, payment systems, CRM platforms, and regulatory reporting tools, ensuring you can leverage existing infrastructure while enhancing data capabilities.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What ROI can we expect from financial analytics?</h3>
                <p className="text-muted-foreground mt-4">Clients typically see ROI through reduced fraud losses, improved risk management, optimized capital allocation, enhanced customer retention, and streamlined compliance processes. We'll work with you to identify and track specific metrics.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How do you handle sensitive financial data?</h3>
                <p className="text-muted-foreground mt-4">We implement bank-grade security protocols including end-to-end encryption, role-based access controls, data masking, and comprehensive activity monitoring to ensure sensitive financial information remains protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20  text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Financial Data?</h2>
          <p className="max-w-2xl mx-auto mb-10">Partner with us to unlock the full potential of your financial and public sector data, improving risk management and operational excellence.</p>
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