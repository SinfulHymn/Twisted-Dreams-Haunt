import Layout from "@components/global/Layout"
import Index from "@components/Index/IndexLayout"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"

export default function Location({cart}) {
  
  return (
    <Layout cart={cart} title="- Home">
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