import React from "react";
import { skills } from "@/utils/TableSkills";
import Image from "next/image";
import Link from "next/link";


export const TableSkills = (props) => {
  const { skills, info } = props;
  const { file_01, file_02, file_03 } = info;


  return (
    <div
      className="bg-[#170b3b3c] flex justify-center items-center text-center p-2 padding-3px   shadow shadow-black   border-2 border-[#151515]"
    >
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
                {console.log(skl.file_04_link)}
                <Link href={skl.file_04_link} target="_blank">
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
