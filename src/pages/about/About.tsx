import ValueStory from "./ValueStory.tsx";
import BrandConcept from "./BrandConcept.tsx";
import CycleGallery from "./CycleGallery.tsx";
import SocialConnect from "./SocialConnect.tsx";

const About = () => {
    return (
        <div className="flex flex-col">
            <ValueStory/>
            <BrandConcept/>
            <CycleGallery/>
            <SocialConnect/>
        </div>
    );
};

export default About;