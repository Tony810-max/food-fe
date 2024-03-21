import React from "react";
import CheckboxProduct from "./CheckboxProduct";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const SidebarProduct = () => {
  return (
    <div className="col-span-1 w-fit bg-[#f7f7f8] p-6 rounded-[0.32rem] ">
      <span className="font-sans text-base leading-relaxed font-medium capitalize text-[#2b2b2d] border-b ">
        product Category
      </span>
      <form className="flex flex-col gap-4">
        <div className="py-7 space-y-4">
          <CheckboxProduct name="Juice and Drinks" totalProduct={20} />
          <CheckboxProduct name="Dairy & Milk" totalProduct={54} />
          <CheckboxProduct name="Snack & Spice" totalProduct={64} />
        </div>
        <span className="font-sans text-base leading-relaxed font-medium capitalize text-[#2b2b2d] border-b ">
          Filter By Price
        </span>
        <Slider defaultValue={[50]} max={100} step={1} />
        <div className="space-x-1">
          <span className="font-sans text-base font-bold leading-tight">
            Price :
          </span>
          <span className="font-sans text-base leading-tight text-[#7a7a7a] font-bold">
            $20 - $250
          </span>
        </div>
        <Button
          type="submit"
          variant={"destructive"}
          className="w-fit rounded-[0.31rem]"
        >
          Filter
        </Button>
        <span className="font-sans text-base leading-relaxed font-medium capitalize text-[#2b2b2d]">
          product Category
        </span>
        <CheckboxProduct name="Snack & Spice" totalProduct={64} />
        <CheckboxProduct name="Snack & Spice" totalProduct={64} />
        <CheckboxProduct name="Snack & Spice" totalProduct={64} />
      </form>
    </div>
  );
};

export default SidebarProduct;
