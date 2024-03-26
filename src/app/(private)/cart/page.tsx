"use client";
import React from "react";
import dynamic from "next/dynamic";
import PopularProductDetail from "@/components/PopularProductDetail";
import useProduct from "@/hooks/useProduct";

const CartProduct = dynamic(() => import("./components"), {
  ssr: false,
});
const CartPage = () => {
  const { products } = useProduct();
  return (
    <div className="container py-[6.25rem]">
      <CartProduct />
      <PopularProductDetail data={products} />
    </div>
  );
};

export default CartPage;
