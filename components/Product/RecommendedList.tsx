import ProductCard from "@components/Store/ProductCard";

const RecommendedList = ({ products, current }) => {
  return (
    <div className="container mx-auto px-10">
      <div className="mx-auto px-4 pt-16 pb-2 sm:py-24 sm:px-6 md:pt-10 md:pb-2 lg:px-8 lg:py-8">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Recommended Products
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) =>
          product.node.id === current ? null : (
            <ProductCard key={product.node.id} product={product} />
          )
        )}
      </div>
    </div>
  );
};

export default RecommendedList;
