import Collection from "./Collection";
import image_r1_1 from "../../assets/gallery/prefall/image-r1-1.avif";
import image_r1_2 from "../../assets/gallery/prefall/image-r1-2.avif";
import image_r2_1 from "../../assets/gallery/prefall/image-r2-1.avif";
import image_r2_2 from "../../assets/gallery/prefall/image-r2-2.avif";
import image_r3_1 from "../../assets/gallery/prefall/image-r3-1.avif";
import image_r3_2 from "../../assets/gallery/prefall/image-r3-2.avif";

const rows = [
    {
        images: [
            { src: image_r1_1, alt: "Pre Fall piece 1", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r1_2, alt: "Pre Fall piece 2", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r2_1, alt: "Pre Fall piece 3", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r2_2, alt: "Pre Fall piece 4", flex: "flex-[4]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r3_1, alt: "Pre Fall piece 5", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" }, // Replaced image_r1_1
            { src: image_r3_2, alt: "Pre Fall piece 6", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
];

const PreFallCollection = () => <Collection title="Pre Fall Collection" rows={rows} />;

export default PreFallCollection;