'use client';
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/hero5-header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import LogoCloud from './logo-cloud'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <div className="">
                <div>
                    {/* Adjusted padding for mobile */}
                    <div className="pb-16 pt-16 md:pb-32 bg-background sm:pb-24 sm:pt-12 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                {/* Responsive font sizes */}
                                <h1 className="mt-6 max-w-2xl z-11 text-balance text-4xl font-medium sm:text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                                    Expert Data & AI Services
                                </h1>

                                {/* Adjusted margin and text size */}
                                <p className="mt-6 max-w-2xl text-pretty z-11 text-base sm:text-lg md:mt-8">
                                    Creating a powerhouse in data modernization and AI driven transformation
                                </p>

                                {/* Button container adjustments */}
                                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2 lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-4 text-sm sm:px-5 sm:text-base z-11">
                                        <Link href="/#cta">
                                            <span className="text-nowrap">Get Free Assessment</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-4 text-sm sm:px-5 sm:text-base">
                                        <Link href="/Contact">
                                            <span className="text-nowrap">Contact Us</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Lottie animation adjustments */}
                            <DotLottieReact
                                src="https://lottie.host/b6b86012-06be-4fdb-b534-fd58a8793da4/g4Wi1XsXFF.lottie"
                                loop
                                className="z-1 order-first ml-auto h-48 w-full object-cover sm:h-64 lg:absolute lg:inset-0 lg:-right-20 lg:-top-20 lg:order-last lg:h-[50vh] lg:w-2/3 lg:object-contain"
                                autoplay
                            />
                        </div>
                    </div>
                </div>
            </div>
            <LogoCloud />
        </>
    )
}