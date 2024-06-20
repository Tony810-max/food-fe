'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IProduct } from '@/types/common';

import useCategory from '@/hooks/useCategory';

import HeadingHomePage from '@/components/Heading';
import ProductCard from '../../../../../components/ProductCard';
import ListItem from './ListItem';
import useProduct from '@/hooks/useProduct';
import Link from 'next/link';
import ROUTES from '@/types/routes';

const PopularProductsSection: React.FC = () => {
  const { categories } = useCategory();
  const { products } = useProduct();
  const [categoryFilter, setCategoryFilter] = useState<number | string>('');
  const [productFilter, setProductFilter] = useState<IProduct[]>([]);
  useEffect(() => {
    if (categoryFilter === 'all') {
      setProductFilter(products);
      return;
    }

    if (categoryFilter) {
      const filterdData = products.filter(
        (product) => product.category.id === categoryFilter,
      );

      setProductFilter(filterdData);
      return;
    }

    setProductFilter(products);
  }, [categoryFilter, products]); // dependencies

  return (
    <div className="py-[3.125rem] container ">
      <HeadingHomePage
        title="Popular Products"
        des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 min-h-[63.75rem]">
        <div className="col-span-1 flex flex-col gap-y-6">
          <div className="flex flex-col  gap-1 cursor-pointer">
            <ListItem
              categoryFilter={categoryFilter}
              onClick={setCategoryFilter}
              id={'all'}
              name={'All'}
            />
            {categories.map((category, index) => {
              return (
                <ListItem
                  id={category.id}
                  onClick={setCategoryFilter}
                  key={index}
                  categoryFilter={categoryFilter}
                  name={category.title}
                />
              );
            })}
            <Link
              href={ROUTES.SHOP}
              className="font-bold text-lg capitalize flex w-full justify-between items-center bg-[#f7f7f8] rounded-lg px-4 py-3  hover:opacity-70 hover:text-[#F53E32]"
            >
              View More
            </Link>
          </div>
          <div className="relative hidden md:block w-full h-full rounded-lg aspect-[1/2]">
            <Image
              src={'/images/product-banner.webp'}
              alt="product-banner"
              fill
              sizes="(min-width: 768px) 100vw"
            />
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 h-fit">
          {productFilter?.map((product: IProduct, index) => {
            if (index < 6) {
              return (
                <ProductCard
                  id={product?.id}
                  key={product?.title}
                  rating={4}
                  originalPrice={product?.price}
                  salePrice={product?.price}
                  desc={product?.description}
                  category={product?.category?.title}
                  image={product?.images[0]}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
