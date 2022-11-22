import ProductCard from "./ProductCard";
import { useRouter } from "next/router";

const ProductList = ({ products }) => {
  const router = useRouter();
  const productUrl = (productHandle) =>
    router.push(`/store/products/${productHandle}`);

  return (
    <div className=" p-4 sm:p-6 container mx-auto w-full ">
      <div className="text-2xl xl:text-3xl 2xl:text-4xl font-custom2 font-semibold text-accent-orange">
        Products
      </div>
      <div className="my-4 sm:my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.node.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
