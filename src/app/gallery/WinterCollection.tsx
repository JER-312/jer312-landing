import {motion, useInView, Variants} from "framer-motion";
import {useRef} from "react";

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

const WinterCollection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    const imageVariants: Variants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.6, ease: "easeOut"},
        },
    };

    const rows = [
        {
            images: [
                {
                    src: image_r1_1,
                    alt: "Summer piece 1",
                    flex: "flex-[4]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                },
                {
                    src: image_r1_2,
                    alt: "Summer piece 2",
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
                    alt: "Summer piece 1",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
                },
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r3_1,
                    alt: "Summer piece 1",
                    flex: "flex-[2]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                },
                {
                    src: image_r3_2,
                    alt: "Summer piece 2",
                    flex: "flex-[4]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                },
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r4_1,
                    alt: "Summer piece 1",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
                },
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r5_1,
                    alt: "Summer piece 1",
                    flex: "flex-[4]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                },
                {
                    src: image_r5_2,
                    alt: "Summer piece 2",
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
                    src: image_r6_1,
                    alt: "Summer piece 1",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                },
                {
                    src: image_r6_2,
                    alt: "Summer piece 2",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                },
                {
                    src: image_r6_3,
                    alt: "Summer piece 3",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[60vh] sm:h-[75vh] md:h-[85vh]"
                }
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r7_1,
                    alt: "Summer piece 1",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[55vh] sm:h-[70vh] md:h-[80vh]"
                },
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
    ];

    return (
        <div ref={ref} className="mb-[10vh]">
            <motion.h2
                className="text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] mb-8"
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.7}}
            >
                Winter Collection
            </motion.h2>
            {isInView && (
                <div className="flex flex-col gap-4">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className={row.layout}>
                            {row.images.map((image, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={imageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{delay: i * 0.1}}
                                    className={`${image.flex} ${image.aspect} relative overflow-hidden ${image.height}`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WinterCollection;