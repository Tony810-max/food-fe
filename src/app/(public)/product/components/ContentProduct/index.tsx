"use client";
import { Product } from "@/types/common";
import React, { useState } from "react";
import HeadingContentProduct from "./HeadingContentProduct";
import RateContentProduct from "./RateContentProduct";
import FormContentProduct from "./FormContentProduct";
import InfoContentProduct from "./InfoContentProduct";

interface ContentProps {
  data: Product | undefined;
}

const ContentProduct: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="col-span-1 flex flex-col min-h-[32rem] justify-evenly px-3">
      <HeadingContentProduct />
      <RateContentProduct />
      <InfoContentProduct data={data} />
      <div className="flex gap-[0.3rem] items-center">
        <span className="font-sans text-2xl text-[#f53e32] leading-tight font-bold">
          ${Number(data?.price)}
        </span>
        <span className="font-sans text-base leading-relaxed text-[#7a7a7a] font-normal line-through">
          $123.25
        </span>
      </div>
      <FormContentProduct />
    </div>
  );
};

export default ContentProduct;
