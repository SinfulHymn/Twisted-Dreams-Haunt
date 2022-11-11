import Layout from "@components/global/Layout"
import Index from "@components/Index/IndexLayout"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"
import LocationLayout from "@components/Location/LocationLayout"

export default function Location({cart}) {
  
  return (
    <Layout cart={cart} title="- Home">
        <LocationLayout />
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