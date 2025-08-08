import Collection from "./Collection";

import image_r1_1 from "../../assets/gallery/spring/image-r1-1.avif";
import image_r1_2 from "../../assets/gallery/spring/image-r1-2.avif";

import image_r2_1 from "../../assets/gallery/spring/image-r2-1.avif";

import image_r3_1 from "../../assets/gallery/spring/image-r3-1.avif";
import image_r3_2 from "../../assets/gallery/spring/image-r3-2.avif";

import image_r4_1 from "../../assets/gallery/spring/image-r4-1.avif";

import image_r5_1 from "../../assets/gallery/spring/image-r5-1.avif";
import image_r5_2 from "../../assets/gallery/spring/image-r5-2.avif";

import image_r6_1 from "../../assets/gallery/spring/image-r6-1.avif";
import image_r6_2 from "../../assets/gallery/spring/image-r6-2.avif";

import image_r7_1 from "../../assets/gallery/spring/image-r7-1.avif";

const rows = [
    {
        images: [
            {
                src: image_r1_1,
                alt: "Spring",
                flex: "flex-[4]",
                aspect: "aspect-[2/3]",
                height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
            },
            {
                src: image_r1_2,
                alt: "Spring",
                flex: "flex-[2]",
                aspect: "aspect-[2/3]",
                height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
            },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            {
                src: image_r2_1,
                alt: "Summer",
                flex: "flex-[1]",
                aspect: "aspect-[2/3]",
                height: "h-[65vh] sm:h-[90vh] md:h-[100vh]"
            }
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            {
                src: image_r3_1,
                alt: "Spring",
                flex: "flex-[4]",
                aspect: "aspect-[2/3]",
                height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
            },
            {
                src: image_r3_2,
                alt: "Spring",
                flex: "flex-[2]",
                aspect: "aspect-square",
                height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
            },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            {
                src: image_r4_1,
                alt: "Spring",
                flex: "flex-[1]",
                aspect: "aspect-[2/3]",
                height: "h-[65vh] sm:h-[80vh] md:h-[90vh]"
            },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            {
                src: image_r5_1,
                alt: "Spring",
                flex: "flex-[2]",
                aspect: "aspect-[2/3]",
                height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
            },
            {
                src: image_r5_2,
                alt: "Spring",
                flex: "flex-[4]",
                aspect: "aspect-[2/3]",
                height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
            },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            {
                src: image_r6_1,
                alt: "Spring",
                flex: "flex-[4]",
                aspect: "aspect-[2/3]",
                height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
            },
            {
                src: image_r6_2,
                alt: "Spring",
                flex: "flex-[2]",
                aspect: "aspect-[2/3]",
                height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
            },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
    {
        images: [
            {
                src: image_r7_1,
                alt: "Spring",
                flex: "flex-[1]",
                aspect: "aspect-[2/3]",
                height: "h-[65vh] sm:h-[80vh] md:h-[90vh]"
            },
        ],
        layout: "flex flex-col sm:flex-row gap-4",
    },
];

const SpringCollection = () => <Collection title="Spring Collection" rows={rows}/>;

export default SpringCollection;