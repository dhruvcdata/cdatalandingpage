"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'

// Define types for our case study data
type Industry =
    | 'All'
    | 'Retail & CPG'
    | 'Financial Services'
    | 'Manufacturing'
    | 'Healthcare'
    | 'Technology'
    | 'Legal'
    | 'Marketing'
    | 'Talent Solutions';

interface CaseStudy {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    industry: Industry;
    link: string;
}

// Sample case studies data
const CASE_STUDIES: CaseStudy[] = [
    {
        id: '1',
        title: 'Fortune 500 BioTech & Pharma Company',
        description: 'Explore how a large biotechnology and pharmaceuticals company modernized its demand planning and forecasting process for manufacturing in Snowflake by working with phData',
        imageUrl: 'https://i0.wp.com/www.phdata.io/wp-content/uploads/2025/02/case-study-portrait-1.jpg',
        industry: 'Healthcare',
        link: '/case-studies/biotech-pharma'
    },
    {
        id: '2',
        title: 'Leading Speciality Insurance Provider',
        description: 'Discover how a leading Insurance Provider fully migrates its SQL Server database to Snowflake while utilizing modern data stack technologies like Qlik Replicate, dbt, DataOps.live, & Power BI',
        imageUrl: 'https://i0.wp.com/www.phdata.io/wp-content/uploads/2025/02/case-study-portrait-1.jpg',

        industry: 'Financial Services',
        link: '/case-studies/insurance-provider'
    },
    {
        id: '3',
        title: 'Fast Casual Restaurant Chain',
        description: 'Learn how this growing restaurant brand leveraged data analytics to optimize menu offerings and supply chain management with our cloud solutions',
        imageUrl: 'https://i0.wp.com/www.phdata.io/wp-content/uploads/2025/02/case-study-portrait-1.jpg',

        industry: 'Retail & CPG',
        link: '/case-studies/restaurant-chain'
    },
    {
        id: '4',
        title: 'Real Estate Management Firm',
        description: 'See how we helped a property management company modernize their tenant data system and gain valuable insights through predictive analytics',
        imageUrl: 'https://i0.wp.com/www.phdata.io/wp-content/uploads/2025/02/case-study-portrait-1.jpg',

        industry: 'Financial Services',
        link: '/case-studies/real-estate-firm'
    },
    // Add more case studies as needed
];

// List of all industries for the toggle
const INDUSTRIES: Industry[] = [
    'All',
    'Retail & CPG',
    'Financial Services',
    'Manufacturing',
    'Healthcare',
    'Technology',
    'Legal',
    'Marketing',
    'Talent Solutions'
];

const CaseStudiesShowcase: React.FC = () => {
    const [selectedIndustry, setSelectedIndustry] = useState<Industry>('All');

    // Filter case studies based on selected industry
    const filteredCaseStudies = selectedIndustry === 'All'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(study => study.industry === selectedIndustry);

    return (
        <div className="bg-background pt-[0vh] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <section className="py-24 ">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center">
                            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Case Studies</h2>
                            <p className="mt-4">Explore the latest data & AI journey stories from our customers.</p>


                        </div>
                    </div>
                </section>

                {/* Industry Toggle */}
                <div className="overflow-x-auto mb-8">
                    <div className="flex space-x-2 pb-4">
                        {INDUSTRIES.map((industry) => (
                            <button
                                key={industry}
                                className={`px-4 py-2 rounded-md whitespace-nowrap ${selectedIndustry === industry
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-background border-2 border-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                onClick={() => setSelectedIndustry(industry)}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCaseStudies.map((study) => (
                        <div
                            key={study.id}
                            className="bg-background  border-gray-700 border rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={study.imageUrl}
                                    alt={study.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {study.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {study.description}
                                </p>
                                <a
                                    href={study.link}
                                    className="inline-block text-blue-400 hover:text-blue-300 font-medium"
                                >
                                    READ THE CASE STUDY →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesShowcase;