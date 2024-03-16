import React from "react";
import BannerSection from "./(public)/HomePage/components/BannerSection";
import SaleSection from "./(public)/HomePage/components/SaleSection";
import PopularProductsSection from "./(public)/HomePage/components/PopularProductsSection";
import PromotionSection from "./(public)/HomePage/components/PromotionSection";
import FeatureSection from "./(public)/HomePage/components/FeatureSection";
import OrganicSection from "./(public)/HomePage/components/OrganicSection";
import LatestNewsSection from "./(public)/HomePage/components/LatestNewsSection";
import ReviewSection from "./(public)/HomePage/components/ReviewSection";
import CountdownTimer from "@/components/CountdownTimer";

const HomePage: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <SaleSection />
      <PopularProductsSection />
      <PromotionSection />
      <FeatureSection />
      <OrganicSection />
      <ReviewSection />
      <LatestNewsSection />
    </div>
  );
};

export default HomePage;
