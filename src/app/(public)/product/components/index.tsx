import React from 'react';
import DetaiProduct from './DetaiProduct';
import PopularProductDetail from '../../../../components/PopularProductDetail';
import { ProductDetailProvider } from '@/contexts/useProductDetailContext';

const ProductDetailPage = () => {
  return (
    <ProductDetailProvider>
      <div className="container ">
        <div className=" gap-[5.3rem] py-[5.5rem]">
          <DetaiProduct />
        </div>

        <PopularProductDetail />
      </div>
    </ProductDetailProvider>
  );
};

export default ProductDetailPage;
