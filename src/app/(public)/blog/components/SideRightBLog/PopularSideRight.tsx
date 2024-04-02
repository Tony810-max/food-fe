"use client";
import useCategory from "@/hooks/useCategory";
import React from "react";

const PopularSideRight = () => {
  const { categories } = useCategory();
  return (
    <div className="py-5 space-y-5">
      <span className="font-sans text-lg leading-none text-[#2b2b2d] font-medium">
        Popular Tags
      </span>
      <div className="grid grid-cols-2 gap-2">
        {categories?.map((category) => (
          <span
            key={category?.id}
            className="border py-1 px-4 rounded-[0.313rem]"
          >
            {category?.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularSideRight;
