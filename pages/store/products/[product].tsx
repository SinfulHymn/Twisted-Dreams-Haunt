import { getAllProducts, getProduct } from '@lib/Shopifyql';
import ProductLayout from '@components/Product/ProductLayout';

export default function ProductPage({ product }) {
  return <ProductLayout product={product} />;
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
