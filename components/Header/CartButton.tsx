import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"

export default function CartButton({ cart }) {
    // console.log(cart)
    return (

        <Link href={'/cart'} className='relative hover:text-main-red p-4'>
            <FaShoppingCart className="text-2xl" />
                <span className="absolute top-1 right-1 bg-red-600 rounded-full text-xs w-5 h-5 text-center flex justify-center items-center ">
                    <span className=" text-white">

                    {""}
                    </span>
                </span>

        </Link>
    )
}

