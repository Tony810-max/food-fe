import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ViewBlog = () => {
  const [checkHeart, setCheckHeart] = useState<boolean>(false);
  const [checkComment, setCheckComment] = useState<boolean>(false);
  
  return (
    <div className="flex gap-4">
      <div className="relative w-48 h-40">
        <Image
          src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
          alt="foodImage"
          fill
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <span className="font-sans text-lg capitalize italic font-bold">
          title
        </span>
        <span className="font-sans text-base ">description</span>
        <div className="w-full h-full font-sans text-base flex justify-between items-end">
          <div className="flex gap-4">
            <Heart
              color={checkHeart ? "#f53e32" : "black"}
              fill={checkHeart ? "#f53e32" : "none"}
              className="cursor-pointer "
              onMouseEnter={() => setCheckHeart(true)}
              onMouseLeave={() => setCheckHeart(false)}
            />
            <MessageCircle />
          </div>
          <Link href="/" className="opacity-70 hover:text-[#f53e32]">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
