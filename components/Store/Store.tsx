import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductsInCollection } from "@lib/Shopifyql";
import Banner from "@components/global/Banner";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsInCollection();
      setProducts(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="relative z-0 h-full w-full  text-white">
      <Banner title={"Twisted Dreams Store"} />
      {isLoading ? (
        <div className=" text-3xl font-extrabold text-red-600">Loading...</div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Store;
