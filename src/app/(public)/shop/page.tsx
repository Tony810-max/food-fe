"use client";
import React, { useEffect, useState } from "react";
import SidebarProduct from "./components/SidebarProduct";
import HeadingFilterShop from "./components/HeadingFilterShop";
import ProductCard from "@/components/ProductCard";
import useProduct from "@/hooks/useProduct";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IProduct } from "@/types/common";

const ShopPage = () => {
  const { products, priceFilter, setPriceFilter } = useProduct();
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>([]);

  // Price filtering
  // useEffect(() => {
  //   if (Number(priceFilter)) {
  //     const filterdData = products.filter(
  //       (product) => product.price <= String(priceFilter[0])
  //     );
  //     setCurrentProducts(filterdData);
  //   }
  // }, [priceFilter, products]);

  const handleFilter = () => {
    if (priceFilter && priceFilter.length > 0) {
      const filterdData = products.filter(
        (product) => product.price <= String(priceFilter[0])
      );
      setCurrentProducts(filterdData);
    }
  };

  return (
    <div className="container py-[6.25rem] flex gap-3">
      <SidebarProduct
        setPriceFilter={setPriceFilter}
        priceFilter={priceFilter}
        handleFilter={handleFilter}
      />
      <div className="w-full space-y-[1.875rem]">
        <HeadingFilterShop />
        <div className="grid grid-cols-3 gap-6 min-h-[63.75rem]">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              rating={product.avgRating}
              category={product.category_title}
              desc={product.description}
              image={product.images[0]}
              salePrice={product.price}
              originalPrice={10}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
