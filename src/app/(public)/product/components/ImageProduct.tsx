import { Product } from "@/types/common";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import blankImage from "/public/images/Blank-Image.webp";
import { Skeleton } from "@/components/ui/skeleton";
interface ImageProps {
  data: Product | undefined;
  isLoading: boolean;
}

const ImageProduct: React.FC<ImageProps> = ({ data, isLoading }) => {
  const [currentImage, setCurrentImage] = useState<string | StaticImageData>(
    ""
  );
  const [isLoadingStatus, setIsLoadingStatus] = useState<boolean>(isLoading);

  useEffect(() => {
    setIsLoadingStatus(true);

    if (!data) {
      setCurrentImage("");
      setIsLoadingStatus(false);
    }

    if (data?.images && data.images.length > 0) {
      setCurrentImage(data?.images[0]);
      setIsLoadingStatus(false);
    }
  }, [data]);

  return (
    <div className="col-span-1 flex flex-col">
      <div className="relative w-full aspect-square">
        {isLoadingStatus ? (
          <Skeleton className="w-[31.875rem] aspect-square" />
        ) : (
          <Image
            src={currentImage}
            alt="ImageProduct"
            fill
            priority
            unoptimized
            sizes="(min-width: 768px) 100vw"
          />
        )}
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
