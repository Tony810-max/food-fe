import React from "react";
import BannerSection from "./(public)/HomePage/components/BannerSection";
import SaleSection from "./(public)/HomePage/components/SaleSection";
import PopularProductsSection from "./(public)/HomePage/components/PopularProductsSection";
import PromotionSection from "./(public)/HomePage/components/PromotionSection";
import FeatureSection from "./(public)/HomePage/components/FeatureSection";
import OrganicSection from "./(public)/HomePage/components/OrganicSection";
import LatestNewsSection from "./(public)/HomePage/components/LatestNewsSection";
import ReviewSection from "./(public)/HomePage/components/ReviewSection";
import GreatDealSection from "./(public)/HomePage/components/GreatDealSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <SaleSection />
      <PopularProductsSection />
      <PromotionSection />
      <FeatureSection />.
      <GreatDealSection />
      <OrganicSection />
      <ReviewSection />
      <LatestNewsSection />
    </div>
  );
};

export default HomePage;
