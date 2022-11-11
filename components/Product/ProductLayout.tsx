import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { getAllProducts, getProduct } from "@lib/shopifyql";
import ProductPageContent from "./ProductPageContent";

const ProductLayout = ({ product }) => {
    console.log(product.images)
    return (
        <div className="flex pt-16 flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
            {/* <ProductPageContent product={product} /> */}
        </div>
    );
};

export default ProductLayout;

