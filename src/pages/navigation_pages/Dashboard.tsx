"use client";
import React, { useState } from 'react'
import Filter from '../../components/Filter';
import UserList from '../../components/UserList';
import Detailpage from '../../components/Detailpage';
import Profile from './Profile';
function Dashboard() {
    const [showRe, setShowRe] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleShowRe = (productId: number) => {
    setSelectedProductId(productId);
    setShowRe(true);
  };
  return (
 
      <main className="max-w-full h-full flex relative overflow-y-hidden">
       <UserList/>
   
   <Filter onShowRe={handleShowRe} /> {/* Pass down the function */}
   {showRe && (
           <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-95 flex justify-center items-center z-50">
             <Detailpage productId={selectedProductId} onClose={() => setShowRe(false)} /> {/* Pass the selected ID */}
           </div>
         )}
       

    </main>
   
  )
}

export default Dashboard