'use client';
import useCartProduct from '@/hooks/useCartProduct';
import React from 'react';
import TableProduct from './TableProduct';
import NoProductExists from './NoProductExists';

const CartProduct = () => {
  const { dataCartProduct, fetchCartProduct } = useCartProduct();
  return (
    <div>
      {dataCartProduct ? (
        <TableProduct
          dataCartProduct={dataCartProduct}
          fetchCartProduct={fetchCartProduct}
        />
      ) : (
        <NoProductExists />
      )}
    </div>
  );
};

export default CartProduct;
