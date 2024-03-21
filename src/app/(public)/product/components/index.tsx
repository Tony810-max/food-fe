import React from "react";
import SidebarProduct from "./SidebarProduct";
import DetaiProduct from "./DetaiProduct";
import PopularProductDetail from "./PopularProductDetail";

const ProductDetailPage = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-5 gap-x-[5.3rem] py-[5.5rem]">
        <SidebarProduct />
        <DetaiProduct />
      </div>
      <PopularProductDetail />
    </div>
  );
};

export default ProductDetailPage;
