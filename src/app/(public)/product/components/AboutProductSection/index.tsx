import React, { useState } from "react";
import HeadingAboutProduct from "./HeadingAboutProduct";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/common";

interface AboutProps {
  data: Product | undefined;
}

const DATA_HEADING = [
  {
    id: 1,
    name: "Description",
    value: "name",
  },
  {
    id: 2,
    name: "Information",
    value: "information",
  },
  {
    id: 3,
    name: "Review",
    value: "review",
  },
];

const AboutProduct: React.FC<AboutProps> = ({ data }) => {
  const [valueLabel, setValueLabel] = useState<string>(DATA_HEADING[0].value);
  console.log(valueLabel);
  return (
    <div className="col-span-2 p-6 border rounded h-fit   ">
      <HeadingAboutProduct
        data={DATA_HEADING}
        onSetValueLabel={setValueLabel}
      />
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
