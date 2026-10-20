import feltMotif1 from '../../assets/images/home/felt-motif-1.avif';
import yssykKolLake from '../../assets/images/home/yssyk-kol-lake.avif';
import craftsmanshipProcess from '../../assets/images/home/craftsmanship-process.avif';
import finalPiece from '../../assets/images/home/final-piece.avif';
import SplitText from "../../components/motion/SplitText.tsx";
import Reveal from "../../components/motion/Reveal.tsx";

function Inspiration() {
    return (
        <section className="w-full flex flex-col items-center px-5 py-12 md:p-12 lg:p-16 container-site">
            <div className="flex flex-col items-center gap-6 pb-12">
                <SplitText as="h2" className="text-3xl md:text-4xl lg:text-5xl gilmer-bold text-center" text="ORIGINS OF TEXTURE"/>
                <Reveal as="p" delay={300} className="text-lg lg:text-xl gilmer tracking-tight max-w-3xl text-center">
                    Color palettes and textures are drawn from seasonal Kyrgyz landscapes, transforming nature's
                    fluidity into tactile motifs.
                </Reveal>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 py-8 lg:py-12 w-full">
                <div className="flex-1 lg:flex-[5] flex flex-col gap-4">
                    <img
                        src={feltMotif1}
                        alt="Felt Motif"
                        className="w-full h-auto object-cover min-h-[300px] max-h-[70vh]"
                    />
                    <p className="text-lg gilmer-medium">Felt Motif #01</p>
                </div>
                <div className="flex-1 lg:flex-[4] flex flex-col gap-4">
                    <Reveal as="p" className="text-base gilmer tracking-tight mb-auto">
                        At the core of the collection lies felt – a material deeply rooted in nomadic heritage and
                        shaped entirely by hand. Inspired by the fluid surfaces of Kyrgyz lakes, its depth and movement
                        are reimagined in a timeless material born from tradition.
                    </Reveal>
                    <img
                        src={yssykKolLake}
                        alt="Yssyk Kol Lake"
                        className="w-full h-auto object-cover min-h-[250px] max-h-[50vh]"
                    />
                    <p className="text-lg gilmer-medium">Issyk-Köl Lake</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
                <div className="flex-1 lg:flex-[8] flex flex-col gap-4">
                    <img
                        src={craftsmanshipProcess}
                        alt="Craftsmanship Process"
                        className="w-full object-cover h-[50svh] md:h-[65svh] lg:h-[75vh] max-h-[900px] min-[1441px]:max-h-[675px]"
                    />
                    <p className="text-lg gilmer-medium">Craftsmanship Process</p>
                </div>
                <div className="flex-1 lg:flex-[3] flex flex-col gap-4">
                    <img
                        src={finalPiece}
                        alt="Final Piece"
                        className="w-full object-cover h-[50svh] md:h-[65svh] lg:h-[75vh] max-h-[900px] min-[1441px]:max-h-[675px]"
                    />
                    <p className="text-lg gilmer-medium">Final Piece</p>
                </div>
            </div>

            <div className="w-full pt-10 md:p-12">
                <Reveal as="p" className="text-lg lg:text-xl gilmer tracking-tighter text-center lg:text-left">
                    We used an ancient felting technique, a savoir-faire passed down through generations, to shape wool
                    into layered compositions. Each piece is the result of careful craftsmanship, echoing the rhythm of
                    water and air and transforming traditional practice into contemporary form. A quiet dialogue emerges
                    within each fiber, bridging past and present.
                </Reveal>
            </div>
        </section>
    );
}

export default Inspiration;