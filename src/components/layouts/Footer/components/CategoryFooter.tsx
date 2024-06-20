'use client';
import useCategory from '@/hooks/useCategory';
import ROUTES from '@/types/routes';
import Link from 'next/link';
import React from 'react';

const CategoryFooter = () => {
  const { categories } = useCategory();
  return (
    <div className="pt-7 flex flex-col gap-2">
      <span className="font-sans text-lg leading-snug text-[#000000] font-bold">
        Category
      </span>
      <div className="flex flex-col gap-5">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={ROUTES.HOME}
            className="font-sans leading-relaxed text-[#777777] hover:opacity-70"
          >
            {category?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFooter;
