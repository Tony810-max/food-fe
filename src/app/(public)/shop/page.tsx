'use client';
import React, { useEffect, useState } from 'react';
import SidebarProduct from './components/SidebarProduct';
import HeadingFilterShop from './components/HeadingFilterShop';
import ProductCard from '@/components/ProductCard';
import useProduct from '@/hooks/useProduct';
import { IProduct } from '@/types/common';

import { useSearchParams } from 'next/navigation';
import PaginationProduct from './components/PaginationProduct';

const ShopPage = () => {
  const { products, priceFilter, setPriceFilter, meta } = useProduct(6);
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>([]);
  const [curCategory, setCurCategory] = useState('');
  const param = useSearchParams();
  const search = param?.get('search');
  const category = param?.get('category');
  

  const handleFilter = () => {
    if (!curCategory) {
      const filterdData = products.filter(
        (product) => Number(product.price) <= Number(priceFilter[0]),
      );
      setCurrentProducts(filterdData);
      return;
    }
    if (curCategory || priceFilter) {
      const filterdData = products.filter(
        (product) =>
          Number(product.price) <= Number(priceFilter[0]) ||
          product?.category?.title === curCategory,
      );
      setCurrentProducts(filterdData);
      return;
    }
  };

  useEffect(() => {
    if (!products) return;

    if (search && category) {
      const filterProduct = products?.filter((item) => {
        return (
          item?.title?.toLocaleLowerCase().includes(search) &&
          item?.category?.title.includes(category)
        );
      });
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
          {currentProducts?.length > 0 ? (
            currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                rating={4}
                category={product.category?.title}
                desc={product.description}
                image={product.images[0]}
                salePrice={product.price}
                originalPrice={10}
              />
            ))
          ) : (
            <div className="col-span-3 font-sans text-red-500 text-xl italic font-bold">
              Please re-enter the search information
            </div>
          )}
        </div>
        <PaginationProduct metaComment={meta} />
      </div>
    </div>
  );
};

export default ShopPage;
