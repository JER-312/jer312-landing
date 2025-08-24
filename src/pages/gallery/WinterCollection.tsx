import {galleryImages} from "./galleryImages";

const WinterCollection = () => {
    const layout = "flex flex-col sm:flex-row gap-4";
    const images = [
        { src: galleryImages.winter[0], alt: "Winter", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[1], alt: "Winter", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[2], alt: "Winter", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        { src: galleryImages.winter[3], alt: "Winter", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[4], alt: "Winter", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[5], alt: "Winter", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        { src: galleryImages.winter[6], alt: "Winter", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[7], alt: "Winter", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[8], alt: "Winter", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[9], alt: "Winter", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[10], alt: "Winter", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.winter[11], alt: "Winter", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
    ];

    return (
        <div>
            <div className="flex flex-col gap-12 justify-center items-center p-20">
                <p className="gilmer-medium text-4xl md:text-6xl gilmer-bold tracking-[-0.05em]">
                    WINTER COLLECTION
                </p>
                <div className="flex gap-12 gilmer-regular text-3xl">
                    <span>1 ST EDITION</span>
                    <span>ROME</span>
                    <span>FEBRUARY 2024</span>
                </div>
                <p className="w-2xl gilmer-regular text-xl">
                    The first capsule by JER 312 debuted in Rome, though its artistic forms were born in Bishkek. The
                    collection centers on a transformable bomber with graphic accents, along with the first prototypes
                    of docker hats inspired by the silhouette of a yurt and the beldemchi, as a reimagined archival
                    element of women's dress presented in new graphics.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {[[0, 1], [2], [3, 4], [5], [6, 7], [8, 9, 10], [11]].map((indices, rowIndex) => (
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

export default WinterCollection;