'use client';
import React from 'react';
import PriceSummary from './PriceSummary';
import ProductSummary from './ProductSummary';
import { CartContext } from '@/contexts/useSummaryOrder';

const SummaryOrderPrice = () => {
  const context = React.useContext(CartContext);
  
  return (
    <div className="p-4 border rounded-[0.313rem] space-y-[2.125rem]">
      <PriceSummary total={context?.summaryValue} />
      <div className="space-y-6">
        {context?.dataCartProduct?.items?.map((product) => 
        (
          <ProductSummary
            key={product?.id}
            image={product?.product?.images[0]}
            name={product?.product.title}
            price={product?.product.price}
            discount={2}
            rating={5}
            quantity={product?.quantity}
          />
        )
        )}
      </div>
    </div>
  );
};

export default SummaryOrderPrice;
