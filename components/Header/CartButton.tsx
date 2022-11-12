import Link from "next/link"
import { useContext, useState } from "react"
import { CartContext } from "@context/shopContext"
import { FaShoppingCart } from "react-icons/fa"


export default function CartButton() {

    const { cart, cartOpen, setCartOpen } = useContext(CartContext);
    const [quantiy, setQuantity ]= useState(0);
    let cartQuantity = 0;
    cart.map(item => {
        
        return (cartQuantity += item.variantQuantity)
    })
    
    return (

        <div onClick={()=>setCartOpen(!cartOpen)} className='relative hover:text-main-red p-4'>
            <FaShoppingCart className="text-2xl" />
            <span className={"absolute top-1 right-1 bg-main-red rounded-full text-xs w-5 h-5 text-center flex justify-center items-center " + ((cartQuantity<1) ? "hidden" : "")}>
                <span className=" text-white" >
                    {cartQuantity}
                </span>
            </span>
        </div>

    )
}

