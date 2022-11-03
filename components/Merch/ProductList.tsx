import ProductCard from "./ProductCard";
const ProductList = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}
