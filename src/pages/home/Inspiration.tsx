import feltMotif1 from "../../assets/images/home/felt-motif-1.avif";
import kolTorLake from "../../assets/images/home/kol-tor-lake.avif";
import beldemchiCape from "../../assets/images/home/beldemchi-cape.avif";
import feltMotif2 from "../../assets/images/home/felt-motif-2.avif";
import sonKolLake from "../../assets/images/home/son-kol-lake.avif";
import layeredHakama from "../../assets/images/home/layered-hakama.avif";

function Inspiration() {
    return (
        <>
            <section className="py-24 bg-white">
                <div className="w-full py-8">
                    <h2 className="gilmer-bold text-5xl md:text-6xl mb-16 text-center">INSPIRATION</h2>

                    <p className="gilmer-medium text-xl md:text-2xl text-center mb-16 max-w-4xl mx-auto">
                        Color palettes and textures are drawn from seasonal Kyrgyz landscapes, transforming nature's
                        fluidity into tactile motifs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr] gap-4 px-8 md:px-16">
                        {/* Felt Motif #01 */}
                        <div className="flex flex-col items-center w-full">
                            <h3 className="gilmer-regular text-2xl mb-4 text-center">Felt Motif #01</h3>
                            <div className="overflow-hidden w-full h-[60vh]">
                                <img
                                    src={feltMotif1}
                                    alt="Felt Motif #01 - Inspired by Kyrgyz seasonal landscapes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Köl-Tor Lake */}
                        <div className="flex flex-col items-center w-full">
                            <h3 className="gilmer-regular text-2xl mb-4 text-center">Köl-Tor Lake</h3>
                            <div className="overflow-hidden w-full h-[60vh]">
                                <img
                                    src={kolTorLake}
                                    alt="Köl-Tor Lake - Reflecting Kyrgyz natural fluidity"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Beldemchi Cape */}
                        <div className="flex flex-col items-center w-full">
                            <h3 className="gilmer-regular text-2xl mb-4 text-center">Beldemchi Cape</h3>
                            <div className="overflow-hidden w-full h-[60vh]">
                                <img
                                    src={beldemchiCape}
                                    alt="Beldemchi Cape - A tactile motif from Kyrgyz nature"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr] gap-4 px-8 md:px-16 mt-24">
                        {/* Felt Motif #02 */}
                        <div className="flex flex-col items-center w-full">
                            <h3 className="gilmer-regular text-2xl mb-4 text-center">Felt Motif #02</h3>
                            <div className="overflow-hidden w-full h-[60vh]">
                                <img
                                    src={feltMotif2}
                                    alt="Felt Motif #02 - Inspired by Kyrgyz seasonal landscapes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Son'-Köl Lake */}
                        <div className="flex flex-col items-center w-full">
                            <h3 className="gilmer-regular text-2xl mb-4 text-center">Son'-Köl Lake</h3>
                            <div className="overflow-hidden w-full h-[60vh]">
                                <img
                                    src={sonKolLake}
                                    alt="Son'-Köl Lake - Reflecting Kyrgyz natural fluidity"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Layered Hakama */}
                        <div className="flex flex-col items-center w-full">
                            <h3 className="gilmer-regular text-2xl mb-4 text-center">Layered Hakama</h3>
                            <div className="overflow-hidden w-full h-[60vh]">
                                <img
                                    src={layeredHakama}
                                    alt="Layered Hakama - A tactile motif from Kyrgyz nature"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inspiration;