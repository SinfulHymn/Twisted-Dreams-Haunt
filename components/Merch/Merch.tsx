import React from "react";
import PRODUCTS from "./data";
import Link from "next/link";

const Merch = () => {
    console.log(PRODUCTS);
    return (
        <div className=" relative bg-no-repeat bg-center text-white text-5xl bg-hero2 h-full w-full bg-contain z-0">
            <div className="absolute w-full h-full bg-black bg-opacity-60 z-0"></div>

            <div className="absolute flex min-w-full z-20 justify-center bg-gray-800 z-10">
                <ul className="flex container z-20">
                    <li>
                        <Link href={"/"}>test</Link>
                    </li>
                    <li>
                        <Link href={"/"}>test</Link>
                    </li>
                    <li>
                        <Link href={"/"}>test</Link>
                    </li>
                </ul>

            </div>
            <div className="flex justify-center items-center font-custom2">
                Twisted Dreams Merch
            </div>

        </div>

    );
}

export default Merch;