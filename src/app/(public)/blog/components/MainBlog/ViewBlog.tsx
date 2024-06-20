import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ROUTES from '@/types/routes';
import { API_URL } from '@/types/common';
import axios from 'axios';

interface ViewBlog {
  image: string;
  title: string;
  description: string;
  id: number;
}

const ViewBlog: React.FC<ViewBlog> = ({ description, image, title, id }) => {
  const [checkHeart, setCheckHeart] = useState<boolean>(false);
  const [checkLike, setCheckLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  const handleLikeBlog = async (id: number) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.post(
        `${API_URL}/api/v1/post/like/${id}`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        console.log(response);
        setCheckLike(!checkHeart);
        setLikeCount(response?.data?.data?.likeCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex gap-4">
      <div className="relative w-48 h-40">
        <Image src={image} alt="foodImage" fill />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <span className="font-sans text-lg capitalize italic font-bold">
          {title}
        </span>
        <p className="font-sans text-base truncate max-w-48 min-h-5">
          {description}
        </p>
        <div className="w-full h-full font-sans text-base flex justify-between items-end">
          <div className="flex gap-2">
            <Heart
              color={checkLike || checkHeart ? '#f53e32' : 'black'}
              fill={checkLike || checkHeart ? '#f53e32' : 'none'}
              className="cursor-pointer "
              onMouseEnter={() => setCheckHeart(true)}
              onMouseLeave={() => setCheckHeart(false)}
              onClick={() => handleLikeBlog(id)}
            />
            <span>{likeCount}</span>
          </div>
          <Link
            href={`${ROUTES.BLOG}/${id}?page=1&limit=4`}
            className="opacity-70 hover:text-[#f53e32]"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
