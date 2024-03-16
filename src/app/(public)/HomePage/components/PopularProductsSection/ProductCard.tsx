import { Lock, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductProps {
  category: string;
  desc: string;
  image: string;
  salePrice: number;
  orinPrice: number;
  rating: number;
}

const ProductCard: React.FC<ProductProps> = ({
  rating,
  category,
  desc,
  image,
  salePrice,
  orinPrice,
}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<Star size={16} color="#F5885F" fill="#F5885F" />);
    } else {
      stars.push(<Star size={16} color="#F5885F" />);
    }
  }

  return (
    <div className="p-3 border border-[#ececec]">
      <div className="relative h-72">
        <Image src={image} alt="imageCard" fill />
        <div className="absolute w-6 h-6 z-10 -bottom-[0.75rem] left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center bg-[#f7f7f8]">
          <Lock size={16} color="#f53e32" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <span>{category}</span>
        <div className="flex items-center mt-2 gap-[0.4rem]">
          <div className="flex">{stars}</div>
          <span className="text-[#999999]">(4.5)</span>
        </div>
        <span className="max-w-60 text-center leading-normal font-sans font-bold mt-4">
          {desc}
        </span>
        <div className="mt-4 space-x-2">
          <span className="font-extrabold text-lg font-sans text-[#F53E32]">
            ${salePrice}
          </span>
          <span className="line-through text-[#7A7A7A]">${orinPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
