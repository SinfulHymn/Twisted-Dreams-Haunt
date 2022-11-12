import ProductPageContent from "./ProductPageContent";

const ProductLayout = ({ product }) => {
    
    return (
        <div className=" py-12 sm:pt-20">
            <ProductPageContent product={product} />
        </div>
    );
};

export default ProductLayout;

