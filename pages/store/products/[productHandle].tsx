import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'

export default function ProductPage({product}) {
  console.log(product);
    return (
    <Layout title={`- `}>
        
    </Layout>
    )
}

 

export const getServerSideProps = async ({params}) => {
const { productHandle } = params;
    const product = await shopifyClient.product.fetchByHandle(productHandle);
  
  return {
    props: {
      product: parseShopifyResponse(product)
    },
  };
};

