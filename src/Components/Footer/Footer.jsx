import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center "
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <a  className="flex">
            <MdOutlineEmail size={30} />
            mr9141599@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <a
            href="https://linkedin.com/in/rafique09"
            target="_blank"
            className="flex "
          >
            <CiLinkedin size={30} />
            Linkedin
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <a
            href="https://github.com/MohummadRafique0"
            target="_blank"
            className="flex"
          >
            <FaGithub size={30} />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
