import Layout from "@components/global/Layout"
import Index from "@components/Index/IndexLayout"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"
import GalleryLayout from "@components/Gallery/GalleryLayout"

export default function Gallery({cart}) {
  
  return (
    <Layout cart={cart} title="- Home">
     <GalleryLayout />   
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