import React from "react";
import FeatureCard from "./FeatureCard";
import { cn } from "@/lib/utils";

interface FeatureProps {
  subClassName?: string;
}

const FeatureSection: React.FC<FeatureProps> = ({ subClassName }) => {
  return (
    <div className={cn("container grid grid-cols-4 gap-x-6", subClassName)}>
      <FeatureCard title="Product Packing" />
      <FeatureCard title="24X7 Support" />
      <FeatureCard title="Delivery in 5 Days" />
      <FeatureCard title="Payment Secure" />
    </div>
  );
};

export default FeatureSection;
