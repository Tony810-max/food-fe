import Checkbox from "@/components/Checkbox";
import React from "react";

const PagementMethodOrder = () => {
  return (
    <div className="flex flex-col gap-5 p-4 border border-[#e9e9e9] rounded-[0.313rem] h-fit">
      <span className="text-xl font-sans leading-tight text-[#000000] font-bold">
        Payment Method
      </span>
      <span className="block text-sm font-sans leading-relaxed font-light max-w-[22.5rem]">
        Please select the preferred payment method to use on this order.
      </span>
      <div className="space-y-[0.938rem]">
        <Checkbox id={"delivery"} title={"Cash On Delivery"} />
        <Checkbox id={"UPI"} title={"UPI"} />
        <Checkbox id={"transfer"} title={"Bank Transfer"} />
      </div>
    </div>
  );
};

export default PagementMethodOrder;
