import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { DetailProductContext } from '@/contexts/useProductDetailContext';

const ImageProduct = () => {
  const [currentImage, setCurrentImage] = useState<string | StaticImageData>(
    '',
  );
  const context = React.useContext(DetailProductContext);
  const [isLoadingStatus, setIsLoadingStatus] = useState<boolean>(
    context?.isLoading,
  );

  useEffect(() => {
    setIsLoadingStatus(true);

    if (!context?.dataDetailProducts) {
      setCurrentImage('');
      setIsLoadingStatus(false);
    }

    if (
      context?.dataDetailProducts?.images &&
      context?.dataDetailProducts.images.length > 0
    ) {
      setCurrentImage(context?.dataDetailProducts?.images[0]);
      setIsLoadingStatus(false);
    }
  }, [context?.dataDetailProducts]);

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
        {Array.isArray(context?.dataDetailProducts?.images) &&
          context?.dataDetailProducts?.images?.map(
            (image: string, index: number) => (
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
            ),
          )}
      </div>
    </div>
  );
};

export default ImageProduct;
