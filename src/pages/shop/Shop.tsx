import SplitText from "../../components/motion/SplitText.tsx";

function Shop() {
    return (
        <div className="w-full h-[70svh] lg:h-[90vh] flex flex-col items-center justify-center">
            <title>Shop — JER312</title>
            <meta name="description" content="The JER 312 online shop is coming soon."/>
            <h1 className="sr-only">Shop</h1>
            <SplitText as="h2" className="gilmer-regular text-4xl" text="COMING SOON" stagger={40}/>
        </div>
    )
}

export default Shop;