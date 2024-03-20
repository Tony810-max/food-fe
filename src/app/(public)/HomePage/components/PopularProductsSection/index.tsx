"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { IProduct } from "@/types/common";

import useCategory from "@/hooks/useCategory";

import HeadingHomePage from "@/components/Heading";
import ProductCard from "./ProductCard";
import ListItem from "./ListItem";
import useProduct from "@/hooks/useProduct";

const PopularProductsSection: React.FC = () => {
  const { categories } = useCategory();
  const { products } = useProduct();

  const [categoryFilter, setCategoryFilter] = useState<number | string>("");
  const [productFilter, setProductFilter] = useState<IProduct[]>([]);

  useEffect(() => {
    if (categoryFilter) {
      const filterdData = products.filter(
        (product) => product.category_id === categoryFilter
      );

      setProductFilter(filterdData);
      return;
    }

    setProductFilter(products);
  }, [categoryFilter, products]); // dependencies

  return (
    <div className="py-24 container">
      <HeadingHomePage
        title="Popular Products"
        des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis."
      />
      <div className="grid grid-cols-4 gap-x-6 mt-8">
        <div className="col-span-1 grid  gap-y-6">
          <div className=" flex flex-col gap-1 cursor-pointer">
            <ListItem onClick={setCategoryFilter} id={null} name={"All"} />
            {categories.map((category, index) => {
              return (
                <ListItem
                  id={category.id}
                  onClick={setCategoryFilter}
                  key={index}
                  name={category.title}
                />
              );
            })}
          </div>
          <div className="relative w-full h-full rounded-lg aspect-[1/2]">
            <Image
              src={"/images/product-banner.webp"}
              alt="product-banner"
              fill
            />
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-y-6 h-fit">
          {productFilter?.map((product: IProduct) => (
            <ProductCard
              key={product?.title}
              rating={product?.avgRating}
              originalPrice={product?.price}
              salePrice={product?.price}
              desc={product?.description}
              category={product?.category_title}
              image={product?.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
