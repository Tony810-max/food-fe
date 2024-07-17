import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface ProductProps {
  image: string;
  name: string;
  rating: number;
  price: number | string;
  discount: number | string;
  quantity: number;
}

const ProductSummary: React.FC<ProductProps> = ({
  discount,
  image,
  name,
  price,
  rating,
  quantity,
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const fill = index < rating ? '#F4A263' : 'none';
      return <Star key={index} size={18} color="#F4A263" fill={fill} />;
    });
  };
  return (
    <div className="flex flex-col lg:flex-row gap-[0.938rem]">
      <div className="relative w-full h-20 lg:w-20 lg:h-20">
        <Image
          src={image}
          alt="summaryImage"
          fill
          sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="space-y-2">
          <span className="font-sans text-lg leading-tight text-[#000000] font-medium">
            {name}
          </span>
          <div className="flex gap-1">{renderStars()}</div>
          <div className="flex items-center gap-2">
            <span className="text-[#64B496] leading-relaxed font-bold">
              ${price}
            </span>
            <span className="text-[#7A7A7A] text-sm line-through">
              ${discount}
            </span>
          </div>
        </div>
        <div className="flex lg:flex-col lg:items-center gap-2">
          <span className="font-sans text-lg leading-tight text-[#000000] font-medium">
            Quantity
          </span>
          <span className="font-sans text-lg leading-tight text-[#000000] font-medium">
            {quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
