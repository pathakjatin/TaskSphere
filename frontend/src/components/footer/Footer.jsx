import React from 'react';
import {FaInstagram , FaGithub , FaLinkedin , FaTwitter} from 'react-icons/fa';
import logoImg from '../../../public/logo.svg';

const Footer = () => {
    return (
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={logoImg} alt="" />
      <span className="ml-3 text-xl">TaskSphere</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 TaskSphere —
      <a href="https://www.instagram.com/pathakjatin_/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@jatinpathak</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://github.com/pathakjatin" className="text-gray-500 text-xl">
        <FaGithub/>
      </a>
      <a href="https://x.com/_jatin_pathak_" className="ml-3 text-gray-500 text-xl">
        <FaTwitter/>
      </a>
      <a href="https://www.instagram.com/pathakjatin_/" className="ml-3 text-gray-500 text-xl">
        <FaInstagram/>
      </a>
      <a href="www.linkedin.com/in/pathakjatin" className="ml-3 text-gray-500 text-xl">
        <FaLinkedin/>
      </a>
    </span>
  </div>
</footer>
    );
}

export default Footer;