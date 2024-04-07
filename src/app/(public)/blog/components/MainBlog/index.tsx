import React from "react";
import DesHealthBlog from "./DesHealthBlog";
import Image from "next/image";
import Social from "@/components/Social";
import HealthMainBlog from "./HealthMainBlog";
import BreadcrumbMainBlog from "./BreadcrumbMainBlog";
import DesMainBlog from "./DesMainBlog";

const MainBlog = () => {
  return (
    <div className="w-fit px-4 col-span-2 space-y-[2.125rem]">
      <div className="relative w-full h-[29rem] rounded-[0.313rem]">
        <Image
          src="/images/imgBannerBlog.webp"
          alt="imgBannerBlog"
          fill
          unoptimized
          priority
          sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-[1.313rem]">
        <BreadcrumbMainBlog />
        <HealthMainBlog />
        <div className="flex flex-col md:flex-row gap-6">
          <DesHealthBlog
            image={"/images/img1Blog.webp"}
            des="Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!"
          />
          <DesHealthBlog
            image={"/images/img2Blog.webp"}
            des="Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!"
          />
        </div>
       <DesMainBlog />
        <p className="font-sans text-sm text-[#7a7a7a] font-normal leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officia magni explicabo fuga molestiae architecto ipsa excepturi
          laudantium molestias, assumenda vel fugiat hic exercitationem.
          Necessitatibus itaque et id! Ratione accusantium voluptatum optio
          rerum facilis expedita.
        </p>
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
