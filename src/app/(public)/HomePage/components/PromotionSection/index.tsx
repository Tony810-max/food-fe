import PromotionCard from "@/app/(public)/HomePage/components/PromotionSection/PromotionCard";

import React from "react";

const PromotionSection: React.FC = () => {
  return (
    <div className="container py-24 grid grid-cols-3 grid-rows-1 gap-x-6 rounded-xl">
      <PromotionCard
        image="/images/promotionBark.webp"
        name="Healthy Bakery Products"
        valueSale={30}
      />
      <PromotionCard
        image="/images/promotionSnack.webp"
        name="Fresh Snacks & Sweets"
        valueSale={20}
      />
      <PromotionCard
        image="/images/promotionFresh.webp"
        name="Fresh & healthy Organic Fruits"
        valueSale={35}
      />
    </div>
  );
};

export default PromotionSection;
