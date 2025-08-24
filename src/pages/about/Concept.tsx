import fullLogo from '../../assets/images/about/full-logo.svg';

const Concept = () => (
    <section className="flex flex-row py-20 px-20">
        <div className="flex-1 flex flex-col justify-around items-center">
            <h2 className="gilmer-bold text-8xl">
                CONCEPT
            </h2>
            <div className="flex flex-col gap-4 w-xl gilmer text-xl">
                <p>
                    The goal is to ensure that each person feels comfortable in these clothes through the customization
                    of personal style and expression. Style becomes a medium through which people showcase their
                    uniqueness.
                </p>
                <p>
                    This type of clothing is seasonless and can become the foundation of a wardrobe, often worn over a
                    long period of time.
                </p>
            </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
            <img
                src={fullLogo}
                alt="half logo"
                className="w-full max-w-sm h-auto"
            />
        </div>
    </section>
);

export default Concept;