import React from 'react';

const LatestInsightsComponent = () => {
    // Blog posts data constant
    const blogPosts = [
        {
            id: 1,
            title: 'How to Handle Context Transition in Power BI',
            excerpt: 'How to Handle Context Transition in Power BI',

            date: 'March 11, 2025',
            category: 'MICROSOFT POWER PLATFORM',
            slug: '/handle-context-transition'
        },
        {
            id: 2,
            title: 'Uncovering the "How" Behind cdata\'s Award-Winning Workplace',
            excerpt: 'Uncovering the "How" Behind cdata\'s Award-Winning Workplace',

            date: 'March 10, 2025',
            category: 'CDATA UPDATES',
            slug: '/award-winning-workplace'
        },
        {
            id: 3,
            title: 'Why You Should Use Copilot in Microsoft Fabric: A Short Introduction',
            excerpt: 'Why You Should Use Copilot in Fabric: A Short Introduction',

            date: 'March 7, 2025',
            category: 'UNCATEGORIZED',
            slug: '/copilot-introduction'
        },
        {
            id: 4,
            title: 'How to Create a Gauge Chart in Sigma Computing',
            excerpt: 'How to Create a Gauge Chart in Sigma Computing',

            date: 'March 5, 2025',
            category: 'SIGMA COMPUTING',
            slug: '/gauge-chart-sigma'
        }
    ];

    // Function to get category color
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'MICROSOFT POWER PLATFORM':
                return 'text-green-400';
            case 'CDATA UPDATES':
                return 'text-blue-400';
            case 'UNCATEGORIZED':
                return 'text-purple-400';
            case 'SIGMA COMPUTING':
                return 'text-teal-400';
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
