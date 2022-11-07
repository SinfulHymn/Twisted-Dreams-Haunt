import Layout from "@components/global/Layout"
import Index from "@components/Index/Index"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'

export default function Home({ cart }) {
  const {length } = cart.customAttributes.length
  console.log(length)
  console.log('this is the cart',cart)
  return (
    <Layout title="- Home">
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