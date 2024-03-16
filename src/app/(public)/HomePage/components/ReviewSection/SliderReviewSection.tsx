import Image from "next/image";
import React from "react";

interface SliderProps {
  image: string;
  role: string;
  name: string;
  description: string;
}

const SliderReviewSection: React.FC<SliderProps> = ({
  image,
  role,
  name,
  description,
}) => {
  return (
    <div className="bg-[#E9E9E9] px-[3.3rem]">
      <div className="relative w-[7.5rem] h-[7.5rem] left-1/2 -translate-x-1/2 translate-y-3/4 -top-1/2">
        <Image src={image} alt="AvtReview" fill />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[#7A7A7A] font-sans text-lg">{role}</span>
        <span className="text-xl font-extrabold font-sans">{name}</span>
        <span className="text-lg font-sans text-center">“{description}”</span>
      </div>
    </div>
  );
};

export default SliderReviewSection;
