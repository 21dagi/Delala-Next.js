"use client";

import React, { createContext, useState } from 'react';

// Create the context
export const checkboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    prices: [],
    bedrooms: 0, // Change from array to integer
  });

  return (
    <checkboxContext.Provider value={{ selectedCheckboxes, setSelectedCheckboxes }}>
      {children}
    </checkboxContext.Provider>
  );
};