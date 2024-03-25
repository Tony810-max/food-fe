"use client";
import React from "react";

import ImageProduct from "./ImageProduct";
import ContentProduct from "./ContentProduct";
import AboutProduct from "./AboutProductSection";
import { Product } from "@/types/common";

interface Props {
  dataProducts: Product | undefined;
  isLoading: boolean;
}

const DetaiProduct: React.FC<Props> = ({ dataProducts, isLoading }) => {
  return (
    <div className="col-span-5 grid grid-cols-2 gap-x-3 gap-y-10 min-h-screen">
      <ImageProduct data={dataProducts} isLoading={isLoading} />
      <ContentProduct data={dataProducts} />
      <AboutProduct data={dataProducts} />
    </div>
  );
};

export default DetaiProduct;
