import {Link} from "react-router-dom";
import logo from "../assets/jer312-logo.svg";

function Header() {
    return (
        <header className="bg-white w-full px-16">
            <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto">
                {/* Logo on the left, clickable to navigate to home */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Jer312 Logo"
                            className="h-18 w-auto"
                        />
                    </Link>
                </div>

                {/* Navigation links on the right */}
                <div className="flex space-x-12">
                    <Link
                        to="/about"
                        className="gilmer-regular text-black uppercase text-3xl"
                    >
                        About
                    </Link>
                    <Link
                        to="/gallery"
                        className="gilmer-regular text-black uppercase text-3xl"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/shop"
                        className="gilmer-regular text-black uppercase text-3xl"
                    >
                        Shop
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;