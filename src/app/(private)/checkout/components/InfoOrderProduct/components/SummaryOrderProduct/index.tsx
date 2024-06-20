'use client';
import React from 'react';
import PriceSummary from './PriceSummary';
import ProductSummary from './ProductSummary';
import useCartProduct from '@/hooks/useCartProduct';

const SummaryOrderPrice = () => {
  const { dataCartProduct, summaryValue } = useCartProduct();
  return (
    <div className="p-4 border rounded-[0.313rem] space-y-[2.125rem]">
      <PriceSummary total={summaryValue} />
      <div className="space-y-6">
        {dataCartProduct?.map((product) => (
          <ProductSummary
            key={product?.id}
            image={product?.product?.images[0]}
            name={product?.product?.title}
            price={Number(product?.product?.price)}
            discount={2}
            rating={5}
            quantity={product?.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default SummaryOrderPrice;
