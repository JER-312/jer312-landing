import summer_r1_1 from "../assets/images/gallery/summer/image-r1-1.avif";
import summer_r2_1 from "../assets/images/gallery/summer/image-r2-1.avif";
import summer_r2_2 from "../assets/images/gallery/summer/image-r2-2.avif";
import summer_r2_3 from "../assets/images/gallery/summer/image-r2-3.avif";
import summer_r3_1 from "../assets/images/gallery/summer/image-r3-1.avif";
import summer_r3_2 from "../assets/images/gallery/summer/image-r3-2.avif";
import summer_r3_3 from "../assets/images/gallery/summer/image-r3-3.avif";
import summer_r4_1 from "../assets/images/gallery/summer/image-r4-1.avif";
import summer_r4_2 from "../assets/images/gallery/summer/image-r4-2.avif";
import summer_r5_1 from "../assets/images/gallery/summer/image-r5-1.avif";

import prefall_r1_1 from "../assets/images/gallery/prefall/image-r1-1.avif";
import prefall_r1_2 from "../assets/images/gallery/prefall/image-r1-2.avif";
import prefall_r2_1 from "../assets/images/gallery/prefall/image-r2-1.avif";
import prefall_r2_2 from "../assets/images/gallery/prefall/image-r2-2.avif";
import prefall_r3_1 from "../assets/images/gallery/prefall/image-r3-1.avif";
import prefall_r3_2 from "../assets/images/gallery/prefall/image-r3-2.avif";

import winter_r1_1 from "../assets/images/gallery/winter/image-r1-1.avif";
import winter_r1_2 from "../assets/images/gallery/winter/image-r1-2.avif";
import winter_r2_1 from "../assets/images/gallery/winter/image-r2-1.avif";
import winter_r3_1 from "../assets/images/gallery/winter/image-r3-1.avif";
import winter_r3_2 from "../assets/images/gallery/winter/image-r3-2.avif";
import winter_r4_1 from "../assets/images/gallery/winter/image-r4-1.avif";
import winter_r5_1 from "../assets/images/gallery/winter/image-r5-1.avif";
import winter_r5_2 from "../assets/images/gallery/winter/image-r5-2.avif";
import winter_r6_1 from "../assets/images/gallery/winter/image-r6-1.avif";
import winter_r6_2 from "../assets/images/gallery/winter/image-r6-2.avif";
import winter_r6_3 from "../assets/images/gallery/winter/image-r6-3.avif";
import winter_r7_1 from "../assets/images/gallery/winter/image-r7-1.avif";

import spring_r1_1 from "../assets/images/gallery/spring/image-r1-1.avif";
import spring_r1_2 from "../assets/images/gallery/spring/image-r1-2.avif";
import spring_r2_1 from "../assets/images/gallery/spring/image-r2-1.avif";
import spring_r3_1 from "../assets/images/gallery/spring/image-r3-1.avif";
import spring_r3_2 from "../assets/images/gallery/spring/image-r3-2.avif";
import spring_r4_1 from "../assets/images/gallery/spring/image-r4-1.avif";
import spring_r5_1 from "../assets/images/gallery/spring/image-r5-1.avif";
import spring_r5_2 from "../assets/images/gallery/spring/image-r5-2.avif";
import spring_r6_1 from "../assets/images/gallery/spring/image-r6-1.avif";
import spring_r6_2 from "../assets/images/gallery/spring/image-r6-2.avif";
import spring_r7_1 from "../assets/images/gallery/spring/image-r7-1.avif";

export type CollectionImage = {
    src: string;
    alt: string;
    flex: string;
    aspect: string;
    height: string;
};

export type Collection = {
    id: string;
    /** One entry per rendered title line. */
    title: string[];
    edition: string;
    city: string;
    date: string;
    description: string;
    /** ISO date derived from `date`; used to sort newest first. */
    releasedAt: string;
    rows: CollectionImage[][];
};

// Above 1440px wide the gallery is capped at 1440, so heights are capped at their 1440x900 value
// to keep row proportions (tall monitors would otherwise make the tiles very narrow).
const H45 = "h-[45vh] sm:h-[60vh] md:h-[70vh] min-[1441px]:max-h-[630px]";
const H55 = "h-[55vh] sm:h-[70vh] md:h-[80vh] min-[1441px]:max-h-[720px]";
const H60 = "h-[60vh] sm:h-[75vh] md:h-[85vh] min-[1441px]:max-h-[765px]";
const H65_80 = "h-[65vh] sm:h-[80vh] md:h-[90vh] min-[1441px]:max-h-[810px]";
const H65_90 = "h-[65vh] sm:h-[90vh] md:h-[100vh] min-[1441px]:max-h-[900px]";

const PORTRAIT = "aspect-[2/3]";
const SQUARE = "aspect-square";

export const collections: Collection[] = [
    {
        id: "summer",
        title: ["SUMMER COLLECTION"],
        edition: "3 RD EDITION", // TODO: confirm edition number with client
        city: "BISHKEK",
        date: "JUNE 2024",
        releasedAt: "2024-06-01",
        description:
            "This summer drop is rooted in community and togetherness. It is dedicated to warmth of friendship, and the visual culture of youth. At the center is an updated line of yurt caps, offering more options in color and shape: so each person can find their own unique piece. The ornaments are inspired by nomadic symbolism: flowing lines evoke harmony with connection to nature.",
        rows: [
            [
                { src: summer_r1_1, alt: "Summer collection: two models in embroidered yurt caps by a wall", flex: "flex-[4]", aspect: PORTRAIT, height: H60 },
            ],
            [
                { src: summer_r2_1, alt: "Summer collection: model in a beige yurt cap, front view", flex: "flex-[2]", aspect: PORTRAIT, height: H45 },
                { src: summer_r2_2, alt: "Summer collection: model in a beige yurt cap, side view", flex: "flex-[2]", aspect: SQUARE, height: H45 },
                { src: summer_r2_3, alt: "Summer collection: model in a beige yurt cap, back view", flex: "flex-[2]", aspect: SQUARE, height: H45 },
            ],
            [
                { src: summer_r3_1, alt: "Summer collection: model in a black embroidered yurt cap, front view", flex: "flex-[2]", aspect: PORTRAIT, height: H65_80 },
                { src: summer_r3_2, alt: "Summer collection: model in a black embroidered yurt cap, side view", flex: "flex-[2]", aspect: SQUARE, height: H65_80 },
                { src: summer_r3_3, alt: "Summer collection: model in a black embroidered yurt cap, back view", flex: "flex-[2]", aspect: SQUARE, height: H65_80 },
            ],
            [
                { src: summer_r4_1, alt: "Summer collection: black and beige yurt caps, close-up", flex: "flex-[2]", aspect: PORTRAIT, height: H45 },
                { src: summer_r4_2, alt: "Summer collection: model in a beige yurt cap looking up", flex: "flex-[4]", aspect: SQUARE, height: H45 },
            ],
            [
                { src: summer_r5_1, alt: "Summer collection: two models in black and green yurt caps, in profile", flex: "flex-[1]", aspect: PORTRAIT, height: H45 },
            ],
        ],
    },
    {
        id: "prefall",
        title: ["TAN’ ARS NATURA", "PRE-FALL 2025"],
        edition: "4 RD EDITION",
        city: "PARIS",
        date: "MARCH 2025",
        releasedAt: "2025-03-01",
        description:
            "The fourth collection was born from the snow, water, and mountains of Kyrgyzstan. The main materials are handcrafted fleece and wool. We captured the hues of mountain lakes and expressed their fluidity through painterly felt textures. The collection includes genderless outerwear and bottoms, continuing the line of transformable shapes as a defining element of the brand’s identity.",
        rows: [
            [
                { src: prefall_r1_1, alt: "Pre-Fall collection: hand holding a painterly felt coat, close-up", flex: "flex-[4]", aspect: PORTRAIT, height: H45 },
                { src: prefall_r1_2, alt: "Pre-Fall collection: model in blue felt trousers on a snowy riverbank", flex: "flex-[2]", aspect: SQUARE, height: H45 },
            ],
            [
                { src: prefall_r2_1, alt: "Pre-Fall collection: model in a long blue felt dress among snow and pines", flex: "flex-[2]", aspect: PORTRAIT, height: H45 },
                { src: prefall_r2_2, alt: "Pre-Fall collection: two models in blue felt jackets by a mountain river", flex: "flex-[4]", aspect: SQUARE, height: H45 },
            ],
            [
                { src: prefall_r3_1, alt: "Pre-Fall collection: belted blue felt skirt, close-up", flex: "flex-[4]", aspect: PORTRAIT, height: H45 },
                { src: prefall_r3_2, alt: "Pre-Fall collection: model in a blue felt jacket and trousers on river stones", flex: "flex-[2]", aspect: SQUARE, height: H45 },
            ],
        ],
    },
    {
        id: "winter",
        title: ["WINTER COLLECTION"],
        edition: "1 ST EDITION",
        city: "ROME",
        date: "FEBRUARY 2024",
        releasedAt: "2024-02-01",
        description:
            "The first capsule by JER 312 debuted in Rome, though its artistic forms were born in Bishkek. The collection centers on a transformable bomber with graphic accents, along with the first prototypes of docker hats inspired by the silhouette of a yurt and the beldemchi, as a reimagined archival element of women's dress presented in new graphics.",
        rows: [
            [
                { src: winter_r1_1, alt: "Winter collection: model in a black transformable bomber with a printed sleeve", flex: "flex-[4]", aspect: PORTRAIT, height: H60 },
                { src: winter_r1_2, alt: "Winter collection: model in a black bomber, full length", flex: "flex-[2]", aspect: PORTRAIT, height: H60 },
            ],
            [
                { src: winter_r2_1, alt: "Winter collection: black bomber collar and printed sleeve, close-up", flex: "flex-[1]", aspect: PORTRAIT, height: H55 },
            ],
            [
                { src: winter_r3_1, alt: "Winter collection: model in a docker hat and black bomber, full length", flex: "flex-[2]", aspect: PORTRAIT, height: H60 },
                { src: winter_r3_2, alt: "Winter collection: model in a docker hat and black bomber", flex: "flex-[4]", aspect: PORTRAIT, height: H60 },
            ],
            [
                { src: winter_r4_1, alt: "Winter collection: portrait of a model in a patterned docker hat", flex: "flex-[1]", aspect: PORTRAIT, height: H55 },
            ],
            [
                { src: winter_r5_1, alt: "Winter collection: model in a white top and black skirt with a graphic panel", flex: "flex-[4]", aspect: PORTRAIT, height: H60 },
                { src: winter_r5_2, alt: "Winter collection: belted dark skirt with a graphic panel, close-up", flex: "flex-[2]", aspect: PORTRAIT, height: H60 },
            ],
            [
                { src: winter_r6_1, alt: "Winter collection: model in a long black skirt with a graphic panel, front view", flex: "flex-[1]", aspect: PORTRAIT, height: H60 },
                { src: winter_r6_2, alt: "Winter collection: model in a long black skirt, side view", flex: "flex-[1]", aspect: PORTRAIT, height: H60 },
                { src: winter_r6_3, alt: "Winter collection: model in a long black skirt, back view", flex: "flex-[1]", aspect: PORTRAIT, height: H60 },
            ],
            [
                { src: winter_r7_1, alt: "Winter collection: two models in black bombers with printed sleeves, close-up", flex: "flex-[1]", aspect: PORTRAIT, height: H55 },
            ],
        ],
    },
    {
        id: "spring",
        title: ["SPRING COLLECTION"],
        edition: "3 RD EDITION", // TODO: confirm edition number with client
        city: "NEW YORK",
        date: "APRIL 2024",
        releasedAt: "2024-04-01",
        description:
            "The second collection was shot in New York and explores the concept of ethno-urbanism. At this stage, we focused on creating premium cotton pieces and developed a new interpretation of a print based on the ancient Kyrgyz script. The essential T-shirt became a carrier of cultural identity and personal manifesto, bridging tradition and modernity.",
        rows: [
            [
                { src: spring_r1_1, alt: "Spring collection: model in a black logo T-shirt on a city street", flex: "flex-[4]", aspect: PORTRAIT, height: H60 },
                { src: spring_r1_2, alt: "Spring collection: model in a black T-shirt leaning on a building", flex: "flex-[2]", aspect: PORTRAIT, height: H60 },
            ],
            [
                { src: spring_r2_1, alt: "Spring collection: two models in black printed T-shirts in a doorway", flex: "flex-[1]", aspect: PORTRAIT, height: H65_90 },
            ],
            [
                { src: spring_r3_1, alt: "Spring collection: model in a patterned cap and printed T-shirt", flex: "flex-[4]", aspect: PORTRAIT, height: H45 },
                { src: spring_r3_2, alt: "Spring collection: model in a patterned cap at a crosswalk", flex: "flex-[2]", aspect: SQUARE, height: H45 },
            ],
            [
                { src: spring_r4_1, alt: "Spring collection: model in a patterned docker cap, close-up", flex: "flex-[1]", aspect: PORTRAIT, height: H65_80 },
            ],
            [
                { src: spring_r5_1, alt: "Spring collection: model in a printed T-shirt, back view", flex: "flex-[2]", aspect: PORTRAIT, height: H55 },
                { src: spring_r5_2, alt: "Spring collection: model in a patterned cap with head bowed", flex: "flex-[4]", aspect: PORTRAIT, height: H55 },
            ],
            [
                { src: spring_r6_1, alt: "Spring collection: model in a patterned cap looking up", flex: "flex-[4]", aspect: PORTRAIT, height: H55 },
                { src: spring_r6_2, alt: "Spring collection: model in black on a skateboard", flex: "flex-[2]", aspect: PORTRAIT, height: H55 },
            ],
            [
                { src: spring_r7_1, alt: "Spring collection: skateboarder in black on a city street", flex: "flex-[1]", aspect: PORTRAIT, height: H65_80 },
            ],
        ],
    },
];
