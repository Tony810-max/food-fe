import React, { useState } from "react";
import HeadingAboutProduct from "./HeadingAboutProduct";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/common";
import InformationTabAboutProduct from "./InformationTabAboutProduct";
import ReviewTabAboutProduct from "./ReviewTabAboutProduct";
import DescriptionTabAboutProduct from "./DescriptionTabAboutProduct";
import CommentTabAboutProduct from "./CommentTabAboutProduct";

interface AboutProps {
  data: Product | undefined;
}

const DATA_HEADING = [
  {
    id: 1,
    name: "Description",
    value: "description",
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
  {
    id: 4,
    name: "Comment",
    value: "comment",
  },
];

const AboutProduct: React.FC<AboutProps> = ({ data }) => {
  const [valueLabel, setValueLabel] = useState<string>(DATA_HEADING[0].value);

  const renderContent = () => {
    switch (valueLabel) {
      case "description":
        return <DescriptionTabAboutProduct description={data?.description} />;

      case "information":
        return <InformationTabAboutProduct />;
      case "review":
        return <ReviewTabAboutProduct />;
      case "comment":
        return <CommentTabAboutProduct />;

      default:
        return <div>Click one tab for view</div>;
    }
  };

  return (
    <div className="col-span-2 p-6 border rounded h-fit">
      <HeadingAboutProduct
        data={DATA_HEADING}
        onSetValueLabel={setValueLabel}
      />
      <Separator />
      {renderContent()}
    </div>
  );
};

export default AboutProduct;
