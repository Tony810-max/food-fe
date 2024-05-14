import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types/common";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ProductProps {
  data: undefined | IProduct[];
}

const PopularProductDetail: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="w-full">
      <Heading
        title="Popular Products"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et viverra maecenas accumsan lacus vel facilisis."
      />

      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {data &&
            data?.length > 0 &&
            data?.map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ProductCard
                  key={index}
                  id={data?.id}
                  category={data.category?.title}
                  rating={4}
                  desc={data.description}
                  image={data.images[0]}
                  salePrice={data.price}
                  originalPrice={""}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PopularProductDetail;
