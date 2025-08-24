import background from '../../assets/background.svg'
import movement from '../../assets/images/about/movement-video.avif';

const Movement = () => (
    <section
        className="py-20 md:py-40 text-white bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
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
);

export default Movement;