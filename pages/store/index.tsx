import Store from "@components/Store/Store";
import { getProductsInCollection } from "@lib/Shopifyql";
import { Suspense } from "react";

export default function Index({ products }) {
  // console.log(products);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Store products={products} />
    </Suspense>
  );
}

export const getServerSideProps = async () => {
  const products = await getProductsInCollection();

  return {
    props: {
      products: products,
    },
  };
};
