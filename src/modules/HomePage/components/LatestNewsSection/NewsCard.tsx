import { cn } from '@/lib/utils';
import ROUTES from '@/types/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NewsProps {
  role: string;
  category: string;
  description: string;
  image: string;
  date: string;
}

const NewsCard: React.FC<NewsProps> = ({
  role,
  category,
  description,
  image,
  date,
}) => {
  return (
    <div className="h-full  border border-[#E9E9E9] rounded-lg">
      <div className="flex flex-col px-6 py-7 gap-3">
        <div>
          <div className="">
            <span className={cn("text-lg font-sans capitalize",{
              "text-red-600 font-bold": role === "admin",
              "text-green-600": role === "user"
            })}>{role}</span>
            <span className="text-lg text-[#777777] font-sans capitalize">
              {' '}
              | {category}
            </span>
          </div>
          <span className="text-sm text-[#777777] font-sans italic">
            {date}
          </span>
        </div>
        <span className="max-w-[25rem] font-sans text-xl font-bold leading-normal capitalize">
          {description}
        </span>
        <Link
          href={ROUTES.BLOG}
          className="text-xl text-[#64B496] font-bold font-sans hover:opacity-70"
        >
          Read More
        </Link>
      </div>

      <div className="relative w-full h-72">
        <Image
          src={image}
          alt="lastestNews1"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default NewsCard;
