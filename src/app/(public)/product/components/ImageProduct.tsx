import Image from "next/image";
import React from "react";

const ImageProduct = () => {
  return (
    <div className=" col-span-1 flex flex-col">
      <div className="relative w-full h-full">
        <Image src={"/images/ImageProduct.webp"} alt="ImageProduct" fill />
      </div>
      <div className="grid grid-cols-4 gap-x-3 py-4">
        <div className="relative w-full h-[5.5rem]">
          <Image src={"/images/ImageProduct.webp"} alt="ImageProduct" fill />
        </div>
        <div className="relative w-full h-[5.5rem]">
          <Image src={"/images/ImageProduct.webp"} alt="ImageProduct" fill />
        </div>
        <div className="relative w-full h-[5.5rem]">
          <Image src={"/images/ImageProduct.webp"} alt="ImageProduct" fill />
        </div>
        <div className="relative w-full h-[5.5rem]">
          <Image src={"/images/ImageProduct.webp"} alt="ImageProduct" fill />
        </div>
      </div>
    </div>
  );
};

export default ImageProduct;
