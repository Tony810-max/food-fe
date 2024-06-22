import React from 'react';
import DetaiProduct from './DetaiProduct';
import PopularProductDetail from '../../../../components/PopularProductDetail';
import useDetailProduct from '@/hooks/useDetailProduct';

const ProductDetailPage = () => {
  const { dataDetailProducts, isLoading } = useDetailProduct();

  return (
    <div className="container ">
      <div className="grid grid-cols-5 gap-[5.3rem] py-[5.5rem]">
        <DetaiProduct
          dataDetailProducts={dataDetailProducts}
          isLoading={isLoading}
        />
      </div>

      <PopularProductDetail />
    </div>
  );
};

export default ProductDetailPage;
