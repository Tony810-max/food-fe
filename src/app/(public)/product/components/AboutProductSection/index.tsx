import React from "react";
import HeadingAboutProduct from "./HeadingAboutProduct";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/common";

interface AboutProps {
  data: Product | undefined;
}

const AboutProduct: React.FC<AboutProps> = ({ data }) => {
  return (
    <div className="col-span-2 p-6 border rounded h-fit   ">
      <HeadingAboutProduct />
      <Separator />
      <span className="block py-8 text-sm leading-relaxed text-[#7a7a7a] font-normal w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
        sapiente odio, error dolore vero temporibus consequatur, nobis veniam
        odit dignissimos consectetur quae in perferendis doloribusdebitis
        corporis, eaque dicta, repellat amet, illum adipisci vel perferendis
        dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione
        alias odio, error dolore temporibus consequatur, nobis veniam odit
        laborum dignissimos consectetur quae vero in perferendis provident quis.
      </span>
      <span className="block pb-[1.4rem] font-sans leading-normal text-[#2b2b2d] font-medium">
        Packaging & Delivery
      </span>
      <Separator />
      <span className="block pt-8 text-sm leading-relaxed text-[#7a7a7a] font-normal w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
        perferendis dolor! Quis vel consequuntur repellat distinctio rem.
        Corrupti ratione alias odio, error dolore temporibus consequatur, nobis
        veniam odit laborum dignissimos consectetur quae vero in perferendis
        provident quis.
      </span>
    </div>
  );
};

export default AboutProduct;
