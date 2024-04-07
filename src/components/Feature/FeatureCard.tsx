import React from "react";

interface FeatureProps {
  title: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title }) => {
  return (
    <div className="flex bg-[#f7f7f8] flex-col justify-center items-center gap-2 p-6">
      <span className="font-sans font-bold text-lg leading-normal text-center">
        {title}
      </span>
      <span className="text-center font-sans leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </span>
    </div>
  );
};

export default FeatureCard;
