import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/jer312-logo.svg";
import {navLinks} from "../../content/site.ts";

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
            </nav>
        </header>
    );
}

export default Header;