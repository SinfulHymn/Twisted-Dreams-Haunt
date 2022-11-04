import React from "react";
import Link from "next/link";
import ProductList from "./ProductList";
import PRODUCTS from "./data";
import Nav from "./Nav";

const Merch = () => {
    console.log(PRODUCTS);
    return (
        <div className=" relative bg-no-repeat bg-center text-white  bg-hero2 h-full w-full bg-contain z-0">
            <div className="absolute w-full h-full bg-black bg-opacity-60 -z-10"></div>

            {/* <Nav></Nav> */}

            <div className="flex justify-center items-center font-custom2 py-4 text-2xl sm:text-5xl">
                Twisted Dreams Merch
            </div>
            <ProductList products={PRODUCTS}/>
        </div>

    );
}

export default Merch;