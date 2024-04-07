import React from "react";
import CheckboxProduct from "./CheckboxProduct";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import useCategory from "@/hooks/useCategory";
import { Input } from "@/components/ui/input";
import useProduct from "@/hooks/useProduct";

interface formProps {
  setPriceFilter: (value: number[]) => void;
  priceFilter: number[];
  handleFilter: () => void;
  onSetCurCategory: (value: string) => void;
}

const SidebarProduct: React.FC<formProps> = ({
  setPriceFilter,
  priceFilter,
  handleFilter,
  onSetCurCategory,
}) => {
  const { maxPrice } = useProduct();
  const { categories } = useCategory();

  const handleSliderChange = (value: number[]) => {
    setPriceFilter(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);

    setPriceFilter([newValue]);
  };

  return (
    <div className="h-fit w-fit bg-[#f7f7f8] p-6 rounded-[0.32rem] ">
      <span className="font-sans text-base leading-relaxed font-medium capitalize text-[#2b2b2d] border-b ">
        product Category
      </span>
      <form className="flex flex-col gap-4">
        <div className="py-7 space-y-4">
          {categories?.map((category, index) => (
            <CheckboxProduct
              key={index}
              value={category?.title}
              name={category.title}
              totalProduct={20}
              onSetCurCategory={onSetCurCategory}
            />
          ))}
        </div>
        <span className="font-sans text-base leading-relaxed font-medium capitalize text-[#2b2b2d] border-b ">
          Filter By Price
        </span>
        <Slider
          value={priceFilter.length > 0 ? priceFilter : [0]}
          max={maxPrice ? maxPrice : 0}
          step={1}
          onValueChange={handleSliderChange}
        />
        <Input
          type="number"
          value={priceFilter.length > 0 ? priceFilter[0]?.toString() : "0"}
          defaultValue={
            priceFilter.length > 0 ? priceFilter[0]?.toString() : "0"
          }
          onChange={handleInputChange}
        />
        <div className="flex flex-col gap-1">
          <span className="font-sans text-base font-bold leading-tight">
            Price :
          </span>
          <span className="font-sans text-base leading-tight text-[#7a7a7a] font-bold">
            $0 - ${priceFilter.length > 0 ? priceFilter[0]?.toString() : 0}
          </span>
        </div>
        <Button
          type="button"
          variant={"destructive"}
          className="w-fit rounded-[0.31rem]"
          onClick={() => handleFilter()}
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
