function Footer() {
    return (
        <footer className="py-8 px-4 bg-black text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
                {/* Company Info */}
                <div>
                    <h3 className="gilmer-regular text-2xl mb-2">JER 312</h3>
                    <p className="gilmer-regular text-base">
                        Reimagining heritage through design.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="gilmer-regular text-2xl mb-2">Contact</h4>
                    <a href="mailto:info@jer312.com" className="hover:underline gilmer-regular text-base">
                        info@jer312.com
                    </a>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="gilroy-regular text-2xl mb-2">Follow</h4>
                    <div className="flex space-x-4 gilroy-regular text-base">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                        <a href="#" className="hover:underline">Facebook</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-gray-700 text-center text-sm gilmer-regular">
                &copy; {new Date().getFullYear()} JER 312. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;