import ProductList from "./ProductList";
import { getProductsInCollection } from "@lib/Shopifyql";
import Banner from "@components/global/Banner";
import { Suspense } from "react";

const Store = (props) => {
  const { products } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative z-0 h-full w-full  text-white">
        <Banner title={"Twisted Dreams Store"} />
        <ProductList products={products} />
      </div>
    </Suspense>
  );
};

export default Store;

export const getServerSideProps = async () => {
  const products = await getProductsInCollection();

  return {
    props: {
      products: products,
    },
  };
};
