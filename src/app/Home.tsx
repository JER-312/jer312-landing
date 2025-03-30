import image1 from '../assets/trash/h-c-1.png';
import image2 from '../assets/trash/h-c-2.png';
import image3 from '../assets/trash/h-c-3.png';
import image4 from '../assets/trash/h-c-4.png';

import {useNavigate} from 'react-router-dom';
import Concept from "./home/Concept.tsx";
import Footer from "./Footer.tsx";
import Inspiration from "./home/Inspiration.tsx";

function Home() {
    const navigate = useNavigate();

    const handleViewCollection = () => {
        navigate('/about');
    };

    return (
        <div className="w-full min-h-screen">

            {/* Hero Video Section - No overlay text */}
            <section className="relative w-full bg-white">
                <div className="relative w-full h-[100vh]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://jer312.s3.eu-central-1.amazonaws.com/jer312.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-4 bg-white flex flex-col items-center justify-center text-left">
                <p className="gilmer-regular text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl">
                    <span className="gilmer-bold">TAN' ARS NATURA</span> is a felt-based collection where light,
                    movement, and nature shape each silhouette. Rooted in Kyrgyz craftsmanship, it reimagines ancestral
                    materials through contemporary forms. Modular garments offer transformation — a gesture toward
                    nomadic adaptability.
                </p>
            </section>

            {/* Collection Title Section */}
            <section className="py-16 text-center">
                <h2 className="gilmer-bold text-5xl md:text-6xl lg:text-7xl mb-10">
                    ABOUT COLLECTION
                </h2>
                <button
                    onClick={handleViewCollection}
                    className="flex items-center justify-center h-12 px-8 mx-auto gilmer-medium text-white bg-black rounded-xl md:h-16 md:w-64 hover:bg-gray-800 transition-colors duration-300"
                >
                    VIEW THE COLLECTION
                </button>
            </section>

            {/* Image Gallery Section - Full width, 2 rows x 4 columns */}
            <section className="py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
                    {/* first row */}
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image1}
                            alt="Gallery 1"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image2}
                            alt="Gallery 2"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image3}
                            alt="Gallery 3"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image4}
                            alt="Gallery 4"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* second row */}
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image1}
                            alt="Gallery 5"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image2}
                            alt="Gallery 6"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image3}
                            alt="Gallery 7"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full overflow-hidden group">
                        <img
                            src={image4}
                            alt="Gallery 8"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>


            <Inspiration/>
            <Concept/>
            <Footer/>

        </div>
    );
}

export default Home;