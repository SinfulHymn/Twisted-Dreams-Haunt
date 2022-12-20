import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@context/shopContext";
import { FaShoppingCart } from "react-icons/fa";

export default function CartButton() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [quantiy, setQuantity] = useState(0);
  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item.variantQuantity);
  });

  return (
    <div
      onClick={() => setCartOpen(!cartOpen)}
      className="relative p-4 hover:text-main-red"
    >
      <FaShoppingCart className="text-2xl" />
      <span
        className={
          "absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-main-red text-center text-xs " +
          (cartQuantity < 1 ? "hidden" : "")
        }
      >
        <span className=" text-white">{cartQuantity}</span>
      </span>
    </div>
  );
}
