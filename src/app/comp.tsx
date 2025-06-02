import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DataScienceHero = () => {
    return (
        <div className="w-full bg-white px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-6xl">
                {/* Header and CTA Section */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Data Science and
                        <br />
                        artificial intelligence
                    </h1>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <p className="ml-3 text-gray-600">Little our played lively she adieux far sussex.</p>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <p className="ml-3 text-gray-600">Removed demands expense account in outward tedious do. Particular way thoroughly.</p>
                        </div>
                    </div>

                    <button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white font-medium py-3 px-6 rounded-full">
                        START A PROJECT
                    </button>
                </div>

                {/* Illustration */}
                <div className="mb-10 relative">
                    <div className="w-full h-64 md:h-80 bg-gray-900 rounded-lg overflow-hidden">
                        <Image
                            src="/data-analytics-isometric.svg"
                            alt="Data Analytics Illustration"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                            priority
                        />
                    </div>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Explore Our Data Services
                    </h2>

                    <p className="text-gray-600">
                        We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state.
                        Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of
                        advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward
                        thrown dining so he my around to.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataScienceHero;