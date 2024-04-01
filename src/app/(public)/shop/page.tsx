"use client";
import React, { useEffect, useState } from "react";
import SidebarProduct from "./components/SidebarProduct";
import HeadingFilterShop from "./components/HeadingFilterShop";
import ProductCard from "@/components/ProductCard";
import useProduct from "@/hooks/useProduct";
import { IProduct } from "@/types/common";
import Pagination from "@/components/Pagination";

const ShopPage = () => {
  const {
    products,
    priceFilter,
    setPriceFilter,
    currentPage,
    totalPage,
    setCurrentPage,
  } = useProduct(6);
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>([]);

  const handleFilter = () => {
    if (priceFilter && priceFilter.length > 0) {
      const filterdData = products.filter(
        (product) => Number(product.price) <= Number(priceFilter[0])
      );
      setCurrentProducts(filterdData);
    }
  };

  useEffect(() => {
    if (!products) return;

    setCurrentProducts(products);
  }, [products]);

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
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ShopPage;
