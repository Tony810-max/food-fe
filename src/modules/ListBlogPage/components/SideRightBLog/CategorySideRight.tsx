/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import useProduct from '@/hooks/useProduct';
import { ICategory } from '@/types/common';
import React from 'react';

interface Props {
  categories: ICategory[];
}

const CategorySideRight: React.FC<Props> = ({ categories }) => {
  const { products } = useProduct();

  // Hàm này sẽ trả về số lượng sản phẩm theo danh mục
  const countProductsByCategory = React.useMemo(() => {
    return categories.reduce((acc: any, category) => {
      acc[category?.title] = products.filter(
        (product) => product?.category?.id === category.id,
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
