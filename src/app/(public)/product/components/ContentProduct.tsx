import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Star } from "lucide-react";
import React from "react";

const ContentProduct = () => {
  return (
    <div className="col-span-1 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span className="font-sans text-[1.4rem] leading-normal text-[#2b2b2d]">
          Seeds Of Change Oraganic Quinoa, Brown
        </span>
        <span className="font-sans leading-relaxed text-[#7a7a7a]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
          minus error doloribus saepe natus?
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-[0.3rem]">
          <Star color="#F5885F" fill="#F5885F" size={16} />
          <Star color="#F5885F" fill="#F5885F" size={16} />
          <Star color="#F5885F" fill="#F5885F" size={16} />
          <Star color="#F5885F" fill="#F5885F" size={16} />
          <Star color="#F5885F" fill="#F5885F" size={16} />
        </div>
        <span className="font-sans text-base leading-relaxed text-[#7a7a7a]">
          (75 Review)
        </span>
      </div>
      <table className="flex flex-col gap-[0.6rem]">
        <tr>
          <th className="min-w-24 text-left">Brand </th>
          <td>:</td>
          <td className="px-[0.6rem]">ESTA BETTERU CO</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Flavour</th>
          <td>:</td>
          <td className="px-[0.6rem]">Super Saver Pack</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Diet Type</th>
          <td>:</td>
          <td className="px-[0.6rem]">Vegetarian</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Weight</th>
          <td>:</td>
          <td className="px-[0.6rem]">200 Grams</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Speciality</th>
          <td>:</td>
          <td className="px-[0.6rem]">Gluten Free, Sugar Free</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Info</th>
          <td>:</td>
          <td className="px-[0.6rem]">Gluten Free, Sugar Free</td>
        </tr>
        <tr>
          <th className="min-w-24 text-left">Item</th>
          <td>:</td>
          <td className="px-[0.6rem]">1</td>
        </tr>
      </table>
      <div>
        <span>$120.25</span>
        <span>$123.25</span>
      </div>
      <form>
        <div>
          <input className="border" disabled />
          <div>
            <Plus />
            <Minus />
          </div>
        </div>
        <Button variant={"destructive"} type="submit">
          Add to cart
        </Button>
      </form>
    </div>
  );
};

export default ContentProduct;
