'use client';
import { Product } from '@/types/common';
import dynamic from 'next/dynamic';
import React from 'react';
import HeadingContentProduct from './HeadingContentProduct';
import RateContentProduct from './RateContentProduct';
import FormContentProduct from './FormContentProduct';

const InfoContentProduct = dynamic(() => import('./InfoContentProduct'), {
  ssr: false,
});
interface ContentProps {
  data: Product | undefined;
}

const ContentProduct: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="col-span-1 flex flex-col min-h-[32rem] justify-between px-3">
      <HeadingContentProduct />
      <div className="space-y-12">
        <RateContentProduct />
        <InfoContentProduct data={data} />
      </div>
      <div className="flex gap-[0.3rem] items-center">
        <span className="font-sans text-2xl text-[#f53e32] leading-tight font-bold">
          ${Number(data?.price)}
        </span>
        <span className="font-sans text-base leading-relaxed text-[#7a7a7a] font-normal line-through">
          $123.25
        </span>
      </div>
      <FormContentProduct />
    </div>
  );
};

export default ContentProduct;
