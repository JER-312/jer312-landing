import {collections} from "../../content/collections";
import CollectionSection from "./CollectionSection";

const sortedCollections = [...collections].sort((a, b) => b.releasedAt.localeCompare(a.releasedAt));

const Gallery = () => (
    <div className="flex flex-col py-[10vh] px-[2vw] gilmer-regular">
        <h1 className="sr-only">Gallery</h1>
        {sortedCollections.map((collection) => (
            <section key={collection.id} className="mb-[10vh]">
                <CollectionSection collection={collection}/>
            </section>
        ))}
    </div>
);

export default Gallery;
