import fullLogo from '../../assets/images/about/full-logo.svg';
import SplitText from "../../components/motion/SplitText.tsx";
import Reveal from "../../components/motion/Reveal.tsx";

const BrandConcept = () => (
    <section className="flex flex-col lg:flex-row max-lg:gap-12 py-12 lg:py-20 px-5 lg:px-20">
        <div className="flex-1 flex flex-col justify-around items-center max-lg:gap-8">
            <SplitText as="h2" className="gilmer-bold text-5xl sm:text-7xl lg:text-8xl" text="CONCEPT"/>
            <div className="flex flex-col gap-4 w-full lg:w-xl gilmer text-lg lg:text-xl">
                <Reveal as="p">
                    The goal is to ensure that each person feels comfortable in these clothes through the customization
                    of personal style and expression. Style becomes a medium through which people showcase their
                    uniqueness.
                </Reveal>
                <Reveal as="p" delay={120}>
                    This type of clothing is seasonless and can become the foundation of a wardrobe, often worn over a
                    long period of time.
                </Reveal>
            </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
            <Reveal
                as="img"
                src={fullLogo}
                alt="JER312 logo"
                className="w-full max-w-60 sm:max-w-xs lg:max-w-sm h-auto"
            />
        </div>
    </section>
);

export default BrandConcept;