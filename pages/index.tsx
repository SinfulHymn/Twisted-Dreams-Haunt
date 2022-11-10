import Layout from "@components/global/Layout"
import Index from "@components/Index/IndexLayout"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"

export default function Home({cart}) {
  
  return (
    <Layout cart={cart} title="- Home">
      <Index />
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