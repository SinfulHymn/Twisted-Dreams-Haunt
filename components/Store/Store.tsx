import React from "react";
import ProductList from "./ProductList";
import Banner from "@components/global/Banner";

const Store = ({ products }) => {
  return (
    <div className="relative z-0 h-full w-full  text-white">
      <Banner title={"Twisted Dreams Store"} />
      <ProductList products={products} />
    </div>
  );
};

export default Store;
