import {useEffect, useRef, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/jer312-logo.svg";
import {navLinks} from "../../content/site.ts";

function MobileMenu() {
    const [open, setOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        const toggle = toggleRef.current;
        closeRef.current?.focus();
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        // Close when the viewport grows to desktop (e.g. tablet rotation), where the menu is hidden.
        const desktop = window.matchMedia("(min-width: 1024px)");
        const onDesktop = () => {
            if (desktop.matches) setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        desktop.addEventListener("change", onDesktop);
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKey);
            desktop.removeEventListener("change", onDesktop);
            toggle?.focus();
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <div className="lg:hidden">
            <button
                ref={toggleRef}
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="p-2 -mr-2 text-black"
            >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
            </button>

            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                className={`${open ? "flex" : "hidden"} fixed inset-0 z-50 flex-col overflow-y-auto bg-white px-5`}
            >
                <div className="flex justify-between items-center py-4">
                    <Link to="/" onClick={close} className="min-w-11">
                        <img src={logo} alt="Jer312 Logo" className="h-12 w-auto"/>
                    </Link>
                    <button
                        ref={closeRef}
                        type="button"
                        aria-label="Close menu"
                        onClick={close}
                        className="p-2 -mr-2 text-black"
                    >
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 5l14 14M19 5L5 19"/>
                        </svg>
                    </button>
                </div>
                <nav className="flex-1 flex flex-col justify-center items-center gap-10 pb-16">
                    {navLinks.map(({to, label}, i) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={close}
                            style={{animationDelay: `${100 + i * 80}ms`}}
                            className={({isActive}) =>
                                `jer-menu-link gilmer-regular text-black uppercase text-5xl${isActive ? " underline underline-offset-8 decoration-2" : ""}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;
