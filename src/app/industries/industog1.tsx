'use client';
import React, { useState } from 'react';

const IndustriesComponent = () => {
    type IndustryKey = 'Healthcare' | 'Finance' | 'Retail' | 'Manufacturing';
    const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('Healthcare');

    const industries = [
        'Healthcare',
        'Finance',
        'Retail',
        'Manufacturing'
    ];

    const industryContent: Record<IndustryKey, { title: string; description: string; points: string[]; color: string }> = {
        'Healthcare': {
            title: 'Healthcare',
            description: 'Transforming patient care with data-driven insights and AI-powered solutions...',
            points: [
                'Enhance patient care through predictive analytics and AI-driven diagnostics.',
                'Optimize hospital operations with real-time data monitoring.',
                'Ensure compliance and security in healthcare data management.',
                'Leverage electronic health records for improved patient tracking.',
                'Implement telemedicine and remote patient monitoring solutions.'
            ],
            color: 'bg-blue-600'
        },
        'Finance': {
            title: 'Finance',
            description: 'Leverage data analytics and AI to optimize financial operations and risk management...',
            points: [
                'Detect fraud and ensure financial security with AI-powered anomaly detection.',
                'Optimize trading strategies through real-time market data analysis.',
                'Enhance customer experiences with personalized financial services.',
                'Automate risk assessment and compliance reporting.',
                'Implement blockchain and secure payment solutions.'
            ],
            color: 'bg-blue-600'
        },
        'Retail': {
            title: 'Retail',
            description: 'Boost sales and customer engagement with smart retail analytics...',
            points: [
                'Implement AI-driven recommendation engines for personalized shopping experiences.',
                'Optimize supply chain management with predictive analytics.',
                'Enhance customer loyalty with data-driven marketing strategies.',
                'Monitor sales performance in real-time with advanced dashboards.',
                'Streamline omnichannel retail operations with integrated data platforms.'
            ],
            color: 'bg-blue-600'
        },
        'Manufacturing': {
            title: 'Manufacturing',
            description: 'Improve efficiency and productivity with smart manufacturing analytics...',
            points: [
                'Implement IoT and real-time data monitoring for predictive maintenance.',
                'Optimize supply chain operations with AI-powered forecasting.',
                'Reduce production costs through automation and smart analytics.',
                'Enhance quality control with real-time defect detection.',
                'Leverage digital twins to simulate and improve manufacturing processes.'
            ],
            color: 'bg-blue-600'
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-background text-gray-300 rounded-xl shadow-lg">
            <div className="mb-10">
                <h1 className="text-4xl font-light text-blue-400 mb-1">Industry Solutions</h1>
                <h2 className="text-4xl font-bold text-white mb-4">Empowering Businesses Across Sectors</h2>
                <p className="text-xl text-gray-400">Driving innovation and efficiency across diverse industries with data-driven strategies.</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
                {industries.map((industry) => (
                    <button
                        key={industry}
                        onClick={() => setActiveIndustry(industry as IndustryKey)}
                        className={`py-3 px-6 rounded-full transition-all duration-300 ${activeIndustry === industry
                            ? `${industryContent[industry].color} text-white shadow-md`
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                    >
                        {industry}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4 border-l-4 pl-3 border-blue-400">
                        {industryContent[activeIndustry].title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                        {industryContent[activeIndustry].description}
                    </p>
                    <div className="space-y-4 mb-8">
                        {industryContent[activeIndustry].points.map((point, index) => (
                            <div key={index} className="flex items-start">
                                <div className={`p-1 rounded-full ${industryContent[activeIndustry].color} text-white mr-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-300">{point}</p>
                            </div>
                        ))}
                    </div>
                    <a href="/Contact">
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300">
                            <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                            Explore Industry Solutions
                        </button>
                    </a>
                </div>

                <div className="md:w-1/2 relative">
                    <img
                        src="/hero.png"
                        alt="Industry solutions in action"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default IndustriesComponent;
