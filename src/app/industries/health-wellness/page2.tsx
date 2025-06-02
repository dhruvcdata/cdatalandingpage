'use client';
import React, { useState } from 'react';
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero5-header";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Activity, BarChart, LineChart, ClipboardList, Stethoscope, Shield, Clock, Database, UserCheck } from 'lucide-react';

export default function HealthWellnessPage() {
    // State for Solutions component
    type SolutionKey = 'PatientCare' | 'OperationalEfficiency' | 'DataCompliance' | 'PredictiveAnalytics';
    const [activeSolution, setActiveSolution] = useState<SolutionKey>('PatientCare');

    const solutions = [
        'PatientCare',
        'OperationalEfficiency',
        'DataCompliance',
        'PredictiveAnalytics'
    ];

    const solutionContent: Record<SolutionKey, { title: string; description: string; points: string[]; color: string }> = {
        'PatientCare': {
            title: 'Patient Care Excellence',
            description: 'Transform patient outcomes with data-driven insights that enable personalized care paths, improve treatment efficacy, and enhance the overall patient experience.',
            points: [
                'Develop 360° patient profiles by integrating data from EHRs, wearables, and clinical systems',
                'Enable real-time health monitoring and early intervention with IoT-connected devices',
                'Optimize treatment plans with machine learning algorithms analyzing past outcomes',
                'Improve patient engagement through personalized communication and care recommendations',
                'Track longitudinal health trends for chronic disease management and prevention'
            ],
            color: 'bg-green-600'
        },
        'OperationalEfficiency': {
            title: 'Operational Efficiency',
            description: 'Streamline healthcare operations and resource allocation through intelligent workflow optimization, staff scheduling, and real-time resource tracking.',
            points: [
                'Reduce wait times and optimize patient flow with predictive scheduling systems',
                'Improve resource utilization with AI-powered demand forecasting and staff allocation',
                'Automate administrative tasks to allow clinical staff to focus on patient care',
                'Identify bottlenecks in care delivery with process mining and workflow analytics',
                'Optimize inventory management for medical supplies and pharmaceuticals'
            ],
            color: 'bg-green-600'
        },
        'DataCompliance': {
            title: 'Data Security & Compliance',
            description: 'Ensure the highest standards of data protection and regulatory compliance while enabling secure access to critical health information across your organization.',
            points: [
                'Implement HIPAA-compliant data storage and sharing solutions with robust encryption',
                'Establish data governance frameworks that balance security with accessibility',
                'Create audit trails and monitoring systems to track data access and usage',
                'Automate compliance reporting for regulatory requirements and certifications',
                'Deploy identity management and role-based access control for sensitive information'
            ],
            color: 'bg-green-600'
        },
        'PredictiveAnalytics': {
            title: 'Predictive Health Analytics',
            description: 'Leverage advanced analytics and AI to predict health trends, identify at-risk patients, and develop preventive care strategies that improve outcomes and reduce costs.',
            points: [
                'Identify at-risk patients before symptoms appear through pattern recognition',
                'Predict disease progression and treatment response with machine learning models',
                'Analyze population health data to target preventive care initiatives',
                'Forecast patient admission rates and resource needs with time-series analysis',
                'Detect anomalies in vital signs and lab results for early intervention'
            ],
            color: 'bg-green-600'
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
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Transform Health & Wellness with Data Intelligence</h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg">Unlock actionable insights from your healthcare data to improve patient outcomes, optimize operations, and ensure compliance.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base">
                                    <Link href="#link">
                                        <span className="text-nowrap">Get Started</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <Link href="#link">
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
                            src="https://res.cloudinary.com/dg4jhba5c/video/upload/v1741605033/dna_ttplyu.mp4"></video>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-16">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                    <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                        <h2 className="text-4xl font-medium">Data-Powered Healthcare for Better Patient Outcomes</h2>
                        <div className="space-y-6">
                            <p>In today's digital health landscape, data is the foundation of exceptional care. Our advanced analytics solutions help healthcare providers, wellness centers, and fitness organizations transform raw data into actionable insights that improve patient care, streamline operations, and ensure regulatory compliance.</p>

                            <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
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
            <section className="py-12 md:py-10">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                    <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                        <h2 className="text-balance text-4xl font-medium lg:text-5xl">Comprehensive Health Data Solutions</h2>
                        <p>From clinical analytics to fitness tracking, our platform provides the insights you need to improve health outcomes and business performance.</p>
                    </div>

                    <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Stethoscope className="size-4" />
                                <h3 className="text-sm font-medium">Clinical Analytics</h3>
                            </div>
                            <p className="text-sm">Turn EHR data into actionable insights that improve clinical decision-making and patient outcomes.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Activity className="size-4" />
                                <h3 className="text-sm font-medium">Wellness Monitoring</h3>
                            </div>
                            <p className="text-sm">Track and analyze fitness and wellness metrics to develop personalized health programs.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Shield className="size-4" />
                                <h3 className="text-sm font-medium">HIPAA Compliance</h3>
                            </div>
                            <p className="text-sm">Ensure data security and regulatory compliance with our specialized healthcare solutions.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <BarChart className="size-4" />
                                <h3 className="text-sm font-medium">Population Health</h3>
                            </div>
                            <p className="text-sm">Analyze health trends across patient populations to identify risks and intervention opportunities.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Clock className="size-4" />
                                <h3 className="text-sm font-medium">Operational Efficiency</h3>
                            </div>
                            <p className="text-sm">Optimize scheduling, resource allocation, and patient flow with data-driven insights.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <LineChart className="size-4" />
                                <h3 className="text-sm font-medium">Predictive Health</h3>
                            </div>
                            <p className="text-sm">Leverage AI to predict health issues before they develop and enable preventive care.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-16 md:py-16 bg-background">
                <div className="max-w-6xl mx-auto p-6 bg-background text-gray-300 rounded-xl shadow-lg">
                    <div className="mb-10">
                        <h1 className="text-4xl font-light text-green-400 mb-1">Tailored Solutions</h1>
                        <h2 className="text-4xl font-bold text-white mb-4">Healthcare Data Transformation</h2>
                        <p className="text-xl text-gray-400">Driving better health outcomes through innovative data strategies and advanced analytics.</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-12">
                        {solutions.map((solution) => (
                            <button
                                key={solution}
                                onClick={() => setActiveSolution(solution as SolutionKey)}
                                className={`py-3 px-6 rounded-full transition-all duration-300 ${activeSolution === solution
                                    ? `${solutionContent[solution as SolutionKey].color} text-white shadow-md`
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                            >
                                {solution === 'PatientCare' ? 'Patient Care' :
                                    solution === 'OperationalEfficiency' ? 'Operational Efficiency' :
                                        solution === 'DataCompliance' ? 'Data Compliance' : 'Predictive Analytics'}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-4 border-l-4 pl-3 border-green-400">
                                {solutionContent[activeSolution].title}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {solutionContent[activeSolution].description}
                            </p>
                            <div className="space-y-4 mb-8">
                                {solutionContent[activeSolution].points.map((point, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className={`p-1 rounded-full ${solutionContent[activeSolution].color} text-white mr-2`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300">{point}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/Contact">
                                <Button className="bg-green-600 text-white py-3 px-6 rounded-full font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300">
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
                            <img
                                src="/hero.png"
                                alt="Healthcare data solutions in action"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-16 md:py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold md:text-4xl mb-4">Success Stories</h2>
                        <p className="max-w-2xl mx-auto">See how our data solutions are transforming health and wellness organizations.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="border p-6 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <ClipboardList className="size-5 text-green-600" />
                                <h3 className="font-medium">Regional Hospital Network</h3>
                            </div>
                            <p className="mb-4">Implemented an integrated data platform that reduced readmission rates by 23% through predictive analytics and personalized care coordination.</p>
                            <p className="text-sm text-gray-500">50% improvement in clinical workflow efficiency</p>
                        </div>

                        <div className="border p-6 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="size-5 text-green-600" />
                                <h3 className="font-medium">Wellness Franchise</h3>
                            </div>
                            <p className="mb-4">Transformed customer engagement with data-driven personalization, increasing membership retention by 35% and boosting program completion rates.</p>
                            <p className="text-sm text-gray-500">2.8x ROI on data analytics investment</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-16">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                        <div className="text-center lg:text-left">
                            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
                            <p>Common questions about healthcare data analytics.</p>
                        </div>
                        <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                            <div className="pb-6">
                                <h3 className="font-medium">How do you ensure HIPAA compliance?</h3>
                                <p className="text-muted-foreground mt-4">Our solutions implement multiple layers of security including encryption, access controls, and audit trails to maintain full HIPAA compliance throughout the data lifecycle.</p>
                            </div>
                            <div className="py-6">
                                <h3 className="font-medium">Can we integrate with existing EHR systems?</h3>
                                <p className="text-muted-foreground mt-4">Yes, our platform offers seamless integration with all major EHR systems, ensuring you can leverage existing infrastructure while enhancing data capabilities.</p>
                            </div>
                            <div className="py-6">
                                <h3 className="font-medium">What ROI can we expect from healthcare analytics?</h3>
                                <p className="text-muted-foreground mt-4">Clients typically see ROI through reduced readmissions, optimized staffing, improved resource allocation, and enhanced patient satisfaction. We'll work with you to identify and track specific metrics.</p>
                            </div>
                            <div className="py-6">
                                <h3 className="font-medium">How quickly can we implement these solutions?</h3>
                                <p className="text-muted-foreground mt-4">Implementation timelines vary based on complexity, but our modular approach allows for rapid deployment of initial capabilities with progressive enhancement over time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl mb-6">Ready to Transform Your Health Data?</h2>
                    <p className="max-w-2xl mx-auto mb-10">Partner with us to unlock the full potential of your healthcare and wellness data, improving outcomes and operational excellence.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-green-800 hover:bg-green-100 py-3 px-6 rounded-full font-medium">
                            Schedule a Demo
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-medium">
                            Download Case Studies
                        </Button>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
}