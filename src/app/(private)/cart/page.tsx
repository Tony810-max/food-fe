'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import PopularProductDetail from '@/components/PopularProductDetail';

const CartProduct = dynamic(() => import('./components/CartProduct'), {
  ssr: false,
});

const CartPage = () => {
  return (
    <div className="container py-[6.25rem]">
      <CartProduct />
      <PopularProductDetail />
    </div>
  );
};

export default CartPage;
