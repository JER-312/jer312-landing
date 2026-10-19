import {useEffect, useRef, useState} from "react";

// True once the element scrolls into view. Waits for the intro loader to start
// leaving (window.__jerIntroDone / "jer:intro-done"), so nothing animates under it.

declare global {
    interface Window {
        __jerIntroDone?: boolean;
    }
}

const INTRO_FALLBACK_MS = 3000; // never stay hidden if the signal is missed

type Options = {
    once?: boolean;
    rootMargin?: string;
    threshold?: number;
};

export function useInView<T extends Element>({once = true, rootMargin = "0px 0px -10% 0px", threshold = 0.15}: Options = {}) {
    const ref = useRef<T>(null);
    const [introDone, setIntroDone] = useState(() => window.__jerIntroDone === true);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (introDone) return;
        const done = () => setIntroDone(true);
        const t = window.setTimeout(done, INTRO_FALLBACK_MS);
        window.addEventListener("jer:intro-done", done);
        return () => {
            window.clearTimeout(t);
            window.removeEventListener("jer:intro-done", done);
        };
    }, [introDone]);

    useEffect(() => {
        const el = ref.current;
        if (!introDone || !el) return;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (once) io.disconnect();
            } else if (!once) {
                setInView(false);
            }
        }, {rootMargin, threshold});
        io.observe(el);
        return () => io.disconnect();
    }, [introDone, once, rootMargin, threshold]);

    return [ref, inView] as const;
}
