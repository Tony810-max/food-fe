import Image from "next/image";
import React from "react";
import { Button } from "../../../../../components/ui/button";

interface SaleProps {
  image: string;
  valueSale: number;
  name: string;
}

const TabPannel: React.FC<SaleProps> = ({ image, valueSale, name }) => {
  return (
    <div className="relative row-span-6">
      <div className="relative w-full h-full aspect-[1/1.5] z-10">
        <Image src={image} alt="pannel" fill />
      </div>
      <div className="absolute z-20 top-7 left-7 flex items-center gap-1">
        <span className="text-white text-6xl font-bold font-sans ">
          {valueSale}
        </span>
        <div className="flex flex-col justify-center h-fit">
          <span className="text-white ">%</span>
          <span className="text-white uppercase font-mono text-lg">off </span>
        </div>
      </div>
      <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-0 flex flex-col gap-3">
        <span className="text-white text-xl text-center font-bold font-sans tracking-widest">
          {name}
        </span>
        <Button
          variant={"destructive"}
          className="capitalize font-bold tracking-widest bg-[#f53e32]"
        >
          shop now
        </Button>
      </div>
    </div>
  );
};

export default TabPannel;
