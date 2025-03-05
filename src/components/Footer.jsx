import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { FaGithub, FaEnvelopeSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineCodeBracket } from "react-icons/hi2";


export function Footer() {
  const links = [
    {
      title: "Portfolio",
      icon: <HiOutlineCodeBracket className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.pathakjatin.netlify.app",
    },
    {
      title: "Email",
      icon: <FaEnvelopeSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:workjatinpathak@gmail.com",
    },
    {
      title: "GitHub",
      icon: <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.github.com/pathakjatin",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/pathakjatin",
    },
    {
      title: "Instagram",
      icon: <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
      href: "https://www.instagram.com/pathakjatin_/",
    },
    {
      title: "Twitter",
      icon: <FaXTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.x.com/_jatin_pathak_",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[14rem] w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
