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
import Head from 'next/head';

export default function DataMigrationPage() {
  // State for Solutions component
  type SolutionKey = 'CloudMigration' | 'DataLakeMigration' | 'LegacyModernization' | 'DatabaseMigration';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('CloudMigration');

  const solutions = [
    'CloudMigration',
    'DataLakeMigration',
    'LegacyModernization',
    'DatabaseMigration'
  ];

  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'CloudMigration': {
      title: 'Cloud Data Migration',
      description: 'Seamlessly transfer your data infrastructure to the cloud with our proven methodology that ensures zero downtime, data integrity, and optimized performance.',
      points: [
        'Comprehensive assessment of current data architecture and cloud readiness',
        'Custom migration strategy tailored to your business needs and timeline',
        'Parallel processing implementation to minimize business disruption',
        'Automated validation and reconciliation to ensure data accuracy',
        'Post-migration optimization for cost-efficiency and performance'
      ],
      color: 'bg-blue-500'
    },
    'DataLakeMigration': {
      title: 'Data Lake Migration',
      description: 'Transform your scattered data repositories into a centralized, scalable data lake that enables advanced analytics and seamless data access across your organization.',
      points: [
        'Source system analysis and data mapping for comprehensive migration',
        'Data lake architecture design optimized for your analytical workloads',
        'ETL/ELT pipeline development for efficient data ingestion',
        'Implementation of data governance and security frameworks',
        'Integration with existing BI tools and analytics platforms'
      ],
      color: 'bg-blue-500'
    },
    'LegacyModernization': {
      title: 'Legacy System Modernization',
      description: 'Convert outdated legacy systems into modern, agile data platforms that reduce maintenance costs and unlock new capabilities for your business.',
      points: [
        'Assessment of legacy systems and identification of modernization opportunities',
        'Phased migration approach to minimize risk and operational impact',
        'Data model transformation from legacy to modern architectures',
        'Code conversion and application refactoring for modern platforms',
        'Knowledge transfer and training for your team on new technologies'
      ],
      color: 'bg-blue-500'
    },
    'DatabaseMigration': {
      title: 'Database Migration',
      description: 'Migrate between database platforms with confidence using our specialized tools and methodologies that preserve data integrity and optimize performance.',
      points: [
        'Schema translation and optimization for target database platforms',
        'Data type mapping and conversion for cross-platform compatibility',
        'Performance benchmarking and tuning during migration',
        'Stored procedure and function conversion with functional equivalence',
        'Post-migration support and optimization services'
      ],
      color: 'bg-blue-500'
    }
  };

  return (
    <div>
      <Head>
        <title>Best Data & Cloud Migration Services | Toronto & GTA | CData Consultancy</title>

        <meta name="description" content="Get the best data migration services in Toronto, GTA & Mississauga. We offer expert cloud data and database migration solutions tailored to your business needs." />
        <meta name="author" content="CData Consultancy" />
        <meta name="keywords" content="Data Migration, Cloud Migration, Toronto, GTA, Mississauga, CData Consultancy" />

        <meta property="og:title" content="Best Data & Cloud Migration Services | Toronto & GTA | CData Consultancy" />
        <meta property="og:description" content="Get the best data migration services in Toronto, GTA & Mississauga. We offer expert cloud data and database migration solutions tailored to your business needs." />
        <meta property="og:url" content="https://cdatainsights.com/services/data-migration" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CData Consultancy" />
        <meta property="og:image" content="https://cdatainsights.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Data & Cloud Migration Services | Toronto & GTA | CData Consultancy" />
        <meta name="twitter:description" content="Get the best data migration services in Toronto, GTA & Mississauga. We offer expert cloud data and database migration solutions tailored to your business needs." />
        <meta name="twitter:url" content="https://cdatainsights.com/services/data-migration" />
        <meta name="twitter:image" content="https://cdatainsights.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader />

      {/* Hero Section */}
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl  from-blue-500 to-purple-500 bg-clip-text text-trnsparent">Data Migration Without the Risk</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Seamlessly transition your data assets to new platforms with zero downtime, guaranteed data integrity, and minimized business disruption.</p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg pl-5 pr-3 text-base bg-white ">
                  <Link href="#cta">
                    <span className="text-nowrap">Start Your Migration</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg px-5 text-base">
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
              className="size-full -scale-x-100 object-cover opacity-50 dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="/videos/dm.mp4"></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background to-indigo-900 px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Migrate With Confidence, Transform With Purpose</h2>
            <div className="space-y-6">
              <p>Data migration is more than moving bits and bytes—it's about transforming your organization's capabilities while preserving your most valuable asset: your data. Our proven migration methodology minimizes risk, eliminates downtime, and ensures your data arrives intact and optimized for your new environment.</p>

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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-indigo-500 bg-clip-text text-transparent">Our Migration Advantage</h2>
            <p>We've perfected the art of data migration through hundreds of successful projects across industries and platforms.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <ArrowRightLeft className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Parallel Processing</h3>
              </div>
              <p>Our parallel migration approach ensures zero downtime and continuous business operations throughout the process.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <CheckCircle className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Automated Validation</h3>
              </div>
              <p>Advanced validation tools verify data integrity at every step, ensuring 100% accuracy in your migrated data.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Risk Mitigation</h3>
              </div>
              <p>Our proven methodology identifies and addresses potential issues before they impact your migration.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <BarChart className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Performance Optimization</h3>
              </div>
              <p>We don't just move your data—we enhance its organization and accessibility for improved performance.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Clock className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Accelerated Timeline</h3>
              </div>
              <p>Our specialized tools and expertise significantly reduce migration timelines without compromising quality.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border-2 border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <AlertTriangle className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Complex Data Handling</h3>
              </div>
              <p>Expertly manage complex data types, relationships, and dependencies across diverse platforms.</p>
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
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-gray-800 text-blue-500 mb-2">Migration Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Tailored For Your Data Journey</h2>
              <p className="text-xl text-blue-200">Every migration is unique. Our specialized solutions address your specific challenges and objectives.</p>
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
                  {solution === 'CloudMigration' ? 'Cloud Migration' :
                    solution === 'DataLakeMigration' ? 'Data Lake Migration' :
                      solution === 'LegacyModernization' ? 'Legacy Modernization' : 'Database Migration'}
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
                  src="/data-migration.png"
                  alt="Data migration solution visualization"
                  className="relative rounded-lg shadow-2xl"
                /> */}
                <DotLottieReact
                  src="https://lottie.host/b7d9bf23-c8ec-48e3-ab5f-0ef9b3b36143/4TpoYGNCwp.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Methodology Section */}
      <section className="py-16 md:py-16 bg-background mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Our Process</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-500">Proven Migration Methodology</h2>
            <p className="max-w-2xl mx-auto">Our structured approach ensures successful data transitions every time.</p>
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
              <p className="mb-4">Creation of a detailed migration strategy with timelines, resource allocation, and risk mitigation plans.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Server className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Execute & Validate</h3>
              </div>
              <p className="mb-4">Implementation of migration with continuous validation, automated testing, and quality assurance.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Activity className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Optimize & Support</h3>
              </div>
              <p className="mb-4">Post-migration performance tuning, knowledge transfer, and ongoing optimization support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-16 bg-background rounded-3xl mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Success Stories</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 text-blue-500">Real-World Migration Impact</h2>
            <p className="max-w-2xl mx-auto">See how our data migration expertise has transformed organizations like yours.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Global Financial Institution</h3>
              </div>
              <p className="mb-4">Migrated 5PB of data from legacy systems to a modern cloud data lake with zero downtime, enabling advanced analytics and reducing operational costs by 42%.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">3-month acceleration of digital transformation roadmap</p>
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
                <h3 className="font-medium text-lg text-blue-500">E-Commerce Marketplace</h3>
              </div>
              <p className="mb-4">Executed a complex multi-database platform migration while maintaining 24/7 operations, resulting in 65% faster query performance and enhanced customer experiences.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">99.999% data accuracy with zero business disruption</p>
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
              <p>Common questions about data migration projects.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How long does a typical data migration take?</h3>
                <p className="text-muted-foreground mt-4">Migration timelines vary based on data volume, complexity, and business requirements. Our parallel processing approach can significantly reduce traditional migration timeframes, with most projects completed in 3-6 months.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Will my business operations be disrupted during migration?</h3>
                <p className="text-muted-foreground mt-4">Our zero-downtime methodology ensures continuous business operations throughout the migration process. We implement parallel processing and staged cutover approaches to eliminate disruption.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How do you ensure data integrity during migration?</h3>
                <p className="text-muted-foreground mt-4">We employ comprehensive validation frameworks with automated reconciliation tools that verify data at multiple checkpoints throughout the migration. This multi-layered approach ensures 100% data accuracy.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can you migrate between different database platforms?</h3>
                <p className="text-muted-foreground mt-4">Yes, we specialize in heterogeneous migrations between different database platforms, including Oracle to PostgreSQL, SQL Server to Snowflake, on-premises to cloud, and many other combinations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20 bg-blu-500 from-blue-500 to-indigo-500 text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Data Infrastructure?</h2>
          <p className="max-w-2xl mx-auto mb-10">Let's discuss your migration needs and develop a customized strategy that minimizes risk and maximizes business value.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact">
              <Button className="bg-blue-500 text-white hover:bg-blue-400 py-3 px-6 rounded-full font-medium">
                Request Migration Assessment
              </Button>
            </a>
            {/* <a href="/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                Explore Migration Solutions
              </Button>
            </a> */}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}