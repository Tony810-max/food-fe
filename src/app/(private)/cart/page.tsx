'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PopularProductDetail from '@/components/PopularProductDetail';

const CartProduct = dynamic(() => import('./components/CartProduct'), {
  ssr: false,
});

const CartPage = () => {
  return (
    <div className="container py-[6.25rem]">
      <Suspense fallback={<div>Loading...</div>}>
        <CartProduct />
      </Suspense>
      <PopularProductDetail />
    </div>
  );
};

export default CartPage;
