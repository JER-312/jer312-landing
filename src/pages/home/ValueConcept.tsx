import {Link} from "react-router-dom";
import mountain from "../../assets/images/home/mountain.avif";

function ValueConcept() {
    return (
        <>
            {/* Concept Section with Mountain */}
            <section className="relative pb-[50vh] mb-32 md:mb-0">
                {/* Background with mountain */}
                <div className="flex items-end bg-white">
                    <div className="w-full pt-[25vh] bg-gradient-to-b from-black via-black to-white"
                         style={{backgroundImage: 'linear-gradient(to bottom, black 97%, white 3%)'}}>
                        <img src={mountain} alt="mountain" className="w-full h-auto"/>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute left-0 flex flex-col items-end w-full md:top-[70vh] top-[50vh] px-5 md:px-20">
                    <div className="flex flex-col items-end w-full md:flex-row">
                        <div className="flex flex-col items-start w-full md:w-1/2">
                            <h2 className="contents">
                                <span className="pt-5 text-6xl gilmer-bold md:text-8xl lg:text-9xl">VALUE</span>
                                <span className="pt-2 text-6xl gilmer-bold md:text-8xl lg:text-9xl">STORY</span>
                                <span className="pt-2 text-6xl gilmer-bold md:text-8xl lg:text-9xl">CONCEPT</span>
                            </h2>
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
                        <Link
                            to="/about"
                            className="flex items-center justify-center h-12 px-8 gilmer-medium text-white bg-black rounded-xl md:h-16 md:w-48 hover:bg-gray-800 transition-colors duration-300">
                            READ MORE
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ValueConcept;