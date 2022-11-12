import React from "react";
import ProductList from "./ProductList";
import Banner from "@components/global/Banner";

const Store = ({ products }) => {
  return (
    <div className="relative text-white h-full w-full  z-0">
      <div className="absolute w-full h-full bg-black bg-opacity-60 -z-10"></div>

        <Banner title={"Twisted Dreams Store"}/>
      <ProductList products={products} />
    </div>
  );
};

export default Store;
