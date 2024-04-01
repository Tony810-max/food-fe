import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BannerSection: React.FC = () => {
  return (
    <div className="relative flex justify-center py-[3.125rem]">
      <div className="container">
        <div className="min-h-[calc(100vh-176px)] ">
          <Image
            src={"/images/banner.webp"}
            alt="banner"
            fill
            unoptimized
            priority
            sizes="(min-width: 768px) 100vw"
          />
        </div>
        <div className="absolute flex flex-col gap-5 top-1/2 -translate-y-1/2 max-w-[35rem]">
          <div className="flex gap-1">
            <span className="text-xl text-[#f53e32] font-extrabold border-2 border-l-0 border-r-0 border-t-0 border-b-[#f53e32] ">
              100
            </span>
            <span className="text-xl text-[#212529] font-extrabold">
              Organic Vegetables
            </span>
          </div>
          <span className="text-black font-extrabold text-6xl leading-normal">
            The best way to stuff your wallet.
          </span>
          <span className="text-[#888582]  leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab enim
            animi reprehenderit qui a illo eum quibusdam recusandae porro saepe.
          </span>
          <Link href={"/"} className="mt-4">
            <Button variant={"destructive"} className=" font-bold">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
