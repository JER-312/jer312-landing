import { Link } from "react-router-dom";
import logo from "../assets/jer312-logo.svg"; // Adjust the path as needed

function Header() {
    return (
        <header className="bg-white w-full px-6 lg:pl-4"> {/* Reduced left padding on large screens */}
            <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto">
                {/* Logo on the left, clickable to navigate to home */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Jer312 Logo"
                            className="h-12 w-auto md:h-14 lg:h-18"
                        />
                    </Link>
                </div>

                {/* Navigation links on the right */}
                <div className="flex space-x-12">
                    <Link
                        to="/about"
                        className="gilmer-regular text-black uppercase text-xl md:text-2xl lg:text-3xl"
                    >
                        About
                    </Link>
                    <Link
                        to="/gallery"
                        className="gilmer-regular text-black uppercase text-xl md:text-2xl lg:text-3xl"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/shop"
                        className="gilmer-regular text-black uppercase text-xl md:text-2xl lg:text-3xl"
                    >
                        Shop
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;