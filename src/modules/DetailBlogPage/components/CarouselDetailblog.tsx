'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface carouselProps {
  img: string[] | undefined;
}

const CarouselDetailblog: React.FC<carouselProps> = ({ img }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-lg border shadow-md"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="cursor-grabbing ">
        {img?.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[26.25rem]">
              <Image src={img} alt="imgBlogDetail" fill priority unoptimized />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselDetailblog;
