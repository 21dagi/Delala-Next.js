"use client";

import React, {createContext, useState} from "react";

export const checkboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    prices: [],
    bedrooms: [],
  });
  
    return (
      <checkboxContext.Provider value={{ selectedCheckboxes, setSelectedCheckboxes }}>
        {children}
      </checkboxContext.Provider>
    );
  };