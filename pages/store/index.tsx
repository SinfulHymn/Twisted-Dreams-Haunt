import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'

export default function Index({products, cart}) {
  return (
    <Layout cart={cart} title="- Merch">
      <Store products={products} />
    </Layout>
    )
}

export const getServerSideProps = async () => {
  const products = await shopifyClient.product.fetchAll()
  const cart = await shopifyClient.checkout.create()

  return {
    props: {
      cart: parseShopifyResponse(cart),
      products: parseShopifyResponse(products)
    },
  };
};

