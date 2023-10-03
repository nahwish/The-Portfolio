"use client"
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useTab } from "../../context/TabContext";

export const TableSkills = (props) => {
  const { tab, setTab } = useTab();
  const { skills, info } = props;
  const { file_01, file_02, file_03 } = info;

const handleTabTecnologie = (tecnologie) =>{
  console.log("essta es la tecnologia -->", tecnologie)
  setTab(tecnologie);
}
  return (
    <div className="bg-[#170b3b3c] flex justify-center items-center text-center p-2 padding-3px   shadow shadow-black   border-2 border-[#151515]">
      <table className="shadow-2xl font-[Poppins] border-2  border-b-2 border-black  shadow-black">
        <thead className="text-white">
          <tr>
            <th className="py-3 ">{file_01}</th>
            <th className="py-3 ">{file_02}</th>
            <th className="py-3 ">{file_03}</th>
          </tr>
        </thead>
        <tbody className="text-cyan-900 text-center">
          {skills.map((skl, index) => (
            <tr
              className="shadow border-b-2 border-black  shadow-black"
              key={index}
            >
              <td className="py-3 px-6">{skl.file_01}</td>
              <td className="py-3 px-6">
                {skl.file_02_year ? (
                  skl.file_02_year
                ) : (
                  <Image src={skl.file_02} width={50} height={30} />
                )}
              </td>
              <td className="py-3 px-6">
                <Link
                  active={"true"}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => handleTabTecnologie(skl.file_01)}
                >
                  <button className="text-center rounded-full bg-[#181818] shadow-black w-full p-1 shadow cursor-pointer">
                    {skl.file_03}
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
