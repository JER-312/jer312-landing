import image from '../../assets/images/about/i.avif';

const SocialConnect = () => {
    return (
        <section className="flex flex-col md:flex-row px-6 md:px-24 py-16 md:py-36 bg-black">
            <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
                <img
                    src={image}
                    alt="Instagram page"
                    className="w-full max-w-xs md:max-w-sm h-auto"
                />
            </div>
            <div className="flex-1 flex flex-col text-white gilmer tracking-tight gap-8">
                <div className="flex-6 flex flex-col justify-center gap-4">
                    <h2 className="gilmer-medium text-2xl md:text-3xl">
                        JER COMMUNITY IN SOCIALS
                    </h2>
                    <p className="text-sm md:text-base">
                        Each JER collection is accompanied by an editorial layout. It reveals
                        the inspiration, textures, and cultural codes behind the designs. These
                        stories open the creative process and showcase pieces that reflect our
                        vision. Follow us for a closer look at the stories and designs behind
                        each collection.
                    </p>
                </div>
                <div className="flex-4 flex flex-col gap-4">
                    <h3 className="gilmer-medium text-lg md:text-xl">
                        JOIN US ON INSTAGRAM
                    </h3>
                    <a
                        href="https://www.instagram.com/jer312.st/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 px-3 py-1 rounded-xl text-center text-sm md:text-base hover:bg-white hover:text-black transition-colors w-fit"
                    >
                        DISCOVER MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialConnect;