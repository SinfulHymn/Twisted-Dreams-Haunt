import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { getProductsInCollection } from "@lib/Shopifyql"

export default function Index({ products, cart }) {
  return (
    <Layout title="- Merch">
      <Store products={products} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const products = await getProductsInCollection()

  return {
    props: {
      products: products
    },
  };
};

