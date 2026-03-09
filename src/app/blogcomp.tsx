import React from 'react';

const LatestInsightsComponent = () => {
    // Blog posts data constant
    const blogPosts = [
        {
            id: 1,
            title: 'The Data-Driven Trap: What Nike\'s $25B Blunder Teaches Data Teams',
            excerpt: 'Why more data doesn\'t mean better decisions — lessons from Nike\'s $25B data-driven blunder.',

            date: 'March 9, 2026',
            category: 'DATA STRATEGY',
            slug: '/Blogs/data-driven-trap-nike-25b-lesson'
        },
        {
            id: 2,
            title: 'ESG in Real Estate: How Data Pipelines Power Green Building Certification',
            excerpt: 'How data engineering teams build pipelines behind LEED, GRESB, and ENERGY STAR certification.',

            date: 'March 6, 2026',
            category: 'DATA ENGINEERING',
            slug: '/Blogs/esg-data-real-estate-certification'
        },
        {
            id: 3,
            title: 'The Complete Redshift to Snowflake Migration Playbook',
            excerpt: 'A 5-phase enterprise playbook for Redshift to Snowflake migration.',

            date: 'March 4, 2026',
            category: 'DATA ENGINEERING',
            slug: '/Blogs/redshift-to-snowflake-migration'
        },
        {
            id: 4,
            title: 'Data Pipeline Observability: Catching Silent Failures',
            excerpt: 'How to build quality gates that catch silent data pipeline failures.',

            date: 'March 1, 2026',
            category: 'DATA ENGINEERING',
            slug: '/Blogs/data-pipeline-observability-silent-failures'
        }
    ];

    // Function to get category color
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'DATA STRATEGY':
                return 'text-orange-400';
            case 'DATA ENGINEERING':
                return 'text-blue-400';
            case 'CDATA UPDATES':
                return 'text-green-400';
            default:
                return 'text-gray-400';
        }
    };

    return (
        <div className="py-12 px-4 bg-background text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center text-white mb-12">Our latest insights</h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                            {/* Card Image with Overlay Text */}
                            <div className="relative h-48 bg-gray-700 overflow-hidden">
                                {/* Hexagon Pattern Background */}
                                <div className="absolute inset-0 opacity-30">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id={`honeycomb-${post.id}`} patternUnits="userSpaceOnUse" width="24" height="24" patternTransform="scale(2)">
                                            <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="#4ade80" strokeWidth="1" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill={`url(#honeycomb-${post.id})`} />
                                    </svg>
                                </div>

                                {/* phData Logo */}
                                <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-70 p-1 rounded">
                                    <div className="text-white flex items-center">
                                        <span className="font-bold text-sm">CData</span>
                                    </div>
                                </div>

                                {/* Article Title */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="font-medium text-sm">{post.excerpt}</h3>

                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <div className={`text-xs font-bold mb-2 ${getCategoryColor(post.category)}`}>{post.category}</div>
                                <h3 className="font-bold text-xl mb-4 text-white">{post.title}</h3>

                                {/* Author and Date Info */}
                                <div className="flex items-center text-sm text-gray-400 mt-4">
                                    <div className="flex items-center ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestInsightsComponent;
