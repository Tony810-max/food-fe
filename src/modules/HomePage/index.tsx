'use client';

import React from 'react';
import BannerSection from './components/BannerSection';
import PopularProductsSection from './components/PopularProductsSection';
import SaleSection from './components/SaleSection';
import PromotionSection from './components/PromotionSection';
import FeatureSection from '@/components/Feature';
import GreatDealSection from './components/GreatDealSection';
import OrganicSection from './components/OrganicSection';
import ReviewSection from './components/ReviewSection';
import LatestNewsSection from './components/LatestNewsSection';
import useCategory from '@/hooks/useCategory';

const HomePage: React.FC = () => {
  const { categories } = useCategory();
  return (
    <div>
      <BannerSection />
      <SaleSection categories={categories} />
      <PopularProductsSection categories={categories} />
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
