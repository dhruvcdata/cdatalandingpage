import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
    return (
        <a href={link} className="block bg-background rounded-xl border border-gray-800 shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500">
            <div className="text-blue-500 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white mb-4">{description}</p>
            <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </span>
        </a>
    );
};

const DataServicesGrid = () => {
    const industries = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" /></svg>,
            title: "Real Estate",
            description: "Data solutions for the real estate industry.",
            link: "/industries/real-estate"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-3 6-3-6" /></svg>,
            title: "Health & Wellness",
            description: "Analytics for fitness, patient care, and operations.",
            link: "/industries/health-wellness"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-9 6h9" /></svg>,
            title: "Retail & Consumer Goods",
            description: "Customer analytics, supply chain, and pricing solutions.",
            link: "/industries/retail-consumer-goods"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6M9 12h6M9 16h6" /></svg>,
            title: "Finance & Public Services",
            description: "Fraud detection, smart city solutions, and compliance analytics.",
            link: "/industries/finance-public-services"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l6 6-6 6-6-6 6-6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 18h12M6 22h12" /></svg>,
            title: "Hospitality & SMBs",
            description: "Data solutions for hospitality and small businesses.",
            link: "/industries/hospitality-smbs"
        }
    ];

    return (
        <div className="w-full bg-background px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <ServiceCard
                            key={index}
                            icon={industry.icon}
                            title={industry.title}
                            description={industry.description}
                            link={industry.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataServicesGrid;