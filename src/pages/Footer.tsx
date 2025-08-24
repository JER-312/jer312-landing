import jer312 from '../assets/images/footer/jer312.svg'
import instagram from '../assets/images/footer/instagram.svg'
import linkedin from '../assets/images/footer/linkedin.svg'
import facebook from '../assets/images/footer/facebook.svg'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col justify-around bg-black text-white">
            <div className="flex flex-row p-16">
                <div className="flex-1 flex flex-col justify-center items-center gap-4">
                    <img src={jer312} alt="jer 312" className="h-12"/>
                    <p className="gilmer-medium">MADE IN KYRGYZ REPUBLIC</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-4">
                    <p className="text-xl gilmer">Contact Us</p>
                    <p className="gilmer">jer312store@gmail.com</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-4">
                    <p className="text-xl gilmer">Social Media</p>
                    <div className="flex flex-row gap-2">
                        <a href="https://www.instagram.com/jer312.st/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" className="h-8"/>
                        </a>
                        <a href="https://www.linkedin.com/company/jer312/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className="h-8"/>
                        </a>
                        <img src={facebook} alt="facebook" className="h-8"/>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-600 my-2" />
            <p className="text-center gilmer">&copy; {currentYear} JER 312. All rights reserved.</p>
        </footer>
    );
}

export default Footer;