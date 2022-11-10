import Layout from "@components/global/Layout"
import Store from "@components/Store/Store"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'
import ProductLayout from "@components/Product/ProductLayout";


export default function ProductPage({ product, cart }) {
  const { title, description, images, variants, handle, id,  } = product;

  return (
    <Layout cart={cart} title={`- ${handle}`}>
      <ProductLayout images={images} product={product}/>
    </Layout>
  )
}



export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  const product = await shopifyClient.product.fetchByHandle(productHandle);
  const cart = await shopifyClient.checkout.create()

  return {
    props: {
      cart: parseShopifyResponse(cart),
      product: parseShopifyResponse(product)
    },
  };
};

