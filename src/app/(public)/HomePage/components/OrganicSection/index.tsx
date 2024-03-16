import Image from "next/image";
import React from "react";
import OrganicHealth from "./OrganicHealth";

const OrganicSection: React.FC = () => {
  return (
    <div className="container grid grid-cols-4 gap-x-6 mt-24">
      <div className="relative w-full min-h-[30rem]">
        <Image src="/images/Organic1.webp" alt="Organic1" fill />
      </div>
      <div className="relative w-full h-full">
        <Image src="/images/Organic2.webp" alt="Organic2" fill />
      </div>
      <div className="relative col-span-2 ">
        <div className="relative w-full h-full">
          <Image src="/images/Organic3.webp" alt="Organic3" fill />
        </div>

        <OrganicHealth />
      </div>
    </div>
  );
};

export default OrganicSection;
