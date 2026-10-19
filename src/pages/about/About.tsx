import ValueStory from "./ValueStory.tsx";
import BrandConcept from "./BrandConcept.tsx";
import CycleGallery from "./CycleGallery.tsx";
import SocialConnect from "./SocialConnect.tsx";

const About = () => {
    return (
        <div className="flex flex-col">
            <title>About — JER312</title>
            <meta name="description" content="JER 312 merges ancestral savoir-faire with transformable design, reimagining traditional nomadic craftsmanship from Kyrgyzstan for today."/>
            <h1 className="sr-only">About JER312</h1>
            <ValueStory/>
            <BrandConcept/>
            <CycleGallery/>
            <SocialConnect/>
        </div>
    );
};

export default About;