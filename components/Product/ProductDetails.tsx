import { useState } from 'react'
import BacktoStoreButton from './BackToStoreButton'
import ProductInfo from './ProductInfo'
// import ProductForm from '@/components/ProductForm'

function ProductDetails({ product }) {
  console.log('!@#@!!#@#1',product)
  const [variantPrice, setVariantPrice] = useState(product.variants[0].price.amount)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
     <BacktoStoreButton />
      {/* 
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm 
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges} 
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      /> */}
    </div>
  )
}

export default ProductDetails
