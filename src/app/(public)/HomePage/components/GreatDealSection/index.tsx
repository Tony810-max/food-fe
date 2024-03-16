import Image from "next/image";
import React from "react";

const GreatDealSection: React.FC = () => {
  return (
    <div className="w-full mt-24">
      <div className="relative h-[37.5rem] w-full">
        <Image
          src="/images/GreatDealSection.webp"
          alt="GreatDealSection"
          fill
        />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default GreatDealSection;
