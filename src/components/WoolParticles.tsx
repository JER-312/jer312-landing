import {useEffect, useRef, useState} from "react";
import logo from "../assets/jer312-logo.svg";

// Black canvas area where wool fibers gather into the JER312 logo.
// Three.js lives in its own chunk, loaded only when the section is near the viewport.
function WoolParticles({className = ""}: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [fallback, setFallback] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setFallback(true);
            return;
        }
        let cancelled = false;
        let dispose: (() => void) | undefined;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            import("./wool/scene.ts")
                .then(({default: createWool}) => {
                    if (!cancelled) dispose = createWool(el, logo);
                })
                .catch(() => !cancelled && setFallback(true));
        }, {rootMargin: "300px"});
        io.observe(el);
        return () => {
            cancelled = true;
            io.disconnect();
            dispose?.();
        };
    }, []);

    return (
        <div ref={ref} aria-hidden="true" className={`relative overflow-hidden ${className}`}>
            {fallback && (
                <img src={logo} alt="" className="absolute inset-0 m-auto w-20 lg:w-28 invert opacity-80"/>
            )}
        </div>
    );
}

export default WoolParticles;
