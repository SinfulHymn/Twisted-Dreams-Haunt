import { useState, useContext } from 'react';
import { formatter } from '@utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '@context/shopContext';

export default function ProductForm({ product }) {
  const { addToCart } = useContext(CartContext);
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="relative m-4 flex w-full flex-col overflow-hidden rounded-xl bg-zinc-900  p-8   md:w-1/2 md:p-9">
      <h2 className="text-2xl font-bold dark:text-white lg:text-3xl">
        {product.title}
      </h2>
      <span className="mt-2 pb-3 text-2xl font-semibold text-main-red">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      <div className="">
        {product.options.map(({ name, values }) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
          />
        ))}
      </div>
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className="mt-3 rounded-lg bg-black px-2 py-3 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
