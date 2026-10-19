import {Link} from "react-router-dom";
import SplitText from "../components/motion/SplitText.tsx";

function NotFoundPage() {
    return (
        <div className="w-full h-[70svh] lg:h-[90vh] flex flex-col items-center justify-center gap-8">
            <title>Page not found — JER312</title>
            <meta name="description" content="This page does not exist."/>
            <SplitText as="h1" className="gilmer-regular text-4xl" text="Page not found"/>
            <Link to="/" className="gilmer-medium text-xl underline underline-offset-4 max-lg:py-2">
                Back to home
            </Link>
        </div>
    )
}

export default NotFoundPage;
