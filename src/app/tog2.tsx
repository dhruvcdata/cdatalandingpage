'use client';
import React, { useState } from 'react';

const DataRevivalComponent = () => {
    type TabKey = 'Data Engineering' | 'AI & Machine Learning' | 'Data Platforms' | 'Data Visualization';
    const [activeTab, setActiveTab] = useState<TabKey>('Data Engineering');

    const tabs = [
        'Data Platforms',
        'Data Engineering',
        'Data Visualization',
        'AI & Machine Learning'
    ];
    const tabContent: Record<TabKey, { title: string; description: string; points: string[]; color: string }> = {

        'Data Engineering': {
            title: 'Data Engineering',
            description: 'Build robust data pipelines and infrastructure...',
            points: [
                'Design and implement scalable data pipelines tailored to your business needs.',
                'Establish robust ETL processes for reliable data integration.',
                'Optimize data storage and retrieval systems for maximum performance.',
                'Implement data governance frameworks that ensure quality and compliance.',
                'Develop real-time data streaming capabilities for timely decision-making.'
            ],
            color: 'bg-blue-600'
        },
        'Data Platforms': {
            title: 'Data Platforms',
            description: 'Architect and manage scalable data environments...',
            points: [
                'Architect cloud-native data platforms that reduce costs while enhancing capabilities.',
                'Create unified data ecosystems that break down organizational silos.',
                'Implement security protocols that protect sensitive information at every level.',
                'Design flexible infrastructure that scales with your growing data requirements.',
                'Build self-service capabilities that democratize data access across your organization.'
            ],
            color: 'bg-blue-600'
        },
        'Data Visualization': {
            title: 'Data Visualization',
            description: 'Turn complex data into actionable insights through powerful visualizations...',
            points: [
                'Create intuitive dashboards that make complex data instantly understandable.',
                'Develop interactive reports that allow users to explore insights independently.',
                'Design custom visualizations that reveal hidden patterns and relationships.',
                'Implement KPI monitoring systems that track business-critical metrics.',
                'Build presentation-ready visuals that communicate insights to all stakeholders.'
            ],
            color: 'bg-blue-600'
        },
        'AI & Machine Learning': {
            title: 'AI & Machine Learning',
            description: 'Leverage AI and machine learning to drive business innovation...',
            points: [
                'Develop predictive models that forecast trends and anticipate market changes.',
                'Implement natural language processing to extract insights from unstructured data.',
                'Create recommendation engines that enhance customer experiences.',
                'Design anomaly detection systems that identify unusual patterns and potential issues.',
                'Build machine learning pipelines that continuously improve through automated learning.'
            ],
            color: 'bg-blue-600'
        }
    };


    return (
        <div className="max-w-6xl mx-auto p-6 bg-background text-gray-300 rounded-xl shadow-lg">
            <div className="mb-10">
                <h1 className="text-4xl font-light text-blue-400 mb-1">Data Revival &</h1>
                <h2 className="text-4xl font-bold text-white mb-4">Democratization Solutions</h2>
                <p className="text-xl text-gray-400">Transform Raw Data into Strategic Business Advantage</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as TabKey)}
                        className={`py-3 px-6 rounded-full transition-all duration-300 ${activeTab === tab
                            ? `${tabContent[tab].color} text-white shadow-md`
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4 border-l-4 pl-3 border-blue-400">
                        {tabContent[activeTab].title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                        {tabContent[activeTab].description}
                    </p>
                    <div className="space-y-4 mb-8">
                        {tabContent[activeTab].points.map((point, index) => (
                            <div key={index} className="flex items-start">
                                <div className={`p-1 rounded-full ${tabContent[activeTab].color} text-white mr-2`}>
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
                            Invest In Your Data Today
                        </button>
                    </a>
                </div>

                <div className="md:w-1/2 relative">
                    <img
                        src="/hero.png"
                        alt="Data professionals collaborating"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default DataRevivalComponent;
