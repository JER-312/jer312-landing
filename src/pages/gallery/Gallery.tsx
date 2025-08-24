import SummerCollection from "./SummerCollection";
import PreFallCollection from "./PreFallCollection";
import WinterCollection from "./WinterCollection";
import SpringCollection from "./SpringCollection";

const getCurrentSeason = () => {
    const month = new Date().getMonth(); // 0-11
    if (month >= 2 && month <= 4) return "Spring";
    if (month >= 5 && month <= 7) return "Summer";
    if (month >= 8 && month <= 10) return "PreFall";
    return "Winter";
};

const Gallery = () => {
    const collections = [
        { Component: SummerCollection, name: "Summer" },
        { Component: PreFallCollection, name: "PreFall" },
        { Component: WinterCollection, name: "Winter" },
        { Component: SpringCollection, name: "Spring" },
    ];

    const currentSeason = getCurrentSeason();
    const sortedCollections = [...collections].sort((a, b) =>
        a.name === currentSeason ? -1 : b.name === currentSeason ? 1 : 0
    );

    return (
        <div className="flex flex-col py-[10vh] px-[2vw] gilmer-regular">
            {sortedCollections.map(({ Component }, index) => (
                <section key={index} className="mb-[10vh]">
                    <Component />
                </section>
            ))}
        </div>
    );
};

export default Gallery;