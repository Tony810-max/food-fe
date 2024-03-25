import React from "react";
import DetaiProduct from "./DetaiProduct";
import PopularProductDetail from "../../../../components/PopularProductDetail";
import useDetailProduct from "@/hooks/useDetailProduct";

const ProductDetailPage = () => {
  const { dataProducts, isLoading } = useDetailProduct();

  return (
    <div className="container ">
      <div className="grid grid-cols-5 gap-[5.3rem] py-[5.5rem]">
        <DetaiProduct dataProducts={dataProducts} isLoading={isLoading} />
      </div>

      <PopularProductDetail data={dataProducts} />
    </div>
  );
};

export default ProductDetailPage;
