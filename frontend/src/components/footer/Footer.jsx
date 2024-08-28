import React from 'react';
import {FaInstagram , FaGithub , FaLinkedin , FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex justify-around items-center w-full h-16  text-black ">
            <div className="flex justify-around items-center gap-6">
                <FaInstagram className="text-xl cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out"/>
                <FaGithub className="text-xl cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out"/>
                <FaLinkedin className="text-xl cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out"/>
                <FaTwitter className="text-xl cursor-pointer text-gray-700 hover:text-black hover:scale-125 transition-all duration-300 ease-in-out"/>
            </div>
        </footer>
    );
}

export default Footer;