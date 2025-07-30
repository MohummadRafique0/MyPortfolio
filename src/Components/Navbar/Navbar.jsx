import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Footer" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-4 md:px-20 text-white relative">
      <span className="text-3xl md:text-4xl font-bold tracking-wide">
        MyPortfolio
      </span>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="absolute right-10 top-5 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-10 top-5 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex gap-6 font-semibold absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-90 md:bg-opacity-100 p-4 md:p-0 rounded-lg md:rounded-none text-center`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="text-xl md:text-2xl hover:scale-105 transition duration-300 p-2 md:p-0"
          >
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
