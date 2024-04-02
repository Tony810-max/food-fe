import React from "react";
import ImageLatestSideRight from "./ImageLatestSideRight";

const LatestSideRight = () => {
  return (
    <div className="py-5 space-y-5">
      <span className="font-sans text-lg leading-none text-[#2b2b2d] font-medium">
        Latest Gallery
      </span>
      <div className="grid grid-cols-3 gap-4">
        <ImageLatestSideRight image={"/images/imgLatest1.webp"} />
        <ImageLatestSideRight image={"/images/imgLatest2.webp"} />
        <ImageLatestSideRight image={"/images/imgLatest3.webp"} />
        <ImageLatestSideRight image={"/images/imgLatest4.webp"} />
        <ImageLatestSideRight image={"/images/imgLatest5.webp"} />
        <ImageLatestSideRight image={"/images/imgLatest6.webp"} />
      </div>
    </div>
  );
};

export default LatestSideRight;
