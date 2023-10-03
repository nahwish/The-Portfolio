"use client";
import React from "react";
import Button from "./Button";
import Table from "./Table";


export const TableSkills = (props) => {
  const { skills, info } = props;
  const { file_01, file_02, file_03 } = info;

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
              <Table skl={skl}/>
              <td className="py-3 px-6">
                <Button skl={skl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
