import Heading from '@/components/Heading';
import ProductCard from '@/components/ProductCard';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import useProduct from '@/hooks/useProduct';
import Autoplay from 'embla-carousel-autoplay';

const PopularProductDetail = () => {
  const { products } = useProduct();

  return (
    <div className="w-full py-12 space-y-2">
      <Heading
        title="Popular Products"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et viverra maecenas accumsan lacus vel facilisis."
      />

      <Carousel
        plugins={[Autoplay({ delay: 1500 })]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {products &&
            products?.length > 0 &&
            products?.map((product, index) => {
              if (index < 5) {
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ProductCard
                      key={index}
                      id={product?.id}
                      category={product.category?.title}
                      rating={4}
                      desc={product.description}
                      image={product.images[0]}
                      salePrice={product.discount}
                      originalPrice={product.price}
                    />
                  </CarouselItem>
                );
              }
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PopularProductDetail;
