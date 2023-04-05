import ProductList from "./ProductList";
import { getProductsInCollection } from "@lib/Shopifyql";
import Banner from "@components/global/Banner";

const Store = (props) => {
  const { products } = props;
  return (
    <div className="relative z-0 h-full w-full  text-white">
      <Banner title={"Twisted Dreams Store"} />
      <ProductList products={products} />
    </div>
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
