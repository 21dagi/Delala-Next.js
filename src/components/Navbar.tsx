'use client';

import React, { useState } from 'react';
// import '/src/app/globals.css';
import { useEffect } from "react";
import Aside from './Aside';
import Header from './Header';
import Filter from './Filter';
import UserList from './UserList';
import Detailpage from './Detailpage';

import Productlist from './Productlist';


const Navbar: React.FC = () => {
  const [showRe, setShowRe] = useState(false); // State to control the visibility of Re
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null); // State for selected product ID

  const handleShowRe = (productId: number) => {
    setSelectedProductId(productId); // Set the selected product ID
    setShowRe(true); // Show the Re component
  };
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">

  <Aside/>
    
  
    
   
    <div className="w-full h-full flex flex-col justify-between">
      
      <Header/>
      
      <main className="max-w-full h-full flex relative overflow-y-hidden">

    <UserList/>
 
    <Filter onShowRe={handleShowRe} /> {/* Pass down the function */}
    {showRe && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-95 flex justify-center items-center z-50">
              <Detailpage productId={selectedProductId} onClose={() => setShowRe(false)} /> {/* Pass the selected ID */}
            </div>
          )}
      </main>
    </div>
  
  </div>
  );}

export default Navbar;