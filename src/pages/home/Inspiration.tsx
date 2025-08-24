import feltMotif1 from '../../assets/images/home/felt-motif-1.avif';
import yssykKolLake from '../../assets/images/home/yssyk-kol-lake.avif';
import craftsmanshipProcess from '../../assets/images/home/craftsmanship-process.avif';
import finalPiece from '../../assets/images/home/final-piece.avif';

function Inspiration() {
    return (
        <section className="w-full flex flex-col items-center p-16">
            <div className="flex flex-col items-center gap-6 pb-12">
                <p className="text-5xl gilmer-bold">ORIGINS OF TEXTURE</p>
                <p className="text-xl gilmer tracking-tight w-xl">
                    Color palettes and textures are drawn from seasonal Kyrgyz landscapes, transforming nature’s
                    fluidity into tactile motifs.
                </p>
            </div>

            <div className="flex flex-row gap-12 py-12">
                <div className="flex-5 flex flex-col gap-4">
                    <img src={feltMotif1} alt="Felt Motif" className="w-[967px] h-auto object-cover" />
                    <p className="text-lg gilmer-medium">Felt Motif #01</p>
                </div>
                <div className="flex-4 flex flex-col gap-4">
                    <p className="text-md gilmer tracking-tight max-w-xl">
                        At the core of the collection lies felt — a material deeply rooted in nomadic heritage and
                        shaped entirely by hand. Inspired by the fluid surfaces of Kyrgyz lakes, its depth and movement
                        are reimagined in a timeless material born from tradition.
                    </p>
                    <img src={yssykKolLake} alt="Yssyk Kol Lake" className="w-[699px] h-auto object-cover" />
                    <p className="text-lg gilmer-medium">Issyk-Köl Lake</p>
                </div>
            </div>

            <div className="flex flex-row gap-8">
                <div className="flex-8 flex flex-col gap-4 max-w-4xl">
                    <img src={craftsmanshipProcess} alt="Craftsmanship Process" className="w-[1127px] h-[600px] object-cover" />
                    <p className="text-lg gilmer-medium">Craftsmanship Process</p>
                </div>
                <div className="flex-3 flex flex-col gap-4 max-w-xl">
                    <img src={finalPiece} alt="Final Piece" className="w-[553px] h-[600px] object-cover" />
                    <p className="text-lg gilmer-medium">Final Piece</p>
                </div>
            </div>

            <div className="w-full pt-6 pb-12">
                <p className="text-xl gilmer tracking-tighter">
                    We used an ancient felting technique, a savoir-faire passed down through generations, to shape wool
                    into layered compositions. Each piece is the result of careful craftsmanship, echoing the rhythm of
                    water and air and transforming traditional practice into contemporary form. A quiet dialogue emerges
                    within each fiber, bridging past and present.
                </p>
            </div>
        </section>
    );
}

export default Inspiration;