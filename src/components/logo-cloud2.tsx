export default function LogoCloud() {
    return (
        <section className="bg-background py-8">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                <div className="mx-auto mt-20 grid grid-cols-3 items-center justify-center gap-x-4 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-16 sm:gap-y-12">
                    {[
                        { src: "/logos/auzure.avif", alt: "Nvidia Logo", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/aws.avif", alt: "Column Logo", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/db.avif", alt: "GitHub Logo", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/gbq.avif", alt: "Nike Logo", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/gcp.avif", alt: "Laravel Logo", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/snow.avif", alt: "Lilly Logo", maxHeight: "h-10 sm:h-14" }
                    ].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-2">
                            <img
                                className={`${logo.maxHeight} w-auto object-contain dark:invert`}
                                src={logo.src}
                                alt={logo.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}