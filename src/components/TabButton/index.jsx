import React from 'react'
export const TabButton = ({active,selecTab,children}) => {
  
  const buttonClasses = active ? "text-white border-b border-purple-500" : "text-[#ADB7BE]"

  
  
  return (
    <button onClick={selecTab}>
      <p className={`mr-3 font-semibold p-5 hover:text-white ${buttonClasses}`}>
      {children}
      </p>
    </button>
  );
}
