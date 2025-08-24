import { galleryImages } from "./galleryImages";

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
        <div className="mb-[10vh]">
            <h2 className="text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] mb-8">
                Winter Collection
            </h2>
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