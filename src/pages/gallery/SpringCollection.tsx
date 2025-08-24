import {galleryImages} from "./galleryImages";

const SpringCollection = () => {
    const layout = "flex flex-col sm:flex-row gap-4";
    const images = [
        { src: galleryImages.spring[0], alt: "Spring", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.spring[1], alt: "Spring", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        { src: galleryImages.spring[2], alt: "Spring", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[65vh] sm:h-[90vh] md:h-[100vh]" },
        { src: galleryImages.spring[3], alt: "Spring", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.spring[4], alt: "Spring", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        { src: galleryImages.spring[5], alt: "Spring", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[65vh] sm:h-[80vh] md:h-[90vh]" },
        { src: galleryImages.spring[6], alt: "Spring", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        { src: galleryImages.spring[7], alt: "Spring", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        { src: galleryImages.spring[8], alt: "Spring", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        { src: galleryImages.spring[9], alt: "Spring", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        { src: galleryImages.spring[10], alt: "Spring", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[65vh] sm:h-[80vh] md:h-[90vh]" },
    ];

    return (
        <div>
            <div className="flex flex-col gap-12 justify-center items-center p-20">
                <p className="gilmer-medium text-4xl md:text-6xl gilmer-bold tracking-[-0.05em]">
                    SPRING COLLECTION
                </p>
                <div className="flex gap-12 gilmer-regular text-3xl">
                    <span>3 RD EDITION</span>
                    <span>NEW YORK</span>
                    <span>APRIL 2024</span>
                </div>
                <p className="w-2xl gilmer-regular text-xl">
                    The second collection was shot in New York and explores the concept of ethno-urbanism. At this
                    stage, we focused on creating premium cotton pieces and developed a new interpretation of a print
                    based on the ancient Kyrgyz script. The essential T-shirt became a carrier of cultural identity and
                    personal manifesto, bridging tradition and modernity.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {[[0, 1], [2], [3, 4], [5], [6, 7], [8, 9], [10]].map((indices, rowIndex) => (
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

export default SpringCollection;