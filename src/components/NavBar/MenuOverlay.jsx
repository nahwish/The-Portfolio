import React from 'react'
import { Link } from 'react-scroll';


export const MenuOverlay = () => {
  const links = [
    { title: "Home", path: "home" },
    { title: "Sobre mi", path: "about" },
    { title: "Projectos", path: "projects" },
    { title: "Contactos", path: "contac" },
  ];
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li key={index} className="py-4 font-black">
          <Link
            to={link.path}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
