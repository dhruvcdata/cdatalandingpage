'use client';
import React, { useEffect, useRef, useState } from 'react';
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
export default function AIMLServicesPage() {
  // State for Solutions component
  type SolutionKey = 'PredictiveAnalytics' | 'MLOps' | 'ComputerVision' | 'NLP';
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('PredictiveAnalytics');

  const solutions = [
    'PredictiveAnalytics',
    'MLOps',
    'ComputerVision',
    'NLP'
  ];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.error("Playback error:", err));
    }
  }, []);
  const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
    'PredictiveAnalytics': {
      title: 'Predictive Analytics',
      description: 'Leverage advanced machine learning models to forecast trends, optimize operations, and drive data-driven decision-making.',
      points: [
        'Development of custom predictive models tailored to your business needs',
        'Integration with existing data pipelines and BI tools',
        'Real-time analytics and insights delivery',
        'Continuous model monitoring and optimization',
        'Scalable solutions for growing data needs'
      ],
      color: 'bg-blue-500'
    },
    'MLOps': {
      title: 'MLOps',
      description: 'Streamline the deployment, monitoring, and management of machine learning models with our end-to-end MLOps solutions.',
      points: [
        'Automated model deployment and version control',
        'Continuous integration and delivery (CI/CD) for ML models',
        'Model performance monitoring and alerting',
        'Scalable infrastructure for model training and inference',
        'Governance and compliance frameworks for AI/ML'
      ],
      color: 'bg-blue-500'
    },
    'ComputerVision': {
      title: 'Computer Vision',
      description: 'Transform visual data into actionable insights with cutting-edge computer vision solutions.',
      points: [
        'Image and video analysis for quality control and automation',
        'Object detection and recognition for security and surveillance',
        'Custom deep learning models for specific use cases',
        'Integration with IoT and edge devices',
        'Real-time processing and analytics'
      ],
      color: 'bg-blue-500'
    },
    'NLP': {
      title: 'Natural Language Processing',
      description: 'Unlock the power of unstructured text data with advanced NLP techniques.',
      points: [
        'Sentiment analysis and text classification',
        'Chatbot and virtual assistant development',
        'Document summarization and information extraction',
        'Language translation and multilingual support',
        'Custom NLP models for domain-specific applications'
      ],
      color: 'bg-blue-500'
    }
  };

  return (
    <div>
      <Head>
        <title>AI & Machine Learning Services in Detroit & Mississauga | CData Consultancy</title>

        <meta name="description" content="Get expert machine learning services in Detroit & Mississauga. We offer AI solutions, machine learning consulting, and custom models for smarter decisions." />
        <meta name="author" content="CData Consultancy" />
        <meta name="keywords" content="AI Services, Machine Learning, Detroit, Mississauga, CData Consultancy" />

        <meta property="og:title" content="AI & Machine Learning Services in Detroit & Mississauga | CData Consultancy" />
        <meta property="og:description" content="Get expert machine learning services in Detroit & Mississauga. We offer AI solutions, machine learning consulting, and custom models for smarter decisions." />
        <meta property="og:url" content="https://cdatainsights.com/services/ai-ml" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CData Consultancy" />
        <meta property="og:image" content="https://cdatainsights.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI & Machine Learning Services in Detroit & Mississauga | CData Consultancy" />
        <meta name="twitter:description" content="Get expert machine learning services in Detroit & Mississauga. We offer AI solutions, machine learning consulting, and custom models for smarter decisions." />
        <meta name="twitter:url" content="https://cdatainsights.com/services/ai-ml" />
        <meta name="twitter:image" content="https://cdatainsights.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader />

      {/* Hero Section */}
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-8 xl:text-7xl bg-clip-text ">AI & Machine Learning Services</h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">Transform your business with cutting-edge AI and machine learning solutions tailored to your unique needs.</p>

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
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="size-full -scale-x-100 object-cover opacity-30 dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="/videos/ai.mp4"
            ></video>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-16 bg-background  px-6">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-blue-500">Empower Your Business with AI & ML</h2>
            <div className="space-y-6">
              <p>AI and machine learning are transforming industries by enabling smarter decision-making, automating processes, and uncovering hidden insights. Our comprehensive AI/ML services help you harness the power of data to drive innovation and growth.</p>

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
            <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-blue-500 from-blue-500 to-indigo-500 bg-clip-text text-transparent">Our AI/ML Advantage</h2>
            <p>We deliver cutting-edge AI and machine learning solutions that drive real business value.</p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <ArrowRightLeft className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Advanced Algorithms</h3>
              </div>
              <p>We use state-of-the-art machine learning algorithms to solve complex business problems.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <CheckCircle className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Scalable Solutions</h3>
              </div>
              <p>Our AI/ML solutions are designed to scale with your business needs.</p>
            </div>
            <div className="space-y-3 p-8 rounded-xl border border-gray-900 bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-background border border-gray-800 p-3">
                  <Shield className="size-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-blue-500">Data Security</h3>
              </div>
              <p>We prioritize data security and compliance in all our AI/ML solutions.</p>
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
              <p>We build custom AI/ML solutions tailored to your specific business needs.</p>
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
              <div className="inline-block rounded-full bg- px-3 py-1 text-sm font-medium border border-gray-800 text-blue-500 mb-2">AI/ML Solutions</div>
              <h2 className="text-4xl font-bold text-white mb-4">Tailored AI/ML Solutions for Your Business</h2>
              <p className="text-xl text-blue-200">Our AI/ML solutions are designed to address your unique challenges and drive business growth.</p>
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
                  {solution === 'PredictiveAnalytics' ? 'Predictive Analytics' :
                    solution === 'MLOps' ? 'MLOps' :
                      solution === 'ComputerVision' ? 'Computer Vision' : 'Natural Language Processing'}
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
                  src="/ai-ml-solutions.png"
                  alt="AI/ML solution visualization"
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

      {/* Methodology Section */}
      <section className="py-16 md:py-16 bg-background mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Our Process</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 ">Proven AI/ML Methodology</h2>
            <p className="max-w-2xl mx-auto">Our structured approach ensures successful AI/ML implementations every time.</p>
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
              <p className="mb-4">Comprehensive analysis of your data and business objectives to identify AI/ML opportunities.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <LineChart className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Plan & Design</h3>
              </div>
              <p className="mb-4">Creation of a detailed AI/ML strategy with timelines, resource allocation, and risk mitigation plans.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Server className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Execute & Validate</h3>
              </div>
              <p className="mb-4">Implementation of AI/ML models with continuous validation, automated testing, and quality assurance.</p>
            </div>

            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <Activity className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Optimize & Support</h3>
              </div>
              <p className="mb-4">Post-deployment performance tuning, knowledge transfer, and ongoing optimization support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-16 bg-background rounded-3xl mx-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Success Stories</div>
            <h2 className="text-3xl font-semibold md:text-4xl mb-4 ">Real-World AI/ML Impact</h2>
            <p className="max-w-2xl mx-auto">See how our AI/ML solutions have transformed organizations like yours.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Retail Industry</h3>
              </div>
              <p className="mb-4">Implemented predictive analytics to optimize inventory management, reducing stockouts by 30% and increasing sales by 15%.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Improved customer satisfaction and operational efficiency</p>
              </div>
              <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View case study</span>
                  <ChevronRight className="size-3" />
                </Button>
              </Link>
            </div>
            <div className="bg-background border-2 border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full border border-gray-800 bg-background p-2">
                  <ClipboardList className="size-5 text-blue-500" />
                </div>
                <h3 className="font-medium text-lg text-blue-500">Healthcare Provider</h3>
              </div>
              <p className="mb-4">Developed a computer vision system for medical imaging analysis, improving diagnostic accuracy by 25%.</p>
              <div className="bg-background border border-gray-800 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Enhanced patient outcomes and reduced diagnostic time</p>
              </div>
              <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="mt-4 text-blue-500 hover:text-white hover:bg-blue-500 gap-1">
                  <span>View case study</span>
                  <ChevronRight className="size-3" />
                </Button>
              </Link>
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
              <p>Common questions about AI/ML projects.</p>
            </div>
            <div className="divide-y divide-blue-500 sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium text-blue-500">How do I get started with AI/ML?</h3>
                <p className="text-muted-foreground mt-4">We begin with a comprehensive assessment of your business needs and data infrastructure to identify the best AI/ML opportunities.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">What industries do you serve?</h3>
                <p className="text-muted-foreground mt-4">We serve a wide range of industries, including retail, healthcare, finance, manufacturing, and more.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">How do you ensure model accuracy?</h3>
                <p className="text-muted-foreground mt-4">We use rigorous testing and validation frameworks to ensure our models deliver accurate and reliable results.</p>
              </div>
              <div className="py-6">
                <h3 className="font-medium text-blue-500">Can you integrate with existing systems?</h3>
                <p className="text-muted-foreground mt-4">Yes, we specialize in integrating AI/ML solutions with your existing data infrastructure and business systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta' className="py-16 md:py-20  text-white rounded-3xl mx-6 mb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white mb-4">Take the Next Step</div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Business with AI/ML?</h2>
          <p className="max-w-2xl mx-auto mb-10">Let's discuss your AI/ML needs and develop a customized strategy that drives innovation and growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact">
              <Button className="bg-blue-500 text-white hover:bg-blue-400 py-3 px-6 rounded-full font-medium">
                Request AI/ML Assessment
              </Button>
            </a>
            <a href="/case-studies">
              {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                Explore AI/ML Solutions
              </Button> */}
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}