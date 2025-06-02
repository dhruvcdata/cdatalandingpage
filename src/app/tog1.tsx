'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const DataVisualizationSection = () => {
    // State to track which tab is active
    type TabKey = 'research' | 'design' | 'report';
    const [activeTab, setActiveTab] = useState<TabKey>('research');

    // Content for each tab
    const tabContent = {
        research: {
            title: "Data Visualization Research\nTechnique & Solution",
            description: "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.",
            image: "https://lottie.host/f8227b01-b1f6-4ae1-a613-5653cd2de634/mekmy5VmOA.lottie",
            alt: "Data Visualization Research Illustration"
        },
        design: {
            title: "Design Strategy &\nImplementation",
            description: "Our design strategies transform complex data into intuitive visualizations. We focus on creating user-friendly interfaces that make data accessible to all stakeholders, regardless of technical expertise. Our implementation process ensures seamless integration with existing systems.",
            image: "https://lottie.host/b6b86012-06be-4fdb-b534-fd58a8793da4/g4Wi1XsXFF.lottie",

            alt: "Design Strategy Illustration"
        },
        report: {
            title: "Automated Report\nGeneration",
            description: "Generate comprehensive reports with a single click. Our report generation tools analyze your data and create customized reports tailored to your specific requirements. Save time and resources while ensuring accuracy and consistency across all your reporting needs.",
            image: "https://lottie.host/42da6c7f-01e8-40ad-a2e6-cae605f3176e/Ka3mKSi4ZT.lottie",

            alt: "Report Generation Illustration"
        }
    };

    // Current content based on active tab
    const currentContent = tabContent[activeTab];

    return (
        <div className="w-full bg-navy-900 text-white px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Techniques & Realtime Data
                    <br />
                    Solutions
                </h1>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center mb-12 space-x-0 md:space-x-8 space-y-4 md:space-y-0">
                    <button
                        onClick={() => setActiveTab('research')}
                        className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'research' ? 'bg-blue-600 text-white' : 'bg-transparent text-white hover:bg-navy-800'
                            }`}
                    >
                        Research & Solution
                    </button>
                    <button
                        onClick={() => setActiveTab('design')}
                        className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'design' ? 'bg-blue-600 text-white' : 'bg-transparent text-white hover:bg-navy-800'
                            }`}
                    >
                        Design & Strategy
                    </button>
                    <button
                        onClick={() => setActiveTab('report')}
                        className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'report' ? 'bg-blue-600 text-white' : 'bg-transparent text-white hover:bg-navy-800'
                            }`}
                    >
                        Generate Report
                    </button>
                </div>

                {/* Main Content */}
                <div className="bg-navy-800 rounded-lg p-8 mb-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Text content */}
                        <div className="md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                {currentContent.title}
                            </h2>

                            <p className="text-gray-300 mb-6">
                                {currentContent.description}
                            </p>

                            <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-purple-700 transition-colors duration-200 cursor-pointer">
                                <span className="mr-2">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="md:w-1/3">
                            <div className="relative h-64 w-full">
                                {/* Using a placeholder image for demo purposes */}
                                <div className="w-full h-full bg-navy-700 rounded-lg flex items-center justify-center">

                                    <DotLottieReact
                                        src={currentContent.image}
                                        loop
                                        autoplay
                                        className='fit'
                                    />

                                </div>
                                {/* In production, use the Image component: */}
                                {/* <Image
                                    src={currentContent.image}
                                    alt={currentContent.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                /> */}

                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">15+</p>
                        <p className="text-gray-300">Years of Excellence</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">500+</p>
                        <p className="text-gray-300">Data Implementations</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">99.9%</p>
                        <p className="text-gray-300">System Uptime</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">40+</p>
                        <p className="text-gray-300">Industries Served</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataVisualizationSection;