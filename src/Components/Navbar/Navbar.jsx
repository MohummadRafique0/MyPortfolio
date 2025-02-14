import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

function Navbar() {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between text-white md:items-center px-10 pt-3 md:px-20">
      <span className="text-4xl font-bold tracking-wide">MyPortfolio</span>
      <ul
        className={`${menu ? "block" : "hidden"} 
          mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 
          md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0 hover:scale-110">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0 hover:scale-110">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0 hover:scale-110">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0 hover:scale-110">
            Contact
          </li>
        </a>
      </ul>
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="absolute right-10 top-6 transition-all duration-300"
            onClick={() => openMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-10 top-6 transition-all duration-300"
            onClick={() => openMenu(true)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
