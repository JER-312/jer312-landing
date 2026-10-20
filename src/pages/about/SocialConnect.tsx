import image from '../../assets/images/about/i.avif';
import SplitText from "../../components/motion/SplitText.tsx";
import Reveal from "../../components/motion/Reveal.tsx";

const SocialConnect = () => {
    return (
        <section className="bg-black">
            <div className="flex flex-col lg:flex-row px-5 lg:px-24 py-16 lg:py-36 container-site">
                <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
                    <Reveal
                        as="img"
                        src={image}
                        alt="Instagram page"
                        className="w-full max-w-xs lg:max-w-sm h-auto"
                    />
                </div>
                <div className="flex-1 flex flex-col text-white gilmer tracking-tight gap-8">
                    <div className="flex-6 flex flex-col justify-center gap-4">
                        <SplitText as="h2" className="gilmer-medium text-2xl sm:text-3xl" text="JER COMMUNITY IN SOCIALS" stagger={20}/>
                        <Reveal as="p" delay={200} className="text-sm sm:text-base">
                            Each JER collection is accompanied by an editorial layout. It reveals
                            the inspiration, textures, and cultural codes behind the designs. These
                            stories open the creative process and showcase pieces that reflect our
                            vision. Follow us for a closer look at the stories and designs behind
                            each collection.
                        </Reveal>
                    </div>
                    <div className="flex-4 flex flex-col gap-4">
                        <SplitText as="h3" className="gilmer-medium text-lg sm:text-xl" text="JOIN US ON INSTAGRAM" stagger={20}/>
                        <a
                            href="https://www.instagram.com/jer312.st/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border-2 px-3 py-1 max-lg:py-3 rounded-xl text-center text-sm sm:text-base hover:bg-white hover:text-black transition-colors w-fit"
                        >
                            DISCOVER MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialConnect;