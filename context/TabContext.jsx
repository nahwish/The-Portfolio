"use client";
import React, { createContext, useContext, useState } from "react";
const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <TabContext.Provider value={{ tag, handleTagChange }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  return useContext(TabContext);
};
