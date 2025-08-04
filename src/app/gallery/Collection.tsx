import {motion, useInView, Variants} from "framer-motion";
import {useRef} from "react";

type Image = {
    src: string;
    alt: string;
    flex: string;
    aspect: string;
    height: string;
};

type Row = {
    images: Image[];
    layout: string;
};

type CollectionProps = {
    title: string;
    rows: Row[];
};

const Collection = ({title, rows}: CollectionProps) => {
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

    return (
        <div ref={ref} className="mb-[10vh]">
            <motion.h2
                className="text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] mb-8"
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.7}}
            >
                {title}
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

export default Collection;