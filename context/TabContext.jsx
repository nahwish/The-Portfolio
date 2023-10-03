"use client"
import React, { createContext, useContext, useState } from "react";
const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState("education");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  return useContext(TabContext);
};
