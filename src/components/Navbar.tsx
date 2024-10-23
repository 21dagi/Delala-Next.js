"use client";

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Header from './Header';
import Detailpage from './Detailpage';
import UserList from './UserList';
import Filter from './Filter';
import Profile from '../pages/navigation_pages/Profile';

const Navbar: React.FC = () => {
  
  
  return (
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Aside /> {/* Sidebar for navigation */}
      
     <div className="w-full h-full flex flex-col justify-between">
        <Header />
      
     
           <Outlet/>
          

         
        
        
      </div>
    </div>
    
  );
};

export default Navbar;