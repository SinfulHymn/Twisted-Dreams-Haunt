import React from "react";
import ProductList from "./ProductList";
import Banner from "@components/global/Banner";
import { useState, useEffect } from "react";
import { getProductsInCollection } from "@lib/Shopifyql";

const Store = () => {
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
    <div className="relative z-0 h-full w-full  text-white">
      <Banner title={"Twisted Dreams Store"} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductList products={productsData} />
      )}
    </div>
  );
};

export default Store;
