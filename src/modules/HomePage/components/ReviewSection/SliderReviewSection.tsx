import Image from 'next/image';
import React from 'react';

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
    <div className="bg-[#E9E9E9] py-4 px-[3.3rem] col-span-1">
      <div className="relative z-10 w-10 md:w-14 aspect-square -translate-x-1/2 left-1/2 top-0 ">
        <Image
          src={image}
          alt="AvtReview"
          fill
          sizes="(min-width: 768px) 100vw"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[#7A7A7A] font-sans text-base">{role}</span>
        <span className="text-lg font-extrabold font-sans">{name}</span>
        <span className="text-lg font-sans text-center italic">
          {description}
        </span>
      </div>
    </div>
  );
};

export default SliderReviewSection;
