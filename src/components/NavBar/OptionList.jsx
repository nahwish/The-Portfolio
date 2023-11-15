import React from "react";
import { Link } from "react-scroll";
import { HomeIcon } from "@heroicons/react/24/solid";

const OptionList = (props) => {
  const { handleClick } = props;

  const navLink = [
    { title: "Sobre mi", path: "about" },
    { title: "Proyectos", path: "projects" },
    { title: "Contactos", path: "contac" },
  ];
  return (
    <>
      <li className="flex items-center  rounded-full px-3 py-2 shadow  shadow-black   bg-[#181818] border-[#151515] ">
        <Link to="home" spy={true} smooth={true} offset={-150} duration={500}>
          <HomeIcon className="h-5 w-5" />
        </Link>
      </li>
      {navLink.map((link, index) => (
        <span key={index}>
          <li
            onClick={handleClick}
            key={index}
            className={`hover:text-[#BFFF00] `}
          >
            <Link
              active={"true"}
              to={link.path}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {link.title}
            </Link>
          </li>
        </span>
      ))}
      
    </>
  );
};

export default OptionList;
