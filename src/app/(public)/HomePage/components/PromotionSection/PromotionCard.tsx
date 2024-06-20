import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../../../../../components/ui/button';
import ROUTES from '@/types/routes';

interface PromotionProps {
  image: string;
  valueSale: number;
  name: string;
}

const PromotionCard: React.FC<PromotionProps> = ({
  image,
  valueSale,
  name,
}) => {
  return (
    <div className="relative h-56">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="promotionBark"
          fill
          sizes="(min-width: 768px) 100vw"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-6 ">
        <div className="max-w-44 lg:max-w-48 font-sans text-xl font-bold leading-normal">
          {name}
        </div>
        <div className="flex flex-col lg:items-center lg:flex-row  gap-1 py-4">
          <span className="font-sans text-2xl font-extrabold text-[#F53E32]">
            {valueSale}%
          </span>
          <span className="font-sans text-[#777777]">Off on first order</span>
        </div>
        <Link href={ROUTES.SHOP}>
          <Button variant={'destructive'} className="font-sans text-lg">
            Shop now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PromotionCard;
