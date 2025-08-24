import ValueStory from "./ValueStory.tsx";
import Concept from "./Concept.tsx";
import Movement from "./Movement.tsx";

const About = () => {
    return (
        <div className="flex flex-col">
            <ValueStory/>
            <Concept/>
            <Movement/>
        </div>
    );
};

export default About;