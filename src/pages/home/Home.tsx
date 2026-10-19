import Concept from "./Concept.tsx";
import Inspiration from "./Inspiration.tsx";

function Home() {

    return (
        <div className="w-full">
            <section className="relative w-full bg-white px-16">
                <div className="relative w-full h-auto rounded-xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover rounded-xl"
                    >
                        <source src="/jer312.mp4" type="video/mp4"/>
                    </video>
                </div>
            </section>

            {/* Introduction Section */}
            <div className="w-full flex flex-col items-center p-16 gap-6 my-12">
                <p className="w-2xl text-3xl gilmer tracking-tight">
                    The new edition is here. At last - <span className="gilmer-bold">TAN’ ARS NATURA</span>
                </p>
                <p className="w-2xl text-xl gilmer tracking-tight">
                    We are delighted to share our new Pre-Fall capsule. Shot in the quiet landscapes of Kyrgyzstan,
                    crafted in felt to echo silence with ancestral rhythm. We present a collection where folklore is
                    reimagined through modern lines — an ode to nature and inner stillness.
                </p>
            </div>

            <Inspiration/>
            <Concept/>
        </div>
    );
}

export default Home;