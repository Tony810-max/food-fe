"use client";
import React, { useEffect, useState } from "react";
import Social from "@/components/Social";

import HealthMainBlog from "./HealthMainBlog";
import BreadcrumbMainBlog from "./BreadcrumbMainBlog";
import BannerBlog from "./BannerBlog";
import ViewBlog from "./ViewBlog";
import DialogBlog from "./DialogBlog";
import useBlog from "../../hooks/useBlog";

const MainBlog = () => {
  const {dataBlog,fetchBlog} = useBlog()

  const [checkStatus, setCheckStatus] = useState<boolean>(false);


  return (
    <div className="w-fit px-4 col-span-2 space-y-[2.125rem]">
      <BannerBlog />
      <div className="space-y-4">
        <BreadcrumbMainBlog />
        <HealthMainBlog />
        <div className="space-y-4">
          {dataBlog?.map(item => (

          <ViewBlog key={item?.id} checkStatus={checkStatus} onSetCheckStatus={setCheckStatus} likeCount={item?.likeCount} id={item?.id} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum quos perferendis provident dolorum ea eum distinctio enim exercitationem? Hic laudantium animi rerum consequatur est veritatis ipsum dicta autem esse?"} image={item?.images[0]} title={item?.title} />
          ))}
          {/* <ViewBlog /> */}
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
