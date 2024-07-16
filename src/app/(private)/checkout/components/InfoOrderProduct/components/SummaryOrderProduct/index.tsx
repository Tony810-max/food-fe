'use client';
import React from 'react';
import PriceSummary from './PriceSummary';
import ProductSummary from './ProductSummary';
import { CartProduct } from '@/types/common';

interface ISummaryOrdeR {
  summaryValue: number;
  dataCartProduct?: CartProduct;
}

const SummaryOrderPrice: React.FC<ISummaryOrdeR> = ({
  summaryValue,
  dataCartProduct,
}) => {
  return (
    <div className="p-4 border rounded-[0.313rem] space-y-[2.125rem]">
      <PriceSummary total={summaryValue} />
      <div className="space-y-6">
        {dataCartProduct?.items?.map((product) => (
          <ProductSummary
            key={product?.id}
            image={product?.product?.images[0]}
            name={product?.product.title}
            price={product?.product.price}
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
