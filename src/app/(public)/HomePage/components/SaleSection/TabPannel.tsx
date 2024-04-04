import Image from "next/image";
import React from "react";
import { Button } from "../../../../../components/ui/button";
import Link from "next/link";
import ROUTES from "@/types/routes";

interface SaleProps {
  image: string;
  valueSale: number;
  name: string;
}

const TabPannel: React.FC<SaleProps> = ({ image, valueSale, name }) => {
  return (
    <div className="w-full h-full col-span-1 aspect-[1/1.5]">
      <div className="relative bg-black w-full h-full">
        <div className="absolute w-full h-full z-0">
          <Image
            src={image}
            alt="pannel"
            fill
            unoptimized
            priority
            sizes="(min-width: 768px) 100vw"
          />
        </div>

        <div className="relative flex flex-col justify-between z-10 h-full p-10">
          <div className="flex items-center gap-1">
            <span className="text-white text-6xl font-bold font-sans leading-none">
              {valueSale}
            </span>

            <div className="flex flex-col h-full gap-2 justify-end">
              <span className="text-white leading-normal">%</span>

              <span className="text-white uppercase font-mono text-lg leading-none">
                off{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-white text-xl text-center font-bold font-sans tracking-widest">
              {name}
            </span>

            <Link href={ROUTES.SHOP} className="flex justify-center">
              <Button
                variant={"destructive"}
                className="capitalize font-bold tracking-widest bg-[#f53e32]"
              >
                shop now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPannel;
