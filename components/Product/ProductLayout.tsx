import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

const ProductLayout = ({ images, product }) => {
    return (
        <div className="flex pt-16 flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
            <ProductImage images={images} />
            <ProductDetails product={product} />
        </div>
    );
};

export default ProductLayout;