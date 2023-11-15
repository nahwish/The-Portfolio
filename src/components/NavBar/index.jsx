"use client";
import React, { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import NavButton from "./NavButton";
import OptionList from "./OptionList";



export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-40 backdrop-blur-sm brightness-30 ">
      <div className="flex flex-wrap items-center  justify-between mx-auto px-4 py-2  shadow border-b-2 border-black  shadow-black">
        <div className="mobile-menu block md:hidden ">
          <NavButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
        <div className="menu block   border-top-30" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row  md:space-x-8 mt-0 cursor-pointer  items-center">
            <OptionList handleClick={handleClick} />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};
