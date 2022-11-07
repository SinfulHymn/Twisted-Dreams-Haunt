import { useState } from 'react'
import BacktoStoreButton from './BackToStoreButton'
import ProductInfo from './ProductInfo'
import ProductForm from './ProductForm'

function ProductDetails({ product }) {
  console.log('!@#@!!#@#1',product)
  const { title, description, price, variants, handle } = product
  const {src: productImage} = product.images[0] || {src:"/images/placeholder.jpg"};
  const [variantPrice, setVariantPrice] = useState(product.variants[0].price.amount)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
     <BacktoStoreButton />
     <ProductInfo 
        title={title}
        description={description}
        price={variantPrice}
      />
      <ProductForm 
        title={title}
        handle={handle}
        variants={variants} 
        mainImg={productImage}
        setVariantPrice={setVariantPrice}
      /> 
    </div>
  )
}

export default ProductDetails
