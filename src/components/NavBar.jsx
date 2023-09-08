import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLink = [
  { title: "Sobre mi", path: "#about" },
  { title: "Projectos", path: "#projects" },
  { title: "Contactos", path: "#contac" },
];

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-70">
      <div className="flex flex-wrap items-center justify-between mx-auto ">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          {" "}
          LOGO{" "}
        </Link>
        <div className="menu block md:auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
