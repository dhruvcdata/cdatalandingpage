import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                    Empowering Businesses with Data-Driven Solutions
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            At <span className="text-accent-foreground font-bold">CData Insights</span>, we specialize in transforming raw data into actionable insights. Our expertise spans across data engineering, AI/ML, digital marketing, and more, helping businesses unlock their full potential.
                        </p>
                        <p className="text-muted-foreground">
                            Whether you're looking to streamline your data pipelines, build scalable platforms, or leverage cutting-edge AI technologies, we provide tailored solutions to meet your unique needs.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Fast & Efficient</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    We deliver streamlined data solutions that optimize performance and reduce operational costs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Innovative</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Our cutting-edge AI/ML and data visualization tools empower smarter decision-making.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image
                                src="/data-illustration-dark.png"
                                className="hidden rounded-[15px] dark:block"
                                alt="Data illustration dark"
                                width={1206}
                                height={612}
                            />
                            <Image
                                src="/data-illustration-light.png"
                                className="rounded-[15px] shadow dark:hidden"
                                alt="Data illustration light"
                                width={1206}
                                height={612}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}