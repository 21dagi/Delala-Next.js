"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useContext, useState } from "react";

import axios from "axios";

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id ? parseInt(params.id as string, 10) : null;
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`/api/products?productId=${id}`);
      setproduct(response.data);
    };

    fetchProducts();
  }, [product]);

  return (
    <>
      <div className="bg-gray-100 dark:bg-blue-950 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4 overflow-x-auto">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 overflow-y-auto scrollable-content">
                {" "}
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {product.type}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                    {product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                    {product.available}
                  </span>
                </div>
              </div>

              <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Agent Address
                  </dt>
                  <dd className="text-lg font-semibold">
                    yourname@flowbite.com
                  </dd>
                </div>
                <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    House Address
                  </dt>
                  <dd className="text-lg font-semibold">
                    W{product.Woreda}/kk/{product.K_Ketema}
                    <br />
                    HouseNum: {product.HouseNumber}
                  </dd>
                </div>
                <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Hosted At
                  </dt>
                  <dd className="text-lg font-semibold">{product.createdAt}</dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
