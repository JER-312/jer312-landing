import SplitText from "../../components/motion/SplitText.tsx";
import Reveal from "../../components/motion/Reveal.tsx";

const ValueStory = () => (
    <section className="flex flex-col lg:flex-row justify-between items-center max-lg:gap-10 py-12 lg:py-20 px-5 lg:px-20">
        <div className="flex-1 flex justify-center">
            <h2 className="flex flex-col gap-4 items-center gilmer-bold text-5xl sm:text-7xl lg:text-8xl">
                <SplitText text="VALUE"/>
                <SplitText text="STORY" delay={180}/>
            </h2>
        </div>
        <div className="flex-1 lg:px-8">
            <div className="flex flex-col gap-4 gilmer text-lg lg:text-xl">
                <Reveal as="p" delay={200}>
                    JER 312 is a contemporary nomadic fashion brand. We merge ancestral savoir-faire with transformable
                    design, reimagining traditional nomadic craftsmanship for today. Our work introduces a distinct
                    aesthetic and rhythm into fashion that is drawn from the raw beauty and visual language of the
                    mountains.
                </Reveal>
                <Reveal as="p" delay={320}>
                    Our core values include sustainability through limited production and durable materials and material
                    innovation.
                </Reveal>
            </div>
        </div>
    </section>
);

export default ValueStory;