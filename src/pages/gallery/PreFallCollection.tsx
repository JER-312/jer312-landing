import {galleryImages} from "./galleryImages";

const PreFallCollection = () => {
    const layout = "flex flex-col sm:flex-row gap-4";
    const images = [
        { src: galleryImages.prefall[0], alt: "PreFall", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.prefall[1], alt: "PreFall", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.prefall[2], alt: "PreFall", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.prefall[3], alt: "PreFall", flex: "flex-[4]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.prefall[4], alt: "PreFall", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.prefall[5], alt: "PreFall", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
    ];

    return (
        <div>
            <div className="flex flex-col gap-12 justify-center items-center p-20">
                <div
                    className="flex flex-col gap-3 items-center gilmer-medium text-4xl md:text-6xl gilmer-bold tracking-[-0.05em]">
                    <p>TAN’ ARS NATURA</p>
                    <p>PRE-FALL 2025</p>
                </div>
                <div className="flex gap-12 gilmer-regular text-3xl">
                    <span>4 RD EDITION</span>
                    <span>PARIS</span>
                    <span>MARCH 2025</span>
                </div>
                <p className="w-2xl gilmer-regular text-xl">
                    The fourth collection was born from the snow, water, and mountains
                    of Kyrgyzstan. The main materials are handcrafted fleece and wool.
                    We captured the hues of mountain lakes and expressed their fluidity
                    through painterly felt textures. The collection includes genderless outerwear and bottoms,
                    continuing the line of transformable shapes as a defining element of the brand’s identity.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {[[0, 1], [2, 3], [4, 5]].map((indices, rowIndex) => (
                    <div key={rowIndex} className={layout}>
                        {indices.map((i) => (
                            <div
                                key={i}
                                className={`${images[i].flex} ${images[i].aspect} relative overflow-hidden ${images[i].height}`}
                            >
                                <img
                                    src={images[i].src}
                                    alt={images[i].alt}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* Add additional details here */}
        </div>
    );
};

export default PreFallCollection;