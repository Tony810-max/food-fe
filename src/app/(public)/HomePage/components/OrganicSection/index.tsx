import Image from "next/image";
import React from "react";
import OrganicHealth from "./OrganicHealth";

const OrganicSection: React.FC = () => {
  return (
    <div className="container grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-4 py-[3.125rem]">
      <div className="relative w-full min-h-[30rem]">6
        <Image
          src="/images/Organic1.webp"
          alt="Organic1"
          fill
          unoptimized
          priority
          sizes="(min-width: 768px) 100vw"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src="/images/Organic2.webp"
          alt="Organic2"
          fill
          unoptimized
          priority
          sizes="(min-width: 768px) 100vw"
        />
      </div>
      <div className="col-span-2 z-20 w-full h-full">
        <div className="relative col-span-2 w-full h-full">
          <Image
            src="/images/Organic3.webp"
            alt="Organic3"
            fill
            unoptimized
            priority
            sizes="(min-width: 768px) 100vw"
          />

          <OrganicHealth />
        </div>
      </div>
    </div>
  );
};

export default OrganicSection;
