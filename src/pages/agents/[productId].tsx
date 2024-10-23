import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();

  const { productId } = router.query;

  return (
    <>
      <h1 className="text-2xl md:text-3xl pl-2 my-2 font-sans font-bold border-l-4 border-teal-400 dark:text-gray-600">
        Product Details
      </h1>
      <div>
        <p className="text-lg">Product ID: {productId}</p>
      </div>
      <button
        onClick={() => router.back()}
        className="mt-4 p-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Back
      </button>
    </>
  );
};

export default ProductDetail;
