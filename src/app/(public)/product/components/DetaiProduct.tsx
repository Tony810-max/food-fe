"use client";
import React from "react";

import ImageProduct from "./ImageProduct";
import ContentProduct from "./ContentProduct";
import AboutProduct from "./AboutProductSection";
import { Product } from "@/types/common";

interface Props {
  dataDetailProducts: Product | undefined;
  isLoading: boolean;
}

const DetaiProduct: React.FC<Props> = ({ dataDetailProducts, isLoading }) => {
  return (
    <div className="col-span-5 grid grid-cols-2 gap-x-3 gap-y-10 min-h-screen">
      <ImageProduct data={dataDetailProducts} isLoading={isLoading} />
      <ContentProduct data={dataDetailProducts} />
      <AboutProduct data={dataDetailProducts} />
    </div>
  );
};

export default DetaiProduct;
