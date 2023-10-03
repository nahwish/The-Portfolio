import React from "react";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";

const NavButton = (props) =>{
  const { navbarOpen, setNavbarOpen } = props;

  return (
    !navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded  shadow hover:text-[#BFFF00] shadow-black   bg-[#181818] border-[#151515] "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
            >
              <XmarkIcon className="h-5 w-5" />
            </button>
          )
  )
}

export default NavButton;