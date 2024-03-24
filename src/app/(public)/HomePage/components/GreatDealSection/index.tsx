import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const TimerBoxGreatDeal = dynamic(() => import("./TimerBoxGreatDeal"), {
  ssr: false,
});

const GreatDealSection: React.FC = () => {
  return (
    <div className="relative w-full h-[37.5rem] mt-24">
      <Image
        src="/images/GreatDealSection.webp"
        alt="GreatDealSection"
        fill
        className="z-0"
        sizes="(min-width: 768px) 100vw"
      />
      <div className="container">
        <TimerBoxGreatDeal />
      </div>
    </div>
  );
};

export default GreatDealSection;
