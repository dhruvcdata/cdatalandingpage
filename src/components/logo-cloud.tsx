import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-8 sm:py-16">
            <div className="group relative m-auto max-w-7xl px-4 sm:px-6">
                <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row">
                    <div className="w-full text-center sm:text-end sm:max-w-44 sm:border-r sm:pr-6">
                        <p className="text-sm">Our Clients</p>
                    </div>
                    <div className="relative w-full py-4 sm:py-6 sm:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={40}
                            speed={50}
                            gap={50}>
                            {[
                                { src: "/logos/meta.png", alt: "Meta Logo" },
                                { src: "/logos/bn.png", alt: "BN Logo" },
                                { src: "/logos/nax.webp", alt: "Nax Logo" },
                                { src: "/logos/lazy.png", alt: "Lazy Logo" }
                            ].map((logo, index) => (
                                <div key={index} className="flex items-center justify-center px-4">
                                    <img
                                        className="h-12 sm:h-20 w-auto object-contain dark:invert"
                                        src={logo.src}
                                        alt={logo.alt}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-12 sm:w-20 z-10"></div>
                        <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-12 sm:w-20 z-10"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 z-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 z-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}