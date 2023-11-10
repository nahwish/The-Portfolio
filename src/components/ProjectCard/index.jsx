import { useState, useRef } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ProjectCard = ({
  imgUrl,
  title,
  hashtag,
  description,
  gitUrl,
  previewUrl,
}) => {


  return (
    <div className="">
      <div
        className="h-52 md:h-72 rounded-t-xl m-3 border relative group border-4   bg-[#181818] border-[#1c1c1c]"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className=" overlay flex items-center justify-center  absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0  hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blanck"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#292c2c] hover:border-white group/link bg-indigo-300 hover:titt"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#292c2c] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#292c2c] hover:border-white group/link bg-indigo-300"
          >
            <EyeIcon className="h-10 w-10 text-[#292c2c] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="mt-3  rounded-b-3xl bg-[#170b3b3c] py-6 px-4 shadow-inner shadow-black  border-2  border-[#151515]">
        <section className="flex justify-around">
          <span className="lg:hidden inline-block pb-10 ">
            <Link
              href={previewUrl}
              className="h-14 w-14  relative rounded-full  group/link"
            >
              <EyeIcon className="h-20 w-20 flex items-center px-3 py-2 border rounded-full  shadow text-[#BFFF00] shadow-black   bg-[#181818] border-[#151515]" />
            </Link>
          </span>
          <span className="lg:hidden inline-block pb-10 ">
            <Link
              href={gitUrl}
              target="_blanck"
              className="h-14 w-14  relative rounded-full  group/link "
            >
              <CodeBracketIcon className="h-20 w-20 flex items-center px-3 py-2 border rounded-full  shadow text-[#BFFF00] shadow-black   bg-[#181818] border-[#151515] " />
            </Link>
          </span>
        </section>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <p className="text-[#3f6986] text-xs">{hashtag.map((x) => x + " ")}</p>
      </div>
    </div>
  );
};
