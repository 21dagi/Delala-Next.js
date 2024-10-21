import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface ReProps {
  productId: number | null; // Accept product ID
  onClose: () => void; // Prop to handle closing
}

const Detailpage: React.FC<ReProps> = ({ productId, onClose }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (productId) {
        try {
          const response = await axios.get(`/api/products?productId=${productId}`); // Use backticks for template literals
          setProductDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      console.log('the fetched product ID: ' + productId);
    
    };

    fetchProductDetails();
  }, [productId]);
  return (
  
    <div className=" max-w-md w-full">
    <div className="bg-black rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl">
      <div className="relative">
        {/* Remove the gradient overlay */}
        <img src="https://plus.unsplash.com/premium_photo-1663036999053-032355dbd7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" className="w-full h-44 object-cover object-center relative z-10" />
        <div onClick={onClose}   className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12">
         X
        </div>
      </div>
      <div className="p-6">
        {/* <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Cosmic Headphones</h2>
        <p className="text-gray-600 mb-4">Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">$299.99</span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-600">4.9 (120 reviews)</span>
          </div>
        </div> */}

{productDetails ? (
        <>
       <div className="flex flex-col p-4 mx-auto text-center text-gray-700 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-6 dark:dark:text-black">
    <h3 className="mb-2 text-lg font-semibold">Starter</h3>
    <p className="font-light text-sm text-gray-500 sm:text-md dark:text-gray-400">Best option for personal use &amp; for your next project.</p>
    <div className="flex items-baseline justify-center my-3">
        <span className="mr-1 text-lg font-extrabold">$29</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>

    <ul role="list" className="mb-4 space-y-2 text-left">
        <li className="flex items-center space-x-2">
            <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span>Individual configuration</span>
        </li>
        <li className="flex items-center space-x-2">
            <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span>No setup, or hidden fees</span>
        </li>
        <li className="flex items-center space-x-2">
            <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span>Team size: <span className="font-semibold">1 developer</span></span>
        </li>
        <li className="flex items-center space-x-2">
            <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span>Premium support: <span className="font-semibold">6 months</span></span>
        </li>
        <li className="flex items-center space-x-2">
            <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span>Free updates: <span className="font-semibold">6 months</span></span>
        </li>
    
                </ul>
              
            </div>
        
        </>
      ) : (
        <p className="mt-4">{productId}Loading product details...</p>
      )}

        <button  onClick={onClose} className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
};

export default Detailpage;
