/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useContext } from 'react';
import Social from '@/components/Social';

import HealthMainBlog from './HealthMainBlog';
import BreadcrumbMainBlog from './BreadcrumbMainBlog';
import BannerBlog from './BannerBlog';
import ViewBlog from './ViewBlog';
import DialogBlog from './DialogBlog';
import { TextContext } from '@/contexts/useTextContext';

const MainBlog = () => {
  const context: any = useContext(TextContext);

  return (
    <div className="w-fit px-4 col-span-2 space-y-[2.125rem]">
      <BannerBlog />
      <div className="space-y-4">
        <BreadcrumbMainBlog />
        <HealthMainBlog />
        <div className="space-y-4">
          {context?.dataBlog?.map((item: any) => (
            <ViewBlog key={item?.id} blog={item} />
          ))}
        </div>

        <div className="flex justify-end">
          <DialogBlog />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between border rounded-[0.313rem] p-[1rem]">
        <div className="flex gap-6">
          <span className="border rounded-[0.313rem] py-[0.375rem] px-4">
            Cabbage
          </span>
          <span className="border rounded-[0.313rem] py-[0.375rem] px-4">
            Appetizer
          </span>
          <span className="border rounded-[0.313rem] py-[0.375rem] px-4">
            Meat Food
          </span>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default MainBlog;
