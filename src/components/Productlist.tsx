"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkboxContext } from "../app/providerscripts/contectboxprovider";

interface ProductListProps {
  userPreferences: any[];
  onShowRe: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  userPreferences,
  onShowRe,
}) => {
  // Access context directly
  const { selectedCheckboxes } = useContext(checkboxContext);
  const router = useRouter();
  const handleItemClick = (productId: number) => {
    router.push(`/product_dynamic/${productId}`); // Redirect to the dynamic routeu
  };
  // Define state to manage selected checkboxes
  const [displayedCheckboxes, setDisplayedCheckboxes] =
    useState(selectedCheckboxes);

  // Update state when new data is passed
  useEffect(() => {
    // Update the displayed checkboxes when the context changes
    setDisplayedCheckboxes(selectedCheckboxes);

    alert(
      "Context updated, setting category to Car. Price: " +
        selectedCheckboxes.bedroom
    );
  }, [selectedCheckboxes]); // Dependency array should contain selectedCheckboxes

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {userPreferences.map((product) => (
        <article
          key={product.id}
          className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
        >
          <a href="#">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Hotel Photo"
              />
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-slate-700">{product.title}</h2>
              {displayedCheckboxes && displayedCheckboxes.prices?.length > 0 ? (
                <ul>
                  <p className="text-white">
                    Price Range: {displayedCheckboxes.price || "Not selected"}
                  </p>
                  <p className="text-white">
                    Bedrooms: {displayedCheckboxes.bedroom || "Not selected"}
                  </p>
                </ul>
              ) : (
                <p>No price range selected</p>
              )}
              <p className="mt-1 text-sm text-slate-400">
                {product.description}
              </p>

              <div className="mt-3 flex items-end justify-between">
                <p className="text-lg font-bold text-blue-500">
                  ${product.price}
                </p>
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <button
                    // onClick={() => onShowRe(product.id)}
                    onClick={() => handleItemClick(product.id)}
                    className="text-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default ProductList;
