import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/jer312-logo.svg";
import {navLinks} from "../../content/site.ts";
import MobileMenu from "./MobileMenu.tsx";

function Header() {
    return (
        <header className="bg-white w-full px-5 lg:px-16">
            <nav className="flex justify-between items-center py-4 lg:py-6 max-w-7xl mx-auto">
                {/* Logo on the left, clickable to navigate to home */}
                <div className="flex items-center">
                    <Link to="/" className="max-lg:min-w-11">
                        <img
                            src={logo}
                            alt="Jer312 Logo"
                            className="h-12 lg:h-18 w-auto"
                        />
                    </Link>
                </div>

                {/* Navigation links on the right */}
                <div className="hidden lg:flex space-x-12">
                    {navLinks.map(({to, label}) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({isActive}) =>
                                `gilmer-regular text-black uppercase text-3xl${isActive ? " underline underline-offset-8 decoration-2" : ""}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* Hamburger menu below lg */}
                <MobileMenu/>
            </nav>
        </header>
    );
}

export default Header;