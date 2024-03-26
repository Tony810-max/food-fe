import React from "react";

import PriceSummary from "./PriceSummary";
import ProductSummary from "./ProductSummary";

const SummaryOrderPrice = () => {
  return (
    <div className="p-4 border rounded-[0.313rem] space-y-[2.125rem]">
      <PriceSummary />
      <div className="space-y-6">
        <ProductSummary
          image={"/images/imageProductCart.webp"}
          name={"Dates Value Pack Pouch"}
          price={1}
          discount={2}
          rating={5}
        />
        <ProductSummary
          image={"/images/imageProductCart.webp"}
          name={""}
          price={1}
          discount={2}
          rating={4}
        />
      </div>
    </div>
  );
};

export default SummaryOrderPrice;
