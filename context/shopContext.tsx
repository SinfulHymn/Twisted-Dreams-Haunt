import { createContext, useState, useEffect } from "react";
import { createCheckout, updateCheckout } from "@lib/Shopifyql";

interface IContextProps {
  addToCart: (variantId: string) => void;
  cartOpen: boolean;
  setCartOpen: (value: boolean) => void;
  checkoutUrl: string;
  removeCartItem: (variantId: string) => void;
  cart: any;
  cartTotal: number;
  value: any;
}

const CartContext = createContext({} as IContextProps);

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart.apply(null, [cartObject[0]]);
      }

      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  async function addToCart(newItem) {
    setCartOpen(true);

    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );
      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [];
      let added = false;

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
  }

  async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    const newCheckout = await updateCheckout(checkoutId, updatedCart);
    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, newCheckout])
    );

    if (updatedCart.length === 0) {
      setCartOpen(false);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartOpen,
        setCartOpen,
        checkoutUrl,
        removeCartItem,
        cart,
        cartTotal: cart.reduce((acc, item) => acc + item.variantQuantity, 0),
        value: cart.reduce(
          (acc, item) => acc + item.variantQuantity * item.price,
          0
        ),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
