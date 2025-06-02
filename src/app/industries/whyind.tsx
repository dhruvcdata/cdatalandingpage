'use client';
import React from 'react';
import { LineChart, Factory, ShoppingCart, HeartPulse, Banknote } from 'lucide-react';

const WhyChooseIndustries = () => {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-medium">Why Choose Our Industry Solutions?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We provide industry-specific expertise to drive innovation, efficiency, and growth tailored to your business sector.
                    </p>
                </div>

                <div className="grid gap-6 mt-12 md:grid-cols-4">
                    <div className="text-center p-6 border rounded-lg shadow-md">
                        <HeartPulse className="size-8 mx-auto text-blue-600" />
                        <h3 className="mt-4 text-xl font-medium">Healthcare Innovation</h3>
                        <p className="mt-2 text-muted-foreground">Transform patient care with data-driven insights, AI diagnostics, and seamless health management.</p>
                    </div>

                    <div className="text-center p-6 border rounded-lg shadow-md">
                        <Banknote className="size-8 mx-auto text-blue-600" />
                        <h3 className="mt-4 text-xl font-medium">Financial Intelligence</h3>
                        <p className="mt-2 text-muted-foreground">Enhance security, risk management, and customer experiences through AI-powered financial solutions.</p>
                    </div>

                    <div className="text-center p-6 border rounded-lg shadow-md">
                        <ShoppingCart className="size-8 mx-auto text-blue-600" />
                        <h3 className="mt-4 text-xl font-medium">Retail Transformation</h3>
                        <p className="mt-2 text-muted-foreground">Boost sales and optimize supply chains with advanced analytics and AI-driven recommendations.</p>
                    </div>

                    <div className="text-center p-6 border rounded-lg shadow-md">
                        <Factory className="size-8  mx-auto text-blue-600" />
                        <h3 className="mt-4 text-xl font-medium">Smart Manufacturing</h3>
                        <p className="mt-2 text-muted-foreground">Leverage IoT, predictive analytics, and automation for efficient and cost-effective production.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseIndustries;
