import Collection from "./Collection";
import image_r1_1 from "../../assets/gallery/winter/image-r1-1.avif";
import image_r1_2 from "../../assets/gallery/winter/image-r1-2.avif";
import image_r2_1 from "../../assets/gallery/winter/image-r2-1.avif";
import image_r3_1 from "../../assets/gallery/winter/image-r3-1.avif";
import image_r3_2 from "../../assets/gallery/winter/image-r3-2.avif";
import image_r4_1 from "../../assets/gallery/winter/image-r4-1.avif";
import image_r5_1 from "../../assets/gallery/winter/image-r5-1.avif";
import image_r5_2 from "../../assets/gallery/winter/image-r5-2.avif";
import image_r6_1 from "../../assets/gallery/winter/image-r6-1.avif";
import image_r6_2 from "../../assets/gallery/winter/image-r6-2.avif";
import image_r6_3 from "../../assets/gallery/winter/image-r6-3.avif";
import image_r7_1 from "../../assets/gallery/winter/image-r7-1.avif";

const rows = [
    {
        images: [
            { src: image_r1_1, alt: "Winter piece 1", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
            { src: image_r1_2, alt: "Winter piece 2", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r2_1, alt: "Winter piece 3", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r3_1, alt: "Winter piece 4", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
            { src: image_r3_2, alt: "Winter piece 5", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r4_1, alt: "Winter piece 6", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r5_1, alt: "Winter piece 7", flex: "flex-[4]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
            { src: image_r5_2, alt: "Winter piece 8", flex: "flex-[2]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r6_1, alt: "Winter piece 9", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
            { src: image_r6_2, alt: "Winter piece 10", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
            { src: image_r6_3, alt: "Winter piece 11", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[60vh] sm:h-[75vh] md:h-[85vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            { src: image_r7_1, alt: "Winter piece 12", flex: "flex-[1]", aspect: "aspect-[2/3]", height: "h-[55vh] sm:h-[70vh] md:h-[80vh]" },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
];

const WinterCollection = () => <Collection title="Winter Collection" rows={rows} />;

export default WinterCollection;