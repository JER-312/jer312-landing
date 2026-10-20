import {useEffect, useRef} from "react";
import {collections} from "../../content/collections";
import CollectionSection from "./CollectionSection";

const sortedCollections = [...collections].sort((a, b) => b.releasedAt.localeCompare(a.releasedAt));

const SCROLL_IDLE_MS = 150;

// Hover effects (index.css, .jer-row) pause while scrolling: tiles sliding under a still
// cursor would otherwise start a zoom/dim on every frame and make the scroll janky.
function useScrollingClass() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let t = 0;
        const onScroll = () => {
            if (!t) el.classList.add("jer-scrolling");
            window.clearTimeout(t);
            t = window.setTimeout(() => {
                t = 0;
                el.classList.remove("jer-scrolling");
            }, SCROLL_IDLE_MS);
        };
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.clearTimeout(t);
        };
    }, []);
    return ref;
}

const Gallery = () => {
    const ref = useScrollingClass();
    return (
        <div ref={ref} className="jer-gallery flex flex-col py-[10vh] max-lg:py-8 px-5 lg:px-[min(2vw,28.8px)] gilmer-regular container-site">
            <title>Gallery — JER312</title>
            <meta name="description" content="JER 312 collections: felt garments and yurt caps shot in Bishkek, Paris, Rome and New York."/>
            <h1 className="sr-only">Gallery</h1>
            {sortedCollections.map((collection, i) => (
                <section key={collection.id} className="mb-[10vh]">
                    <CollectionSection collection={collection} first={i === 0}/>
                </section>
            ))}
        </div>
    );
};

export default Gallery;
