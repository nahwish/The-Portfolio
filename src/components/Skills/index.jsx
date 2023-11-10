"use client";
import React from "react";
import Button from "./Button";
import Table from "./Table";


export const TableSkills = (props) => {
  const { skills, info } = props;
  const { file_01, file_02, file_03 } = info;

  return (
    <div className="bg-[#170b3b3c]  text-center p-5 padding-3px   shadow-inner shadow-black  border-2 rounded-3xl border-[#151515]">
      <table className=" font-[Poppins]   border-b-2  shadow shadow-black mb-2  border-2 bg-[#181818] border-[#151515]">
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
              className="shadow border-b-2 border-black  shadow-black md:text-[#BFFF00]"
              key={index}
            >
              <Table skl={skl} />
              <td className="py- px-6 ">
                <Button skl={skl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
