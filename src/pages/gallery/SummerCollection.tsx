import { galleryImages } from "./galleryImages";

const SummerCollection = () => {
    const layout = "flex flex-col sm:flex-row gap-4";
    const images = [
        { src: galleryImages.summer[0], alt: "Summer", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.summer[1], alt: "Summer", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.summer[2], alt: "Summer", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.summer[3], alt: "Summer", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.summer[4], alt: "Summer", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[65vh] sm:h-[80vh] md:h-[90vh]" },
        { src: galleryImages.summer[5], alt: "Summer", flex: "flex-[2]", aspect: "aspect-square", height: "h-[65vh] sm:h-[80vh] md:h-[90vh]" },
        { src: galleryImages.summer[6], alt: "Summer", flex: "flex-[2]", aspect: "aspect-square", height: "h-[65vh] sm:h-[80vh] md:h-[90vh]" },
        { src: galleryImages.summer[7], alt: "Summer", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.summer[8], alt: "Summer", flex: "flex-[4]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.summer[9], alt: "Summer", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
    ];

    return (
        <div className="mb-[10vh]">
            <h2 className="text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] mb-8">
                Summer Collection
            </h2>
            <div className="flex flex-col gap-4">
                {[[0], [1, 2, 3], [4, 5, 6], [7, 8], [9]].map((indices, rowIndex) => (
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

export default SummerCollection;