"use client";
import useCategory from "@/hooks/useCategory";
import useProduct from "@/hooks/useProduct";
import React, { useMemo } from "react";

const CategorySideRight = () => {
  const { categories } = useCategory();
  const { products } = useProduct();

  // Hàm này sẽ trả về số lượng sản phẩm theo danh mục
  const countProductsByCategory = useMemo(() => {
    return categories.reduce((acc: any, category) => {
      console.log(category?.title);
      acc[category?.title] = products.filter(
        (product) => product?.category_id === category.id
      ).length;
      return acc;
    }, {});
  }, [categories, products]);

  return (
    <div className="space-y-5">
      <span className="font-sans text-lg leading-none text-[#2b2b2d] font-medium">
        Category
      </span>
      <div className="space-y-1">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex justify-between py-[0.625rem] px-[0.875rem] border rounded-[0.313rem]"
          >
            <span>{category.title}</span>
            <span>({countProductsByCategory[category.title] ?? 0})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySideRight;
