'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TabList from './TabList';
import TabPannel from './TabPannel';
import useCategory from '@/hooks/useCategory';
import ROUTES from '@/types/routes';
import useProduct from '@/hooks/useProduct';

const SaleSection = () => {
  const { categories } = useCategory();
  const { products } = useProduct();
  const [idCategory, setIdCategory] = useState<number>(categories[0]?.id);

  return (
    <div className="container py-[3.125rem] grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      <div className="flex col-span-1 flex-col gap-1">
        {categories.map((category, index) => (
          <TabList
            id={category?.id}
            key={index}
            name={category.title}
            value={65}
            onSetIdCategory={setIdCategory}
          />
        ))}
        <Link
          href={ROUTES.SHOP}
          className="w-full border-2 rounded-[0.5rem] py-5 bg-[#f7f7f8]"
        >
          <Button
            variant={'default'}
            className="w-full font-bold leading-normal text-base bg-[#f7f7f8] hover:bg-[#f7f7f8] text-[#f53e32] hover:opacity-70"
          >
            View More
          </Button>
        </Link>
      </div>

      <TabPannel
        image={'/images/cakePannel.webp'}
        name={'Cake'}
        valueSale={50}
      />

      <TabPannel
        image={'/images/milkPaannel.webp'}
        name={'Milk'}
        valueSale={40}
      />
    </div>
  );
};

export default SaleSection;
