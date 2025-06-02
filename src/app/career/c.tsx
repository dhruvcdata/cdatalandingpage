import React from 'react';
import { Briefcase, MapPin, Clock, Users, Mail } from 'lucide-react';

const CareersPage: React.FC = () => {
    return (
        <div className="bg-background pt-[10vh] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Careers at CData</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join our team of data experts and help organizations unlock the value of their data
                    </p>
                </div>

                {/* Company Values Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-white mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-background rounded-lg p-6 border border-gray-700 text-center">
                            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Collaboration</h3>
                            <p className="text-gray-300">
                                We believe in the power of teamwork and knowledge sharing to deliver exceptional results.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 border border-gray-700 text-center">
                            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Innovation</h3>
                            <p className="text-gray-300">
                                We continuously explore new technologies and methodologies to solve complex data challenges.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 border border-gray-700 text-center">
                            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Excellence</h3>
                            <p className="text-gray-300">
                                We are committed to excellence in everything we do, from code quality to client service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Current Openings Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-white mb-8 text-center">Current Openings</h2>

                    <div className="bg-background rounded-lg p-8 border border-gray-700 text-center">
                        <div className="mb-6">
                            <svg className="w-16 h-16 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4">No Current Openings</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                            We're not actively hiring at the moment, but we're always on the lookout for exceptional talent.
                            Send us your resume to be considered for future opportunities as they become available.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300">
                            Submit Your Resume
                        </button>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-white mb-8 text-center">Why Join Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-background rounded-lg p-6 border border-gray-700">
                            <h3 className="text-xl font-medium text-white mb-3">Competitive Compensation</h3>
                            <p className="text-gray-300">
                                We offer competitive salaries, performance bonuses, and equity options to reward your contributions.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 border border-gray-700">
                            <h3 className="text-xl font-medium text-white mb-3">Flexible Work Environment</h3>
                            <p className="text-gray-300">
                                Enjoy flexible working hours and remote work options to maintain a healthy work-life balance.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 border border-gray-700">
                            <h3 className="text-xl font-medium text-white mb-3">Professional Development</h3>
                            <p className="text-gray-300">
                                Access to training resources, certification programs, and conferences to grow your skills.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 border border-gray-700">
                            <h3 className="text-xl font-medium text-white mb-3">Comprehensive Benefits</h3>
                            <p className="text-gray-300">
                                Medical, dental, and vision insurance, 401(k) matching, and generous paid time off.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-background rounded-lg p-8 border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-6">Stay Connected</h2>
                    <p className="text-gray-300 mb-6">
                        Don't see a role that matches your skills? We'd still love to hear from you for future opportunities.
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <a href="mailto:info@Cdatainsights.com" className="text-blue-400 hover:text-blue-300">info@cdatainsights.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;