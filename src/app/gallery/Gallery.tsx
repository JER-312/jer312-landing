import PreFallCollection from "./PreFallCollection";
import SummerCollection from "./SummerCollection.tsx";
import WinterCollection from "./WinterCollection.tsx";
// Import other collections later

const Gallery = () => {
    return (
        <div className="flex flex-col py-[10vh] px-[5vw] gilmer-regular">
            <PreFallCollection/>
            <SummerCollection/>
            <WinterCollection/>
            {/* Add other collections later */}
        </div>
    );
};

export default Gallery;