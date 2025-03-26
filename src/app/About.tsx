import testBackground from '../assets/test-background.svg';
import movement from '../assets/movement-video.png';
import halfLogo from '../assets/half-logo.svg';

const About = () => {
    return (
        <div className="flex flex-col">
            {/* Value Story Section */}
            <section className="flex flex-col md:flex-row items-center py-10 md:py-20 px-4 md:px-20 bg-white">
                <div className="px-2 md:px-8 mb-4 md:mb-0 md:w-1/2">
                    <h2 className="gilmer-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] tracking-tight leading-none flex flex-col">
                        <span>VALUE</span>
                        <span>STORY</span>
                    </h2>
                </div>
                <div className="px-2 md:px-8 md:w-1/2">
                    <div className="flex flex-col gap-4 gilmer-regular text-sm md:text-base lg:text-lg tracking-tight">
                        <p>
                            The JER 312 clothing brand is all about uniqueness and creativity in image creation, space
                            conservation, and a strong connection to cultural heritage, presented with aesthetic appeal and
                            a focus on environmental consciousness. The idea is to create a multifunctional garment composed
                            of various clothing elements. It will help you explore incredible imagination in choosing an
                            outfit for every mood and weather condition.
                        </p>
                        <p>
                            JER 312's clothing and design utilize high-quality materials that ensure the product's
                            durability and long-lasting wear.
                        </p>
                    </div>
                </div>
            </section>

            {/* Concept Section */}
            <section className="flex flex-col md:flex-row bg-gray-50 py-10 md:py-20 px-4 md:px-20 relative">
                <div className="md:w-2/3 py-4">
                    <h2 className="gilmer-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] tracking-tight leading-tight mb-6">
                        CONCEPT
                    </h2>
                    <div className="flex flex-col gap-6 gilmer-regular text-sm md:text-base lg:text-lg tracking-tight">
                        <p>
                            The goal is to ensure that a person feels comfortable in these clothes through the
                            customization of style and personal choice. Each individual will have the freedom to choose the style that
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
                <div className="md:w-1/3 flex items-center justify-end mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
                    <img
                        src={halfLogo}
                        alt="half logo"
                        className="w-full max-w-xs md:max-w-sm h-auto"
                    />
                </div>
            </section>

            {/* Movement Section */}
            <section
                className="py-20 md:py-40 text-white bg-black bg-cover bg-center"
                style={{ backgroundImage: `url(${testBackground})` }}
            >
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-5 md:px-20">
                    <div className="w-full md:w-2/5">
                        <img src={movement} alt="movement" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-3/5 flex flex-col justify-center">
                        <h2 className="gilmer-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight pb-10 md:pb-14">
                            #JER 312 MOVEMENT
                        </h2>
                        <p className="gilmer-regular text-sm md:text-base lg:text-lg tracking-tight pb-14 md:pb-20">
                            "Discover the journey of timeless fashion with JER 312—where rich cultural
                            heritage, innovative creativity, and a deep commitment to sustainability come together to craft
                            garments that transcend trends and inspire a lifestyle of mindful elegance. Follow us for a closer
                            look at how we blend tradition with modern design to create pieces that are as unique as you
                            are."
                        </p>
                        <h3 className="gilmer-bold text-2xl md:text-3xl lg:text-4xl tracking-tight pb-10 md:pb-14">
                            JOIN US ON INSTAGRAM
                        </h3>
                        <a
                            href="https://www.instagram.com/jer312.st/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 md:h-16 w-full md:w-64 px-8 gilmer-bold text-xl md:text-2xl tracking-tight text-white border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                        >
                            DISCOVER MORE
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;