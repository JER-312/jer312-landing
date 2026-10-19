import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-8">
            <title>Page not found — JER312</title>
            <meta name="description" content="This page does not exist."/>
            <h1 className="gilmer-regular text-4xl">Page not found</h1>
            <Link to="/" className="gilmer-medium text-xl underline underline-offset-4">
                Back to home
            </Link>
        </div>
    )
}

export default NotFoundPage;
