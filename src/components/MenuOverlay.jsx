import React from 'react'
import { Link } from 'react-scroll';


export const MenuOverlay = ({links}) => {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li key={index}>
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
