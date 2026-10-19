import {useEffect, useRef, useState} from "react";
import ValueConcept from "./ValueConcept.tsx";
import Inspiration from "./Inspiration.tsx";

function Home() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = useState(false);

    const markReady = () => {
        setVideoReady(true);
        const w = window as unknown as { __jerHeroReady?: boolean };
        if (w.__jerHeroReady) return;
        w.__jerHeroReady = true;
        window.dispatchEvent(new Event("jer:hero-ready"));
    };

    useEffect(() => {
        if ((videoRef.current?.readyState ?? 0) >= 3) markReady();
    }, []);

    return (
        <div className="w-full">
            <title>JER312 — Contemporary nomadic fashion from Kyrgyzstan</title>
            <meta name="description" content="JER 312 is a contemporary nomadic fashion brand from Kyrgyzstan, merging ancestral felt craftsmanship with transformable design."/>
            <h1 className="sr-only">JER312</h1>
            <section className="relative w-full bg-white px-5 lg:px-16">
                <div
                    className="relative w-full h-auto rounded-xl overflow-hidden bg-cover bg-center"
                    style={{backgroundImage: "url(/jer312-poster.avif)"}}
                >
                    <video
                        ref={videoRef}
                        onCanPlay={markReady}
                        onPlaying={markReady}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster="/jer312-poster.avif"
                        className={`w-full h-full object-cover rounded-xl max-lg:aspect-video max-lg:max-h-[75svh] transition-opacity duration-700 motion-reduce:transition-none ${videoReady ? "opacity-100" : "opacity-0"}`}
                    >
                        <source src="/jer312-720.mp4" type="video/mp4" media="(max-width: 1023px)"/>
                        <source src="/jer312.mp4" type="video/mp4"/>
                    </video>
                </div>
            </section>

            {/* Introduction Section */}
            <div className="w-full flex flex-col items-center px-5 py-12 md:px-12 lg:p-16 gap-6 lg:my-12">
                <p className="w-full max-lg:max-w-2xl lg:w-2xl text-2xl lg:text-3xl gilmer tracking-tight max-lg:text-balance">
                    The new edition is here. At last - <span className="gilmer-bold">TAN’ ARS NATURA</span>
                </p>
                <p className="w-full max-lg:max-w-2xl lg:w-2xl text-lg lg:text-xl gilmer tracking-tight">
                    We are delighted to share our new Pre-Fall capsule. Shot in the quiet landscapes of Kyrgyzstan,
                    crafted in felt to echo silence with ancestral rhythm. We present a collection where folklore is
                    reimagined through modern lines — an ode to nature and inner stillness.
                </p>
            </div>

            <Inspiration/>
            <ValueConcept/>
        </div>
    );
}

export default Home;