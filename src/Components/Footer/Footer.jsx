import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-[#465697] text-white p-10 md:p-12 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-md md:text-xl opacity-80">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="space-y-3 text-sm md:text-lg mt-6 md:mt-0">
        <li>
          <a
            href="mailto:mr9141599@gmail.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <MdOutlineEmail size={28} />
            mr9141599@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/rafique09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <CiLinkedin size={28} />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MohummadRafique0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
