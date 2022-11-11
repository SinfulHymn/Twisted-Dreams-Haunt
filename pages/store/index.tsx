import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'
import {getProductsInCollection} from "@lib/shopifyql"

export default function Index({products, cart}) {
  return (
    <Layout cart={cart} title="- Merch">
      <Store products={products}  />
    </Layout>
    )
}

export const getServerSideProps = async () => {
  const cart = await shopifyClient.checkout.create()
  const products = await getProductsInCollection()

  return {
    props: {
      cart: parseShopifyResponse(cart),
      products: products
    },
  };
};

