export default function LogoCloud() {
    return (
        <section className="bg-background py-8">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-lg font-medium">Technologies We Work With</h2>
                <div className="mx-auto mt-20 grid grid-cols-3 items-center justify-center gap-x-4 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-16 sm:gap-y-12">
                    {[
                        { src: "/logos/auzure.avif", alt: "Microsoft Azure", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/aws.avif", alt: "Amazon Web Services", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/db.avif", alt: "Databricks", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/gbq.avif", alt: "Google BigQuery", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/gcp.avif", alt: "Google Cloud Platform", maxHeight: "h-10 sm:h-14" },
                        { src: "/logos/snow.avif", alt: "Snowflake", maxHeight: "h-10 sm:h-14" }
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