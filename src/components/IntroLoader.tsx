import {useEffect, useLayoutEffect, useState} from "react";

// First-load intro: the JER312 logo is "stitched" (a dashed seam sews in along
// each outline, turns solid, then the felt fill settles), and the white overlay
// lifts away. Shown once per session, never on client-side route changes.

declare global {
    interface Window {
        __jerHeroReady?: boolean;
        __jerIntroDone?: boolean;
    }
}

const SEEN_KEY = "jer:intro-seen";
const STITCH_MS = 1200; // matches the CSS timeline in index.css
const REDUCED_MS = 300;
const CAP_MS = 2000; // exit starts by this point no matter what
const EXIT_MS = 600;

const PATHS = [
    "M109.166 84.2206L109.176 93.0964L100.3 84.2238L75.5493 59.4729V126.726L69.2791 132.997L69.2758 56.2299V53.1993L69.2791 49.9629L69.2758 44.3366L75.5461 50.6036L109.166 84.2206ZM0.201309 48.7761L0.188232 39.9003L9.06405 48.7729L33.8183 73.5238V6.27028L40.0853 0L40.0918 76.7669V79.7974L40.0853 83.0339L40.0918 88.6601L33.8215 82.3931L0.201309 48.7761Z",
    "M109.166 57.6521V66.5181L87.0013 44.3531L82.565 39.9201L57.8173 15.1724V66.5116H57.8108L57.814 121.104V124.134L57.8108 127.374L57.814 133L51.5405 126.733L22.3533 97.5426L17.9235 93.1096L0.188232 75.3808V66.5148L22.3533 88.6799L26.7863 93.1096L51.5405 117.864V66.5181H51.547L51.5405 11.9294V8.89555L51.547 5.65907L51.5405 0.029541L57.814 6.30309L87.0013 35.4871L91.431 39.9201L109.166 57.6521Z",
];

function shouldShow(): boolean {
    try {
        if (sessionStorage.getItem(SEEN_KEY)) return false;
        sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
        // Storage blocked: still show it, it just may repeat on reload.
    }
    return true;
}

// Decided once per page load (not in render: StrictMode would run it twice).
const SHOW_ON_LOAD = shouldShow();
const START = performance.now(); // anchors the hard cap, even if effects run late
// Motion (hooks/useInView) waits for this: set now if there is no intro, else when it starts leaving.
if (!SHOW_ON_LOAD) window.__jerIntroDone = true;

function IntroLoader() {
    const [phase, setPhase] = useState<"in" | "out" | "done">(SHOW_ON_LOAD ? "in" : "done");

    const visible = phase !== "done";

    // Lock scroll from the first paint until the overlay is gone.
    useLayoutEffect(() => {
        if (!visible) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [visible]);

    useEffect(() => {
        if (phase !== "in") return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const needHero = window.location.pathname === "/";
        let animDone = false;
        let heroReady = !needHero || window.__jerHeroReady === true;
        const exit = () => setPhase("out");
        const check = () => {
            if (animDone && heroReady) exit();
        };
        const onHero = () => {
            heroReady = true;
            check();
        };
        const animTimer = window.setTimeout(() => {
            animDone = true;
            check();
        }, reduced ? REDUCED_MS : STITCH_MS);
        const capTimer = window.setTimeout(exit, Math.max(0, START + CAP_MS - performance.now()));
        window.addEventListener("jer:hero-ready", onHero);
        return () => {
            window.clearTimeout(animTimer);
            window.clearTimeout(capTimer);
            window.removeEventListener("jer:hero-ready", onHero);
        };
    }, [phase]);

    useEffect(() => {
        if (phase !== "out") return;
        if (!window.__jerIntroDone) {
            window.__jerIntroDone = true;
            window.dispatchEvent(new Event("jer:intro-done"));
        }
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const t = window.setTimeout(() => setPhase("done"), reduced ? REDUCED_MS : EXIT_MS);
        return () => window.clearTimeout(t);
    }, [phase]);

    if (!visible) return null;

    return (
        <div
            aria-hidden="true"
            className={`jer-intro fixed inset-0 z-[60] flex items-center justify-center bg-white${phase === "out" ? " jer-intro-out" : ""}`}
        >
            <svg
                viewBox="-2 -2 114 137"
                className="jer-intro-logo w-[160px] lg:w-[220px] h-auto overflow-visible"
                fill="none"
            >
                <defs>
                    {PATHS.map((d, i) => (
                        <mask key={i} id={`jer-stitch-mask-${i}`} maskUnits="userSpaceOnUse" x="-10" y="-10" width="130" height="153">
                            <path
                                d={d}
                                pathLength={1}
                                className="jer-stitch-reveal"
                                style={{animationDelay: `${i * 150}ms`}}
                                stroke="white"
                                strokeWidth={4}
                            />
                        </mask>
                    ))}
                </defs>
                {PATHS.map((d, i) => (
                    <g key={i}>
                        <path d={d} className="jer-stitch-fill" fill="black"/>
                        <path d={d} className="jer-stitch-solid" stroke="black" strokeWidth={1.1} strokeLinejoin="round"/>
                        <path
                            d={d}
                            mask={`url(#jer-stitch-mask-${i})`}
                            className="jer-stitch-dash"
                            stroke="black"
                            strokeWidth={1.1}
                            strokeLinecap="round"
                            strokeDasharray="2.6 2"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}

export default IntroLoader;
