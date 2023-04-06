import Store from "@components/Store/Store";
import { getProductsInCollection } from "@lib/Shopifyql";
import { useState, useEffect } from "react";

export default function Index({ products }) {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsInCollection();
      setProductData(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className=" text-3xl font-extrabold text-red-600">Loading...</div>
      ) : (
        <Store products={productsData} />
      )}
    </>
  );
}
