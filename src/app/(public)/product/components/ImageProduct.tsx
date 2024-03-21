import { Product } from "@/types/common";
import Image from "next/image";
import React from "react";

interface ImageProps {
  data: Product | string[] | undefined;
}

const ImageProduct: React.FC<ImageProps> = ({ data }) => {
  return (
    <div className=" col-span-1 flex flex-col">
      <div className="relative w-full h-full">
        <Image src={data?.images?.[0]} alt="ImageProduct" fill />
      </div>
      <div className="grid grid-cols-4 gap-x-3 py-4">
        {data?.images?.map((image: string, index: number) => (
          <div key={index} className="relative w-full h-[5.5rem]">
            <Image src={image} alt="ImageProduct" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageProduct;
