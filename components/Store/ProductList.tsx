import ProductCard from './ProductCard';
import { useRouter } from 'next/router';

const ProductList = ({ products }) => {
  const router = useRouter();
  const productUrl = (productHandle) =>
    router.push(`/store/products/${productHandle}`);

  return (
    <div className=" xl:w-12/12 mx-auto  w-full p-4 sm:p-6 2xl:w-10/12 3xl:w-9/12 ">
      <div className="font-custom2 text-2xl font-bold text-accent-orange xl:text-3xl 2xl:text-4xl">
        Products
      </div>
      <div className="my-4 grid grid-cols-2 gap-4 xs:grid-cols-2 sm:my-6 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.node.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
