import React from "react";
import DetaiProduct from "./DetaiProduct";
import PopularProductDetail from "../../../../components/PopularProductDetail";
import useDetailProduct from "@/hooks/useDetailProduct";
import useProduct from "@/hooks/useProduct";

const ProductDetailPage = () => {
  const { products } = useProduct();
  const { dataProducts, isLoading } = useDetailProduct();

  return (
    <div className="container ">
      <div className="grid grid-cols-5 gap-[5.3rem] py-[5.5rem]">
        <DetaiProduct dataProducts={dataProducts} isLoading={isLoading} />
      </div>

      <PopularProductDetail data={products} />
    </div>
  );
};

export default ProductDetailPage;
