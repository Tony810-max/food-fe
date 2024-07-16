import React from 'react';
import ReactStars from 'react-rating-stars-component';

interface SliderProps {
  name: string;
  description: string;
  rate: number;
}

const SliderReviewSection: React.FC<SliderProps> = ({
  name,
  description,
  rate,
}) => {
  return (
    <div className="bg-[#E9E9E9] py-4 px-[3.3rem] col-span-1 rounded-lg">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-lg font-extrabold font-sans">{name}</span>
        <div className="pointer-events-none">
          <ReactStars
            value={rate}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <span className="text-lg font-sans text-center italic">
          {description}
        </span>
      </div>
    </div>
  );
};

export default SliderReviewSection;
