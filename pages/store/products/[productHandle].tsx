import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'
import ProductLayout from "@components/Product/ProductLayout";


export default function ProductPage({ product }) {
  const { title, description, images, variants, handle, id,  } = product;

  return (
    <Layout title={`- ${handle}`}>
      <ProductLayout images={images} product={product}/>

    </Layout>
  )
}



export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  const product = await shopifyClient.product.fetchByHandle(productHandle);

  return {
    props: {
      product: parseShopifyResponse(product)
    },
  };
};

