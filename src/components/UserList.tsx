
"use client";  

import { useState, useEffect, useContext } from 'react';
import { checkboxContext } from './providerscripts/contectboxprovider'; 
export default function UserList() {

  

    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedBedroom, setSelectedBedroom] = useState('');
  
    const { setSelectedCheckboxes } = useContext(checkboxContext);
  
    // Handle price range radio change
    const handlePriceChange = (e) => {
      setSelectedPrice(e.target.value); // Only one price can be selected at a time
    };
  
    // Handle bedroom radio change
    const handleBedroomChange = (e) => {
      setSelectedBedroom(e.target.value); // Only one bedroom can be selected at a time
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setSelectedCheckboxes({
        price: selectedPrice,
        bedroom: selectedBedroom,
      });
      alert("handle submit is right"+ selectedBedroom+selectedPrice)
     
    };
  
    return (
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-gray-900 border-r dark:bg-gray-900 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4 text-white">Filters</h2>
  
        <form onSubmit={handleSubmit}>
          {/* Price Range Section */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-white">Price Range</h3>
            <div className="flex flex-col space-y-2">
              {['$0 - $10', '$11 - $20', '$21 - $50', '$51 - $100', '$101+'].map((price) => (
                <label key={price} className="flex items-center text-white">
                  <input
                    type="radio"
                    name="price" // Ensures only one price can be selected
                    className="mr-2"
                    value={price}
                    checked={selectedPrice === price}
                    onChange={handlePriceChange}
                  />
                  {price}
                </label>
              ))}
            </div>
          </div>
  
          {/* Bedrooms Section */}
          <div>
            <h3 className="font-medium mb-2 text-white">Bedrooms</h3>
            <div className="grid grid-cols-2 gap-2">
              {['1', '2', '3', '4', '5', 'Other'].map((bedroom) => (
                <label key={bedroom} className="flex items-center text-white">
                  <input
                    type="radio"
                    name="bedroom" // Ensures only one bedroom option can be selected
                    className="mr-2"
                    value={bedroom}
                    checked={selectedBedroom === bedroom}
                    onChange={handleBedroomChange}
                  />
                  {bedroom} BedRoom(s)
                </label>
              ))}
            </div>
          </div>
  
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
         type='submit'
          >
            Apply
          </button>
        </form>
      </aside>
    );
  };
  