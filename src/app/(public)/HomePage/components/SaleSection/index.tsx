"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TabList from "./TabList";
import TabPannel from "./TabPannel";
import useCategory from "@/hooks/useCategory";

const SaleSection = () => {
  const { categories } = useCategory();

  return (
    <div className="container py-24 grid grid-cols-3 gap-x-6 ">
      <div className="flex col-span-1 flex-col gap-1">
        {categories.map((category, index) => (
          <TabList key={index} name={category.title} value={65} />
        ))}
        <Link
          href={""}
          className="w-full border-2 rounded-[0.5rem] py-5 bg-[#f7f7f8]"
        >
          <Button
            variant={"default"}
            className="w-full font-bold leading-normal text-base bg-[#f7f7f8] hover:bg-[#f7f7f8] text-[#f53e32] hover:opacity-70"
          >
            View More
          </Button>
        </Link>
      </div>

      <TabPannel
        image={"/images/cakePannel.webp"}
        name={"Cake"}
        valueSale={50}
      />

      <TabPannel
        image={"/images/milkPaannel.webp"}
        name={"Milk"}
        valueSale={40}
      />
    </div>
  );
};

export default SaleSection;
