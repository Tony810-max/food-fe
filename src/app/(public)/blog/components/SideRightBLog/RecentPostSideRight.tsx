import Image from "next/image";
import React from "react";

const RecentPostSideRight = () => {
  return (
    <div className="py-5 space-y-5">
      <span className="font-sans text-lg leading-none text-[#2b2b2d] font-medium">
        Recent Post
      </span>
      <div className=" p-3 border rounded-[0.313rem] flex flex-col justify-center items-center gap-[1.125rem]">
        <div className="relative w-[14.375rem] h-[9.625rem]">
          <Image
            src="/images/imgRecentBlog.webp"
            alt="imgRecentBlog"
            unoptimized
            priority
            fill
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <span className="font-sans text-base leading-loose text-[#f53e32] font-normal">
            Sep 09, 2023
          </span>
          <span className="font-sans text-base leading-tight text-[#2b2b2d] font-bold">
            10 Tasty Organic Fruit choose
          </span>
          <span className="max-w-[13.563rem] text-center font-sans text-base leading-relaxed text-[#7a7a7a] font-normal">
            Lorem ipsum dolor consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentPostSideRight;
