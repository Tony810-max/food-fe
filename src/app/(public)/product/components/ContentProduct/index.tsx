'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import HeadingContentProduct from './HeadingContentProduct';
import RateContentProduct from './RateContentProduct';
import FormContentProduct from './FormContentProduct';
import { DetailProductContext } from '@/contexts/useProductDetailContext';

const InfoContentProduct = dynamic(() => import('./InfoContentProduct'), {
  ssr: false,
});

const ContentProduct = () => {
  const context = React.useContext(DetailProductContext);
  const data = context?.dataDetailProducts;

  return (
    <div className="col-span-1 flex flex-col min-h-[32rem] justify-between px-3">
      <HeadingContentProduct />
      <div className="space-y-12">
        <RateContentProduct />
        <InfoContentProduct />
      </div>
      <div className="flex gap-[0.3rem] items-center">
        <span className="font-sans text-2xl text-[#f53e32] leading-tight font-bold">
          ${data && Number(data.price)}
        </span>
        {Number(data?.discount) > 0 ? (
          <span className="font-sans text-base leading-relaxed text-[#7a7a7a] font-normal line-through">
            ${data?.discount}
          </span>
        ) : (
          ''
        )}
      </div>
      <FormContentProduct />
    </div>
  );
};

export default ContentProduct;
