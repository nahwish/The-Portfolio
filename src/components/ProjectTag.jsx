import React from 'react'

export const ProjectTag = ({ name,onClick, isSelected}) => {
  const buttonStyles = isSelected
    ? "   shadow-md text-[#BFFF00] border-2 border-[#151515]"
    : " shadow shadow-black  cursor-pointer";
  return (
    <span
      className={
        isSelected
          ? "shadow-inner shadow-black rounded-full bg-[#00000020]"
          : "bg-[#19191988] rounded-full"
      }
    >
      <button
        className={`${buttonStyles} px-6 py-3 text-xl rounded-full`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </span>
  );
}
