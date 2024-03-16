import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsProps {
  role: string;
  category: string;
  description: string;
  image: string;
  date: number;
  month: string;
}

const NewsCard: React.FC<NewsProps> = ({
  role,
  category,
  description,
  image,
  date,
  month,
}) => {
  return (
    <div className="h-full  border border-[#E9E9E9] rounded-lg">
      <div className="flex flex-col px-6 py-7 gap-3">
        <div className="">
          <span className="text-lg text-[#CCCCCC] font-sans capitalize">
            {role}
          </span>
          <span className="text-lg text-[#777777] font-sans capitalize">
            {" "}
            | {category}
          </span>
        </div>
        <span className="max-w-[25rem] font-sans text-xl font-bold leading-normal">
          {description}
        </span>
        <Link
          href="/"
          className="text-xl text-[#64B496] font-bold font-sans hover:opacity-70"
        >
          Read More
        </Link>
      </div>

      <div className="relative">
        <div className="relative w-full h-72">
          <Image src={image} alt="lastestNews1" fill />
        </div>
        <div className="absolute bg-[#3f3e40] bg-opacity-50 px-5 py-3 text-white bottom-3 right-3 flex flex-col rounded-xl">
          <span className="text-lg font-bold">{date}</span>
          <span className="font-sans text-lg">{month}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
