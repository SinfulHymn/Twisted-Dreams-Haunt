import ProductCard from "./ProductCard";
const ProductList = ({ products }) => {

    return (
        <div className=" p-6 container mx-auto w-full ">
            <div className="text-xl sm:text-2xl font-custom2 font-semibold text-white">
                Featured Products
            </div>
            <div className="my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">

                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
export default ProductList;
