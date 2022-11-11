import Layout from "@components/global/Layout"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"

import AboutLayout from "@components/About/AboutLayout";

export default function About({cart}) {
  
  return (
    <Layout cart={cart} title="- Home">
        <AboutLayout />
    </Layout>
    )
}


export const getServerSideProps = async () => {
  const cart = await shopifyClient.checkout.create()
  return {
    props: {
      cart: parseShopifyResponse(cart)
    },
  };
}; 