import React from "react";
import NavLink from "next/link";
import { Link } from "react-scroll";
import { useTab } from "../../../context/TabContext";

const buttonStyle = "text-center rounded-full bg-[#181818] shadow-black w-full p-1 shadow cursor-pointer"

const Button = (props) => {
  const { skl } = props;
  const { handleTagChange } = useTab();

  if (skl.file_03 == "link") {
    return (
      <NavLink href={skl.file_04_link} target="_blank">
        <button className={buttonStyle}>{skl.file_03}</button>
      </NavLink>
    );
  } else {
    return (
      <Link
        active={"true"}
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <button
          onClick={() => handleTagChange(skl.file_01)}
          className={buttonStyle}
        >
          {skl.file_03}
        </button>
      </Link>
    );
  }
};

export default Button;
