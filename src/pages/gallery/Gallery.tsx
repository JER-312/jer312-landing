import {collections} from "../../content/collections";
import CollectionSection from "./CollectionSection";

const sortedCollections = [...collections].sort((a, b) => b.releasedAt.localeCompare(a.releasedAt));

const Gallery = () => (
    <div className="flex flex-col py-[10vh] px-4 lg:px-[2vw] gilmer-regular">
        <title>Gallery — JER312</title>
        <meta name="description" content="JER 312 collections: felt garments and yurt caps shot in Bishkek, Paris, Rome and New York."/>
        <h1 className="sr-only">Gallery</h1>
        {sortedCollections.map((collection) => (
            <section key={collection.id} className="mb-[10vh]">
                <CollectionSection collection={collection}/>
            </section>
        ))}
    </div>
);

export default Gallery;
