import { Product } from "@/types/common";
import Image from "next/image";
import React, { useState } from "react";
import blankImage from "/public/images/Blank-Image.webp";
interface ImageProps {
  data: Product;
}

const ImageProduct: React.FC<ImageProps> = ({ data }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(
    data?.images[0]
  );

  return (
    <div className="col-span-1 flex flex-col">
      <div className="relative w-full h-full">
        <Image
          src={currentImage ? currentImage : blankImage}
          alt="ImageProduct"
          fill
          priority
          unoptimized
          sizes="(min-width: 768px) 100vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-3 py-4">
        {Array.isArray(data?.images) &&
          data?.images?.map((image: string, index: number) => (
            <div
              key={index}
              className="relative w-full col-span-1 aspect-square"
            >
              <Image
                src={image}
                alt="ImageProduct"
                fill
                onClick={() => setCurrentImage(image)}
                className="cursor-pointer "
                sizes="(min-width: 768px) 100vw"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageProduct;
