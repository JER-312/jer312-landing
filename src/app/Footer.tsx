// Footer.jsx
function Footer() {
    return (
        <footer className="py-16 px-4 bg-black text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Company Info */}
                <div>
                    <h3 className="gilmer-regular text-2xl mb-4">JER 312</h3>
                    <p className="gilmer-regular">
                        Reimagining heritage through contemporary design.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="gilmer-regular text-2xl mb-4">Get in Touch</h4>
                    <a href="mailto:info@jer312.com" className="hover:underline gilmer-regular">
                        info@jer312.com
                    </a>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="gilmer-regular text-2xl mb-4">Follow Us</h4>
                    <div className="flex flex-col space-y-2 gilmer-regular">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                        <a href="#" className="hover:underline">Facebook</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-700 text-center text-sm gilmer-regular">
                &copy; {new Date().getFullYear()} JER 312. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
