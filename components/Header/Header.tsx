import React from "react";
import Navbar from "./Navbar";
import { shopifyClient, parseShopifyResponse } from "@lib/shopify";

const Layout = ({cart}) => {
    return (
        <header className=" flex flex-col min-w-full">
            <Navbar cart={cart}/>

        </header>
    );
}


export default Layout;

export const getServerSideProps = async () => {
    const cart = await shopifyClient.checkout.create()
    return {
      props: {
        cart: parseShopifyResponse(cart)
      },
    };
  }; 