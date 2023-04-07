import ProductPageContent from './ProductPageContent';
import Banner from '@components/global/Banner';

const ProductLayout = ({ product }) => {
  return (
    <>
      <Banner title={product.title} />
      <ProductPageContent product={product} />
    </>
  );
};

export default ProductLayout;
