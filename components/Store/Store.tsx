import React from 'react';
import ProductList from './ProductList';
import Banner from '@components/global/Banner';
import { useState, useEffect } from 'react';
import { getProductsInCollection } from '@lib/Shopifyql';
import Loading from '@components/global/Loading';

const Store = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsInCollection();
      setProductData(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Banner title={'Twisted Dreams Store'} />
      {/* <Loading /> */}
      {isLoading ? <Loading /> : <ProductList products={productsData} />}
    </>
  );
};

export default Store;
