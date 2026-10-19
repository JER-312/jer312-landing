import type {Collection} from "../../content/collections";

const titleClass = "gilmer-medium text-4xl md:text-6xl gilmer-bold tracking-[-0.05em] max-lg:text-center";

// Below sm, multi-image rows become a 2-column grid of equal tiles (odd rows: first tile spans both columns).
const mobileTileClass = "max-sm:h-auto max-sm:aspect-[3/4]";

const CollectionSection = ({collection}: { collection: Collection }) => {
    const {title, edition, city, date, description, rows} = collection;

    return (
        <div>
            <div className="flex flex-col gap-8 justify-center items-center px-2 py-12 sm:px-12 sm:py-16 lg:gap-12 lg:p-20">
                {title.length > 1 ? (
                    <h2 className={`flex flex-col gap-3 items-center ${titleClass}`}>
                        {title.map((line) => <span key={line}>{line}</span>)}
                    </h2>
                ) : (
                    <h2 className={titleClass}>{title[0]}</h2>
                )}
                <div className="flex max-lg:flex-wrap max-lg:justify-center gap-x-6 gap-y-1 gilmer-regular text-xl sm:text-2xl lg:gap-12 lg:text-3xl">
                    <span>{edition}</span>
                    <span>{city}</span>
                    <span>{date}</span>
                </div>
                <p className="w-full lg:w-2xl gilmer-regular text-lg lg:text-xl">{description}</p>
            </div>
            <div className="flex flex-col gap-4 max-sm:gap-2">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex flex-col sm:flex-row gap-4 ${row.length > 1 ? "max-sm:grid max-sm:grid-cols-2 max-sm:gap-2" : ""}`}
                    >
                        {row.map((image, imageIndex) => (
                            <div
                                key={image.src}
                                className={`${image.flex} ${image.aspect} relative overflow-hidden ${image.height} ${row.length > 1 ? mobileTileClass : ""} ${row.length % 2 === 1 && imageIndex === 0 ? "max-sm:col-span-2" : ""}`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollectionSection;
