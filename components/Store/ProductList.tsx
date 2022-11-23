import ProductCard from "./ProductCard";
import { useRouter } from "next/router";

const ProductList = ({ products }) => {
  const router = useRouter();
  const productUrl = (productHandle) =>
    router.push(`/store/products/${productHandle}`);

  return (
    <div className=" p-4 sm:p-6  mx-auto w-full xl:w-12/12 2xl:w-10/12 3xl:w-9/12 ">
      <div className="text-2xl xl:text-3xl 2xl:text-4xl font-custom2 font-bold text-accent-orange">
        Products
      </div>
      <div className="my-4 sm:my-6 grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 xl:gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.node.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
