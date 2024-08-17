import logo from "../assets/logo3.png.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <img src={logo} alt="smartWive Logo" className="rounded-lg" />
                <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 sm:pl-12 md:place-self-center md:justify-self-end">
                <a href="https://github.com/roksana35/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl md:text-3xl mr-2" />
                </a>
                <a href="https://www.linkedin.com/in/roksanaakter235/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className=" text-2xl md:text-3xl mr-2"/>
                </a>
                <a href="https://web.facebook.com/alfi.s.nabila/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl md:text-3xl mr-2"/>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
