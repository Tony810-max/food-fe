import { Separator } from "@/components/ui/separator";
import React from "react";

interface PriceSummaryProps {
  total: number;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ total }) => {
  return (
    <div className="space-y-[0.938rem]">
      <span className="text-xl leading-tight text-[#000000] font-bold">
        Summary
      </span>
      <div className="flex justify-between">
        <span className="text-sm leading-relaxed text-[#7a7a7a] font-normal">
          Sub-Total
        </span>
        <span className="font-sans text-base text-[#000000] leading-relaxed">
          ${total}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm leading-relaxed text-[#7a7a7a] font-normal">
          Delivery Charges
        </span>
        <span className="font-sans text-base text-[#000000] leading-relaxed">
          $0
        </span>
      </div>

      <Separator />
      <div className="flex justify-between">
        <span className="font-sans text-xl leading-normal text-[#2b2b2d] font-bold">
          Total Amount
        </span>
        <span className="font-sans text-base leading-normal text-[#000000] font-semibold">
          ${total}
        </span>
      </div>
    </div>
  );
};

export default PriceSummary;
