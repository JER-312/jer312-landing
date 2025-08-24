import { galleryImages } from "./galleryImages";

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
        <div className="mb-[10vh]">
            <h2 className="text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] mb-8">
                Pre Fall Collection
            </h2>
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