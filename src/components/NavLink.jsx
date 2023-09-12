import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className=" block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl   hover:text-[#BFFF00] shadow shadow-black rounded-full border-2 bg-[#181818] border-[#151515] "
    >
      {<span className="blur-none">{title}</span>}
    </Link>
  );
};

export default NavLink;

