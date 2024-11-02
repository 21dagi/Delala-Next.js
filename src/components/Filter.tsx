import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Productlist";
import { checkboxContext } from "../app/providerscripts/contectboxprovider";

interface FilterProps {
  onShowRe: (productId: number) => void;
}

const Filter: React.FC<FilterProps> = ({ onShowRe }) => {
  const { selectedCheckboxes: contextSelectedCheckboxes } =
    useContext(checkboxContext);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    contextSelectedCheckboxes
  );
  const [userPreferences, setUserPreferences] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { bedrooms, category } = selectedCheckboxes;

      console.log("Fetching products with:", { category, bedrooms });

      if (category) {
        const response = await axios.get(
          `/api/userpreference?category=${category}&bedrooms=${bedrooms || 0}`
        );
        setUserPreferences(response.data);
      }
    };

    fetchProducts();
  }, [selectedCheckboxes]); // Ensure it re-runs on selectedCheckboxes change

  // Update selectedCheckboxes when context changes
  useEffect(() => {
    setSelectedCheckboxes(contextSelectedCheckboxes);
  }, [contextSelectedCheckboxes]);

  const handleCategorySelection = (category: string, bedrooms: number) => {
    // Update the selected checkboxes state
    setSelectedCheckboxes((prev) => ({
      ...prev,
      category,
      bedrooms: bedrooms !== undefined ? bedrooms : prev.bedrooms, // Retain previous value if undefined
    }));
  };

  const handleBedroomFilter = (bedroomCount: number) => {
    // Call this function when applying the bedroom filter
    setSelectedCheckboxes((prev: any) => ({ ...prev, bedrooms: bedroomCount }));
  };
  return (
    <section className="py-10 bg-gray-100 h-full overflow-y-auto">
      <div className="overflow-x-auto">
        <div className="flex flex-no-wrap justify-start">
          <div
            className="w-48 h-32 rounded-lg flex-shrink-0 flex-grow m-2 bg-white flex justify-center items-center"
            onClick={() =>
              handleCategorySelection("APARTMENT", selectedCheckboxes.bedrooms)
            }
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1534159468957-f35ef72761d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-2 text-white font-bold text-2xl">
              Apartment
            </div>
          </div>
          <div
            className="w-48 h-32 rounded-lg flex-shrink-0 flex-grow m-2 bg-white flex justify-center items-center"
            onClick={() =>
              handleCategorySelection(
                "CONDOMINIUM",
                selectedCheckboxes.bedrooms
              )
            }
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1534655610770-dd69616f05ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-2 text-white font-bold text-2xl">
              Condominium
            </div>
          </div>
          <div
            className="w-48 h-32 rounded-lg flex-shrink-0 flex-grow m-2 bg-white flex justify-center items-center"
            onClick={() =>
              handleCategorySelection("CAR", selectedCheckboxes.bedrooms)
            }
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1522255272218-7ac5249be344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-2 text-white font-bold text-2xl">Cars</div>
          </div>
          <div
            className="w-48 h-32 rounded-lg flex-shrink-0 flex-grow m-2 bg-white flex justify-center items-center"
            onClick={() =>
              handleCategorySelection("HOUSE", selectedCheckboxes.bedrooms)
            }
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1473893604213-3df9c15611c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wdHklMjByb29tfGVufDB8fDB8fHww")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-2 text-white font-bold text-2xl">
              Rent House
            </div>
          </div>
          <div
            className="w-48 h-32 rounded-lg flex-shrink-0 flex-grow m-2 bg-white flex justify-center items-center"
            onClick={() =>
              handleCategorySelection("HOUSE", selectedCheckboxes.bedrooms)
            }
            style={{
              backgroundImage:
                'url("https://plus.unsplash.com/premium_photo-1661853413809-6be6bed796d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGlvJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="px-4 py-2 text-white font-bold text-2xl">
              Studio
            </div>
          </div>
        </div>
      </div>
      <ProductList userPreferences={userPreferences} onShowRe={onShowRe} />
    </section>
  );
};

export default Filter;
