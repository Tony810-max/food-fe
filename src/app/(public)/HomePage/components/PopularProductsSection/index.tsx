"use client";
import React from "react";
import Image from "next/image";
import { Lock, Star } from "lucide-react";
import HeadingHomePage from "@/components/Heading";
import ProductCard from "./ProductCard";
import ListItem from "./ListItem";
import useCategory from "@/hooks/useCategory";

const PopularProductsSection = () => {
  const { categories } = useCategory();

  return (
    <div className="mt-24 container min-h-screen">
      <HeadingHomePage
        title="Popular Products"
        des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis."
      />
      <div className="grid grid-cols-4 gap-x-6 mt-8">
        <div className="col-span-1 grid grid-rows-3 gap-y-6">
          <div className="row-span-1 flex flex-col gap-1">
            {categories.map((category) => {
              return <ListItem key={category.id} name={category.title} />;
            })}
          </div>
          <div className="relative row-span-3 w-full h-full rounded-lg">
            <Image
              src={"/images/product-banner.webp"}
              alt="product-banner"
              fill
            />
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 grid-rows-2 gap-y-6">
          <div className="p-3 border border-[#ececec]">
            <div className="relative h-72">
              <Image src={"/images/imageCard.webp"} alt="imageCard" fill />
              <div className="absolute w-6 h-6 z-10 -bottom-[0.75rem] left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center bg-[#f7f7f8]">
                <Lock size={16} color="#f53e32" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <span>Vegetables</span>
              <div className="flex items-center mt-2 gap-[0.4rem]">
                <div className="flex">
                  <Star size={16} color="#F5885F" fill="#F5885F" />
                  <Star size={16} color="#F5885F" fill="#F5885F" />
                  <Star size={16} color="#F5885F" fill="#F5885F" />
                  <Star size={16} color="#F5885F" fill="#F5885F" />
                  <Star size={16} color="#F5885F" />
                </div>
                <span className="text-[#999999]">(4.5)</span>
              </div>
              <span className="max-w-60 text-center leading-normal font-sans font-bold mt-4">
                Fresh organic villa farm lomon 500gm pack
              </span>
              <div className="mt-4 space-x-2">
                <span className="font-extrabold text-lg font-sans text-[#F53E32]">
                  $120.25
                </span>
                <span className="line-through text-[#7A7A7A]">$123.25</span>
              </div>
            </div>
          </div>
          <ProductCard
            rating={5}
            orinPrice={123.25}
            salePrice={120.25}
            desc="Fresh organic villa farm lomon 500gm pack"
            category="vegetable"
            image="/images/imageCard.webp"
          />
          <ProductCard
            rating={5}
            orinPrice={123.25}
            salePrice={120.25}
            desc="Fresh organic villa farm lomon 500gm pack"
            category="vegetable"
            image="/images/imageCard.webp"
          />
          <ProductCard
            rating={5}
            orinPrice={123.25}
            salePrice={120.25}
            desc="Fresh organic villa farm lomon 500gm pack"
            category="vegetable"
            image="/images/imageCard.webp"
          />
          <ProductCard
            rating={5}
            orinPrice={123.25}
            salePrice={120.25}
            desc="Fresh organic villa farm lomon 500gm pack"
            category="vegetable"
            image="/images/imageCard.webp"
          />
          <ProductCard
            rating={5}
            orinPrice={123.25}
            salePrice={120.25}
            desc="Fresh organic villa farm lomon 500gm pack"
            category="vegetable"
            image="/images/imageCard.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
