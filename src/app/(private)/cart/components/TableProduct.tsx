import React from 'react';
import ItemProductCart from './ItemProductCart';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ROUTES from '@/types/routes';
import { CartProduct } from '@/types/common';

interface ItemProductProps {
  dataCartProduct: CartProduct;
  fetchCartProduct: () => void;
}

const TableProduct: React.FC<ItemProductProps> = ({
  dataCartProduct,
  fetchCartProduct,
}) => {
  return (
    <div className=" space-y-8 overflow-auto min-w-80">
      <table className="w-full">
        <tbody className="w-full">
          <tr className="bg-[#e9e9e9]">
            <th className=" rounded-tl-lg">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th className=" rounded-tr-lg">Action</th>
          </tr>

          {dataCartProduct?.items.map((product) => (
            <ItemProductCart
              key={product.id}
              fetchCartProduct={fetchCartProduct}
              data={product}
            />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Link href={ROUTES.CHECKOUT}>
          <Button variant={'destructive'}>Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default TableProduct;
