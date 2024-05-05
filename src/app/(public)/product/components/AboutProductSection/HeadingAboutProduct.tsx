import { Button } from "@/components/ui/button";
import React from "react";

interface HeadingProps {
  onSetValueLabel: (value: string) => void;
  data: {
    id: number;
    name: string;
    value: string;
  }[];
}

const HeadingAboutProduct: React.FC<HeadingProps> = ({
  onSetValueLabel,
  data,
}) => {
  return (
    <div className="flex gap-8">
      {data?.map((data) => (
        <Button
          key={data.id}
          variant={"ghost"}
          className="text-center font-sans text-lg leading-normal font-semibold"
          onClick={() => onSetValueLabel(data.value)}
        >
          {data.name}
        </Button>
      ))}
    </div>
  );
};

export default HeadingAboutProduct;
