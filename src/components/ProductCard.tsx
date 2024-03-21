import { Lock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ProductProps {
  id: number | "";
  category: string;
  desc: string;
  image: string;
  salePrice: number | string;
  originalPrice: number | string;
  rating: number | null;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  rating,
  category,
  desc,
  image,
  salePrice,
  originalPrice,
}) => {
  const [stars, setStars] = useState(0);

  
  useEffect(() => {
    if (rating) {
      const startCound = Math.ceil(rating);
      setStars(startCound);
    }
  }, [rating]);

  return (
    <div className="p-3 border border-[#ececec]">
      <div className="relative h-72">
        <Image src={image} alt="imageCard" fill />
        <div className="absolute w-6 h-6 z-10 -bottom-[0.75rem] left-1/2 -translate-x-1/2 rounded-full flex justify-center items-center bg-[#f7f7f8]">
          <Lock size={16} color="#f53e32" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <span className="font-sans text-[#777777] font-medium">{category}</span>
        <div className="flex items-center mt-2 gap-[0.4rem]">
          <div className="flex">
            {stars !== 0
              ? Array.from({ length: stars }).map((_, index) => (
                  <Star key={index} size={16} color="#F5885F" fill="#F5885F" />
                ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} color="#F5885F" fill="#F5885F" />
                ))}
          </div>
          <span className="text-[#999999]">(4.5)</span>
        </div>
        <span className="max-w-60 text-center leading-normal font-sans font-bold mt-4">
          {desc}
        </span>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1 items-center">
            <span className="font-extrabold text-lg font-sans text-[#F53E32]">
              ${salePrice}
            </span>
            <span className="line-through text-[#7A7A7A]">
              ${originalPrice}
            </span>
          </div>
          <Link
            href={`/product/${id}`}
            className="font-extrabold text-lg font-sans text-[#F53E32] hover:opacity-70"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
