import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-[1.563rem]">
      <FeatureCard title="Product Packing" />
      <FeatureCard title="24X7 Support" />
      <FeatureCard title="Delivery in 5 Days" />
      <FeatureCard title="Payment Secure" />
    </div>
  );
};

export default FeatureSection;
