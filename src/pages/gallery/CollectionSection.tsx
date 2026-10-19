import {useEffect, useState, type CSSProperties} from "react";
import type {Collection, CollectionImage} from "../../content/collections";
import {useInView} from "../../hooks/useInView.ts";
import SplitText from "../../components/motion/SplitText.tsx";
import Reveal from "../../components/motion/Reveal.tsx";

const titleClass = "gilmer-medium text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] max-lg:text-center";

// Below sm, multi-image rows become a 2-column grid of equal tiles (odd rows: first tile spans both columns).
const mobileTileClass = "max-sm:h-auto max-sm:aspect-[3/4]";

// Text timing (ms): title lines stagger, then the meta items, then the description.
const LINE_STAGGER = 150;
const META_DELAY = 350;
const META_STAGGER = 80;
const DESCRIPTION_DELAY = 650;

// Image rows (match .jer-row in index.css): tiles stagger, the img scale is the longest part.
const TILE_STAGGER = 120;
const TILE_MS = 1400;
const LOAD_WAIT_MS = 1500; // reveal anyway if the images are slow

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// One image row. When it scrolls into view and its images are decoded (no pop under
// the curtain), each tile is unveiled from the bottom while its photo settles from
// a slight zoom (.jer-row in index.css). `jer-done` drops will-change once it lands.
function ImageRow({row, eager}: { row: CollectionImage[]; eager: boolean }) {
    // The first row may only peek in at load: start it on any visible pixel.
    const [ref, inView] = useInView<HTMLDivElement>(eager ? {rootMargin: "0px", threshold: 0} : {threshold: 0.1});
    const [ready, setReady] = useState(reduced);
    const [done, setDone] = useState(reduced);

    useEffect(() => {
        const el = ref.current;
        if (!inView || ready || !el) return;
        let live = true;
        const go = () => live && setReady(true);
        const t = window.setTimeout(go, LOAD_WAIT_MS);
        Promise.all([...el.querySelectorAll("img")].map((img) => img.decode().catch(() => {}))).then(go);
        return () => {
            live = false;
            window.clearTimeout(t);
        };
    }, [inView, ready, ref]);

    useEffect(() => {
        if (!ready || done) return;
        const t = window.setTimeout(() => setDone(true), (row.length - 1) * TILE_STAGGER + TILE_MS + 50);
        return () => window.clearTimeout(t);
    }, [ready, done, row.length]);

    return (
        <div
            ref={ref}
            className={`flex flex-col sm:flex-row gap-4 ${row.length > 1 ? "max-sm:grid max-sm:grid-cols-2 max-sm:gap-2" : ""} jer-row${ready ? " jer-in" : ""}${done ? " jer-done" : ""}`}
        >
            {row.map((image, imageIndex) => (
                <div
                    key={image.src}
                    className={`${image.flex} ${image.aspect} relative overflow-hidden ${image.height} ${row.length > 1 ? mobileTileClass : ""} ${row.length % 2 === 1 && imageIndex === 0 ? "max-sm:col-span-2" : ""} jer-tile`}
                    style={imageIndex ? {"--jer-d": `${imageIndex * TILE_STAGGER}ms`} as CSSProperties : undefined}
                >
                    <div className="jer-zoom absolute inset-0 overflow-hidden">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            loading={eager ? "eager" : "lazy"}
                            decoding="async"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

const CollectionSection = ({collection, first = false}: { collection: Collection; first?: boolean }) => {
    const {title, edition, city, date, description, rows} = collection;

    return (
        <div>
            <div className="flex flex-col gap-8 justify-center items-center py-12 sm:px-12 sm:py-16 lg:gap-12 lg:p-20">
                {title.length > 1 ? (
                    <h2 className={`flex flex-col gap-3 items-center ${titleClass}`}>
                        {title.map((line, i) => <SplitText key={line} text={line} delay={i * LINE_STAGGER}/>)}
                    </h2>
                ) : (
                    <SplitText as="h2" className={titleClass} text={title[0]}/>
                )}
                <div className="flex max-lg:flex-wrap max-lg:justify-center gap-x-6 gap-y-1 gilmer-regular text-xl sm:text-2xl lg:gap-12 lg:text-3xl">
                    {[edition, city, date].map((item, i) => (
                        <Reveal as="span" key={i} delay={META_DELAY + i * META_STAGGER}>{item}</Reveal>
                    ))}
                </div>
                <Reveal as="p" delay={DESCRIPTION_DELAY} className="w-full lg:w-2xl gilmer-regular text-lg lg:text-xl">{description}</Reveal>
            </div>
            <div className="flex flex-col gap-4 max-sm:gap-2">
                {rows.map((row, rowIndex) => (
                    <ImageRow key={rowIndex} row={row} eager={first && rowIndex === 0}/>
                ))}
            </div>
        </div>
    );
};

export default CollectionSection;
