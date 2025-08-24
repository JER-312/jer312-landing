import halfLogo from '../../assets/images/about/half-logo.svg';

const Concept = () => (
    <section className="flex flex-col md:flex-row bg-gray-50 py-10 md:py-20 px-4 md:px-20 relative">
        <div className="md:w-2/3 py-4">
            <h2 className="gilmer-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] tracking-tight leading-tight mb-6">
                CONCEPT
            </h2>
            <div className="flex flex-col gap-6 gilmer-regular text-sm md:text-base lg:text-lg tracking-tight">
                <p>
                    The goal is to ensure that a person feels comfortable in these clothes through the
                    customization of style and personal choice. Each individual will have the freedom to choose the
                    style that
                    suits them best, allowing them to develop their own uniqueness. This type of clothing can be
                    seasonless and become the foundation of a wardrobe, often worn for a long time.
                </p>
                <p>
                    In the first clothing line, transformable outfits featuring Kyrgyz patterns and ornaments
                    were created. All items were made in Kyrgyzstan using high-quality materials that ensure
                    long-lasting wear, are comfortable on the body, and allow for ease of movement.
                </p>
            </div>
        </div>
        <div
            className="md:w-1/3 flex items-center justify-end mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
            <img
                src={halfLogo}
                alt="half logo"
                className="w-full max-w-xs md:max-w-sm h-auto"
            />
        </div>
    </section>
);

export default Concept;