
import React from 'react';
import PromotionCard from './PromotionCard';

const PromotionSection: React.FC = () => {
  return (
    <div className="container py-[3.125rem] grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 rounded-xl">
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
