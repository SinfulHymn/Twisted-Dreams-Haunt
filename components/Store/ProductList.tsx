import ProductCard from "./ProductCard";
import { useRouter } from "next/router";


const ProductList = ({ products }) => {
    console.log('@@@@@@@@@@@',products[0]);
    const router = useRouter();
    const productUrl = productHandle => router.push(`/store/products/${productHandle}`);

    return (
        <div className=" p-6 container mx-auto w-full ">
            <div className="text-xl sm:text-2xl font-custom2 font-semibold text-white">
                Products
            </div>
            <div className="my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">

                {products.map((product) => (
                    
                    <ProductCard 
                    product={product} 
                    key={product.node.id}
                    productUrl={productUrl}
                    
                    />
                    
                ))}
            </div>
        </div>
    );
}
export default ProductList;
