import type {Collection} from "../../content/collections";

const titleClass = "gilmer-medium text-4xl md:text-6xl gilmer-bold tracking-[-0.05em]";

const CollectionSection = ({collection}: { collection: Collection }) => {
    const {title, edition, city, date, description, rows} = collection;

    return (
        <div>
            <div className="flex flex-col gap-12 justify-center items-center p-20">
                {title.length > 1 ? (
                    <h2 className={`flex flex-col gap-3 items-center ${titleClass}`}>
                        {title.map((line) => <span key={line}>{line}</span>)}
                    </h2>
                ) : (
                    <h2 className={titleClass}>{title[0]}</h2>
                )}
                <div className="flex gap-12 gilmer-regular text-3xl">
                    <span>{edition}</span>
                    <span>{city}</span>
                    <span>{date}</span>
                </div>
                <p className="w-2xl gilmer-regular text-xl">{description}</p>
            </div>
            <div className="flex flex-col gap-4">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col sm:flex-row gap-4">
                        {row.map((image) => (
                            <div
                                key={image.src}
                                className={`${image.flex} ${image.aspect} relative overflow-hidden ${image.height}`}
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
