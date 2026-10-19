import {useState} from 'react';
import tcol1 from '../../assets/images/about/t-col-1.avif';
import tcol2 from '../../assets/images/about/t-col-2.avif';
import tcol3 from '../../assets/images/about/t-col-3.avif';
import tcol4 from '../../assets/images/about/t-col-4.avif';
import tcol5 from '../../assets/images/about/t-col-5.avif';
import tcol6 from '../../assets/images/about/t-col-6.avif';

const images = [tcol1, tcol2, tcol3, tcol4, tcol5, tcol6];

const CycleGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="flex flex-col py-20 px-40 gap-8">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="w-full">
                    <div className="flex flex-col gap-4 gilmer text-xl">
                        <p>
                            The first clothing line features transformable outfits adorned with ancestral patterns and
                            ornaments. All pieces were crafted in Kyrgyzstan using high-quality materials that ensure durability,
                            provide comfort against the body, and allow for ease of movement.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <div
                    className="relative w-full">
                    <img
                        src={images[currentImage]}
                        alt={`Collection image ${currentImage + 1}`}
                        className="w-full h-auto object-contain rounded-lg"
                    />
                    <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CycleGallery;