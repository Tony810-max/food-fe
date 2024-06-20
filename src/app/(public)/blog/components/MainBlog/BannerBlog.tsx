import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';
import useProduct from '@/hooks/useProduct';
import Image from 'next/image';

const BannerBlog = () => {
  const { products } = useProduct();
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {products?.map((product) => (
          <CarouselItem key={product?.id} className="relative w-full h-[29rem]">
            <Image
              src={product?.images[1]}
              alt="imgBLogFood"
              fill
              priority
              unoptimized
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerBlog;
