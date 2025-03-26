import React from 'react';
import videoFile from '../assets/sparkle-short.mp4';
import image1 from '../assets/trash/h-c-1.png';
import image2 from '../assets/trash/h-c-2.png';
import image3 from '../assets/trash/h-c-3.png';
import image4 from '../assets/trash/h-c-4.png';
import mountain from '../assets/mountain.svg'; // Adjust path as needed

function Home() {
    return (
        <div className="w-full min-h-screen">
            {/* Video Section */}
            <section className="relative w-full bg-black">
                <div className="relative w-full max-w-[1920px] mx-auto h-[70vh]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Title and Button Section */}
            <section className="py-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-8">
                    TANG ARS NATURA
                </h1>
                <button className="px-6 py-3 text-lg bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300">
                    Discover More
                </button>
            </section>

            {/* Image Gallery Section 1 */}
            <section className="py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {/* first */}
                    <div className="w-full">
                        <img src={image1} alt="Gallery 1" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Gallery 2" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full">
                        <img src={image3} alt="Gallery 3" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full">
                        <img src={image4} alt="Gallery 4" className="w-full h-auto object-cover" />
                    </div>

                    {/* second */}
                    <div className="w-full">
                        <img src={image1} alt="Gallery 1" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Gallery 2" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full">
                        <img src={image3} alt="Gallery 3" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full">
                        <img src={image4} alt="Gallery 4" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Slider Section */}
            <section className="py-16 px-4">
                <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8">
                    <div className="w-full md:w-1/2">
                        {/* Slider content goes here */}
                    </div>
                    <div className="w-full md:w-1/2">
                        {/* Slider details go here */}
                    </div>
                </div>
            </section>

            {/* Value Story Section */}
            <section className="relative pb-[50vh] mb-32 md:mb-0">
                {/* Background with mountain */}
                <div className="flex items-end bg-white">
                    <div className="w-full pt-[25vh] bg-gradient-to-b from-black via-black to-white" style={{ backgroundImage: 'linear-gradient(to bottom, black 97%, white 3%)' }}>
                        <img src={mountain} alt="mountain" className="w-full h-auto" />
                    </div>
                </div>

                {/* Content */}
                <div className="absolute left-0 flex flex-col items-end w-full md:top-[70vh] top-[50vh] px-5 md:px-20">
                    <div className="flex flex-col items-end w-full md:flex-row">
                        <div className="flex flex-col items-start w-full md:w-1/2">
                            <p className="pt-5 text-6xl gilmer-bold md:text-8xl lg:text-9xl">VALUE</p>
                            <p className="pt-2 text-6xl gilmer-bold md:text-8xl lg:text-9xl">STORY</p>
                            <p className="pt-2 text-6xl gilmer-bold md:text-8xl lg:text-9xl">CONCEPT</p>
                        </div>

                        <div className="flex flex-col items-start text-left w-full md:w-1/2">
                            <p className="p-1 text-xl gilmer-medium md:text-2xl lg:text-3xl">
                                «At JER 312, we weave cultural heritage and innovative design into
                                multifunctional garments, empowering you to express your unique
                                style with creativity and sustainability.»
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="flex items-center justify-center h-12 px-8 gilmer-medium text-white bg-black rounded-xl md:h-16 md:w-48">
                            READ MORE
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;