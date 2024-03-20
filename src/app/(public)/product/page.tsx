import HeaderAuth from "@/components/layouts/Auth/HeaderAuth";
import React from "react";
import ProductDetailPage from "./components";

const ProductPage = () => {
  return (
    <div>
      <HeaderAuth />
      <ProductDetailPage />
    </div>
  );
};

export default ProductPage;
