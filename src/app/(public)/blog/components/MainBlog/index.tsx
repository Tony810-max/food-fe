'use client';
import React, { createContext, useEffect } from 'react';
import Social from '@/components/Social';

import HealthMainBlog from './HealthMainBlog';
import BreadcrumbMainBlog from './BreadcrumbMainBlog';
import BannerBlog from './BannerBlog';
import ViewBlog from './ViewBlog';
import DialogBlog from './DialogBlog';
import useBlog from '../../hooks/useBlog';
import { useUser } from '@/hooks/useUser';

export const idUserLikeContext = createContext<number[][] | null>(null)

const MainBlog = () => {
  const { dataBlog,fetchBlog } = useBlog();
  const {dataProfile} = useUser()
  console.log("dataBlog", dataBlog)
  const data = dataBlog?.map(item => 
    {
     return item?.likes?.map(item => item?.user?.id)
    }
  )

  useEffect(() => {
    fetchBlog()
  },[])

  return (
    <idUserLikeContext.Provider value={data || null}>
    <div className="w-fit px-4 col-span-2 space-y-[2.125rem]">
      <BannerBlog />
      <div className="space-y-4">
        <BreadcrumbMainBlog />
        <HealthMainBlog />
        <div className="space-y-4">
          {dataBlog?.map((item) => (
            <ViewBlog
              key={item?.id}
              id={item?.id}
              idUser = {dataProfile && dataProfile?.id}
              likeCount={item?.likeCount}
              description={item?.description}
              image={item?.images[0]}
              title={item?.title}
            />
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
    </idUserLikeContext.Provider>
  );
};

export default MainBlog;
