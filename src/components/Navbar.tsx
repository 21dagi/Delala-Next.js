"use client";

import React from "react";
import Aside from "./Aside";
import Header from "./Header";

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Aside />
      <div className="w-full h-full flex flex-col justify-between">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Navbar;
