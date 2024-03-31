"use client";
import useCartProduct from "@/hooks/useCartProduct";
import React from "react";
import ItemProductCart from "./ItemProductCart";

const CartProduct = () => {
  const { dataCartProduct, fetchCartProduct } = useCartProduct();

  return (
    <div className="min-h-[50vh]">
      <table className="w-full">
        <tbody className="w-full">
          <tr className="bg-[#e9e9e9]">
            <th className=" rounded-tl-lg">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th className=" rounded-tr-lg">Action</th>
          </tr>

          {dataCartProduct?.map((product) => (
            <ItemProductCart
              key={product.id}
              fetchCartProduct={fetchCartProduct}
              data={product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
