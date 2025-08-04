import {motion, useInView, Variants} from "framer-motion";
import {useRef} from "react";

import image_r1_1 from "../../assets/gallery/summer/image-r1-1.avif";
import image_r2_1 from "../../assets/gallery/summer/image-r2-1.avif";
import image_r2_2 from "../../assets/gallery/summer/image-r2-2.avif";
import image_r2_3 from "../../assets/gallery/summer/image-r2-3.avif";
import image_r3_1 from "../../assets/gallery/summer/image-r3-1.avif";
import image_r3_2 from "../../assets/gallery/summer/image-r3-2.avif";
import image_r4_1 from "../../assets/gallery/summer/image-r4-1.avif";
import image_r4_2 from "../../assets/gallery/summer/image-r4-2.avif";
import image_r5_1 from "../../assets/gallery/summer/image-r5-1.avif";

const SummerCollection = () => {
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
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r2_1,
                    alt: "Summer piece 1",
                    flex: "flex-[2]",
                    aspect: "aspect-[2/3]",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
                {
                    src: image_r2_2,
                    alt: "Summer piece 2",
                    flex: "flex-[2]",
                    aspect: "aspect-square",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
                {
                    src: image_r2_3,
                    alt: "Summer piece 3",
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
                    src: image_r3_1, // todo: change
                    alt: "Summer piece 1",
                    flex: "flex-[2]",
                    aspect: "aspect-[2/3]",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
                {
                    src: image_r3_2,
                    alt: "Summer piece 2",
                    flex: "flex-[2]",
                    aspect: "aspect-square",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
                {
                    src: image_r3_2,
                    alt: "Summer piece 3",
                    flex: "flex-[2]",
                    aspect: "aspect-square",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                }
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r4_1,
                    alt: "Summer piece 1",
                    flex: "flex-[2]",
                    aspect: "aspect-[2/3]",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
                {
                    src: image_r4_2,
                    alt: "Summer piece 2",
                    flex: "flex-[4]",
                    aspect: "aspect-square",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        },
        {
            images: [
                {
                    src: image_r5_1,
                    alt: "Summer piece 1",
                    flex: "flex-[1]",
                    aspect: "aspect-[2/3]",
                    height: "h-[45vh] sm:h-[60vh] md:h-[70vh]"
                },
            ],
            layout: "flex flex-col sm:flex-row gap-4",
        }
        // Add new rows here, e.g.:
        // {
        //   images: [
        //     { src: testImage, alt: "Pre Fall piece 3", flex: "flex-[2]", aspect: "aspect-[3/2]", height: "h-[30vh] sm:h-[40vh] md:h-[50vh]" },
        //     { src: testImage, alt: "Pre Fall piece 4", flex: "flex-[3]", aspect: "aspect-[4/3]", height: "h-[30vh] sm:h-[40vh] md:h-[50vh]" },
        //   ],
        //   layout: "flex flex-col sm:flex-row gap-4",
        // },
        // {
        //   images: [
        //     { src: testImage, alt: "Pre Fall piece 5", flex: "flex-[1]", aspect: "aspect-square", height: "h-[25vh] sm:h-[35vh] md:h-[45vh]" },
        //     { src: testImage, alt: "Pre Fall piece 6", flex: "flex-[1]", aspect: "aspect-square", height: "h-[25vh] sm:h-[35vh] md:h-[45vh]" },
        //     { src: testImage, alt: "Pre Fall piece 7", flex: "flex-[1]", aspect: "aspect-square", height: "h-[25vh] sm:h-[35vh] md:h-[45vh]" },
        //     { src: testImage, alt: "Pre Fall piece 8", flex: "flex-[1]", aspect: "aspect-square", height: "h-[25vh] sm:h-[35vh] md:h-[45vh]" },
        //   ],
        //   layout: "flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4",
        // },
    ];

    return (
        <div ref={ref} className="mb-[10vh]">
            <motion.h2
                className="text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] mb-8"
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.7}}
            >
                Summer Collection
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

export default SummerCollection;