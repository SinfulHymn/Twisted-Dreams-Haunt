import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { getAllProducts, getProduct } from "@lib/shopifyql";
import ProductPageContent from "./ProductPageContent";

const ProductLayout = ({ product }) => {
    console.log(product.images)
    return (
        <div className=" py-12 sm:pt-20">
            <ProductPageContent product={product} />
        </div>
    );
};

export default ProductLayout;

