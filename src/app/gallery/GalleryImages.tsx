import testImage from "../../assets/test.avif";
import image_p1_r1_1 from "../../assets/gallery/prefall/image-r1-1.avif";
import image_p1_r1_2 from "../../assets/gallery/prefall/image-r1-2.avif";

export const galleryParts = [
    {
        title: "Part 1: Cultural Heritage",
        rows: [
            {
                images: [
                    { src: image_p1_r1_1, alt: "Cultural piece 1", aspect: "aspect-[2/3]", flex: "flex-[4]" },
                    { src: image_p1_r1_2, alt: "Cultural piece 2", aspect: "aspect-square", flex: "flex-[2]" },
                ],
                height: { mobile: "35vh", sm: "50vh", md: "60vh" },
            },
            {
                images: [
                    { src: testImage, alt: "Cultural piece 3", aspect: "aspect-[3/2]", flex: "flex-[2]" },
                    { src: testImage, alt: "Cultural piece 4", aspect: "aspect-[4/3]", flex: "flex-[3]" },
                ],
                height: { mobile: "30vh", sm: "40vh", md: "50vh" },
            },
            {
                images: [
                    { src: testImage, alt: "Cultural piece 5", aspect: "aspect-[1/2]", flex: "flex-[3]" },
                    { src: testImage, alt: "Cultural piece 6", aspect: "aspect-[3/1]", flex: "flex-[2]" },
                ],
                height: { mobile: "32vh", sm: "42vh", md: "52vh" },
            },
            {
                images: [
                    { src: testImage, alt: "Cultural piece 7", aspect: "aspect-[4/5]", flex: "flex-[1]" },
                    { src: testImage, alt: "Cultural piece 8", aspect: "aspect-[5/4]", flex: "flex-[1]" },
                    { src: testImage, alt: "Cultural piece 9", aspect: "aspect-[2/3]", flex: "flex-[1]" },
                    { src: testImage, alt: "Cultural piece 10", aspect: "aspect-square", flex: "flex-[1]" },
                ],
                height: { mobile: "25vh", sm: "35vh", md: "45vh" },
            },
        ],
    },
    // Add parts 2-4 later
];