import {Link, Outlet} from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Outlet/> {/* Renders child route elements */}
        </div>
    );
}

export default Home;