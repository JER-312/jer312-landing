import ValueStory from "./ValueStory.tsx";
import Concept from "./Concept.tsx";
import CycleGallery from "./CycleGallery.tsx";
import CommunityInSocials from "./SocialConnect.tsx";

const About = () => {
    return (
        <div className="flex flex-col">
            <ValueStory/>
            <Concept/>
            <CycleGallery/>
            <CommunityInSocials/>
        </div>
    );
};

export default About;