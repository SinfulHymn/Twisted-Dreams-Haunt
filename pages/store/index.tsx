import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'

export default function Index({products}) {
  return (
    <Layout title="- Merch">
      <Store products={products} />
    </Layout>
    )
}

export const getServerSideProps = async () => {
  const products = await shopifyClient.product.fetchAll()
  
  return {
    props: {
      products: parseShopifyResponse(products)
    },
  };
};

