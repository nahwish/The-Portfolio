"use client";
import { Link } from "react-scroll";
import React, { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import NavButton from "./NavButton";
import OptionList from "./OptionList";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  />
</svg>;



export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-40 backdrop-blur-sm brightness-30 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2  shadow border-b-2 border-black  shadow-black">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {" "}
          LOGO{" "}
        </Link>
        <div className="mobile-menu block md:hidden ">
          <NavButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
        <div className="menu block   border-top-30" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row  md:space-x-8 mt-0 cursor-pointer  ">
            <OptionList handleClick={handleClick} />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};
