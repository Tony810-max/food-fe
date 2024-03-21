"use client";
import React, { useEffect, useState } from "react";

import ImageProduct from "./ImageProduct";
import ContentProduct from "./ContentProduct";
import AboutProduct from "./AboutProductSection";
import useDetailProduct from "@/hooks/useDetailProduct";

const DetaiProduct = () => {
 const {dataProducts} = useDetailProduct()

  return (
    <div className="col-span-4 grid grid-cols-2 gap-x-3 gap-y-10 min-h-screen">
      <ImageProduct data={dataProducts} />
      <ContentProduct data={dataProducts} />
      <AboutProduct data={dataProducts} />
    </div>
  );
};

export default DetaiProduct;
