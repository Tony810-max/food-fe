import Image from "next/image";
import React from "react";

const PagementMethodImage = () => {
  return (
    <div className="border border-[#e9e9e9] rounded-[0.313rem] p-4 space-y-[0.938rem]">
      <span className="text-xl font-bold text-[#000000] font-sans">
        Payment Method
      </span>
      <div className="relative w-[20.938rem] h-[1.875rem]">
        <Image
          src={"/images/payment.webp"}
          alt="payment"
          fill
          sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default PagementMethodImage;
