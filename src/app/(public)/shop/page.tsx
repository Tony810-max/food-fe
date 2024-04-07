"use client";
import React, { useEffect, useState } from "react";
import SidebarProduct from "./components/SidebarProduct";
import HeadingFilterShop from "./components/HeadingFilterShop";
import ProductCard from "@/components/ProductCard";
import useProduct from "@/hooks/useProduct";
import { IProduct } from "@/types/common";
import Pagination from "@/components/Pagination";

import { useSearchParams } from "next/navigation";

const ShopPage = () => {
  const {
    products,
    priceFilter,
    setPriceFilter,
    currentPage,
    totalPage,
    setCurrentPage,
    limit,
  } = useProduct(6);
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>([]);
  const [curCategory, setCurCategory] = useState("");

  const param = useSearchParams();
  const search = param?.get("search");
  const category = param?.get("category");

  const handleFilter = () => {
    if (priceFilter && priceFilter.length > 0) {
      const filterdData = products.filter(
        (product) =>
          Number(product.price) <= Number(priceFilter[0]) &&
          product?.category_title === curCategory
      );
      setCurrentProducts(filterdData);
    }
  };

  useEffect(() => {
    if (!products) return;

    if (search) {
      const filterProduct = products?.filter(
        (item) =>
          item?.title?.toLowerCase()?.includes(search) &&
          item?.category_title?.includes(category!)
      );
      if (filterProduct?.length > 0) {
        setCurrentProducts(filterProduct);
      }

      return;
    }
    setCurrentProducts(products);
  }, [category, products, search]);

  return (
    <div className="container py-[6.25rem] flex gap-3">
      <SidebarProduct
        onSetCurCategory={setCurCategory}
        setPriceFilter={setPriceFilter}
        priceFilter={priceFilter}
        handleFilter={handleFilter}
      />

      <div className="w-full space-y-[1.875rem]">
        <HeadingFilterShop count={currentProducts?.length} />

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
          limit={limit}
          totalProduct={currentProducts?.length}
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ShopPage;
