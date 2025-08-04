import Collection from "./Collection";
import image_r1_1 from "../../assets/gallery/summer/image-r1-1.avif";
import image_r2_1 from "../../assets/gallery/summer/image-r2-1.avif";
import image_r2_2 from "../../assets/gallery/summer/image-r2-2.avif";
import image_r2_3 from "../../assets/gallery/summer/image-r2-3.avif";
import image_r3_1 from "../../assets/gallery/summer/image-r3-1.avif";
import image_r3_2 from "../../assets/gallery/summer/image-r3-2.avif";
import image_r4_1 from "../../assets/gallery/summer/image-r4-1.avif";
import image_r4_2 from "../../assets/gallery/summer/image-r4-2.avif";
import image_r5_1 from "../../assets/gallery/summer/image-r5-1.avif";

const rows = [
    {
        images: [
            { src: image_r1_1, alt: "Summer piece 1", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r2_1, alt: "Summer piece 2", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r2_2, alt: "Summer piece 3", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r2_3, alt: "Summer piece 4", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r3_1, alt: "Summer piece 5", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r3_2, alt: "Summer piece 6", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r3_2, alt: "Summer piece 7", flex: "flex-[2]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r4_1, alt: "Summer piece 8", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
            { src: image_r4_2, alt: "Summer piece 9", flex: "flex-[4]", aspect: "aspect-square", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r5_1, alt: "Summer piece 10", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[45vh] sm:h-[60vh] md:h-[70vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
];

const SummerCollection = () => <Collection title="Summer Collection" rows={rows} />;

export default SummerCollection;