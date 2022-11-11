import React from "react";
import Link from "next/link";
import ProductList from "./ProductList";
// import PRODUCTS from "./data";
import Nav from "./Nav";
import VideoMutedFix from "@components/Index/VideoMutedFix";

const Store = ({ products }) => {
    // console.log(PRODUCTS);
    return (
        <div className=" relative bg-no-repeat bg-center text-white  bg-hero2 h-full w-full bg-contain z-0">
            <div className="absolute w-full h-full bg-black bg-opacity-60 -z-10"></div>

            {/* <Nav></Nav> */}

                <div className="relative h-56">

                    <VideoMutedFix
                        className="absolute w-full h-full object-cover z-0"
                        videoSrc="/video/TwistedDreamsHaunt.mp4" />
                    <div className="absolute w-full h-full bg-black bg-opacity-70 z-10"></div>
                    <div className="absolute w-full h-full flex justify-center items-center z-20">
                        <h1 className="text-4xl sm:text-6xl text-textlogo font-custom2 font-bold text-center ">
                            Twisted Dreams Store
                        </h1>


                    </div>
            </div>
            <ProductList products={products} />
        </div>

    );
}

export default Store;