/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ROUTES from '@/types/routes';
import { API_URL, IBlogMain } from '@/types/common';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { TextContext } from '@/contexts/useTextContext';
import { format } from 'date-fns';

interface ViewBlog {
  blog: IBlogMain;
}

const ViewBlog: React.FC<ViewBlog> = ({ blog }) => {
  const { user } = useAuth();
  const context: any = useContext(TextContext);

  const handleLikeBlog = async (id: number) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.post(
        `${API_URL}/api/v1/post/like/${id}`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        context?.fetchBlog();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isLiked = React.useMemo(() => {
    return blog?.likes?.some((like) => like?.user?.id === user?.id);
  }, [blog]);

  return (
    <div className="flex gap-4">
      <div className="relative w-48 h-40">
        <Image
          src={blog?.images?.length ? blog?.images[0] : ''}
          alt="foodImage"
          fill
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="flex flex-col gap-2">
          <span className="font-sans text-lg capitalize italic font-bold">
            {blog?.title}
          </span>
          <span className="font-sans text-base capitalize italic font-medium">
            {format(new Date(blog?.createdAt), 'dd-MM-yyyy hh:mm')}
          </span>
        </div>
        <p className="font-sans text-base truncate max-w-48 min-h-5">
          {blog?.description}
        </p>
        <div className="w-full h-full font-sans text-base flex justify-between items-end">
          <div className="flex gap-2">
            <Heart
              color={isLiked ? '#f53e32' : 'black'}
              fill={isLiked ? '#f53e32' : 'none'}
              className="cursor-pointer "
              onClick={() => handleLikeBlog(blog?.id)}
            />
            <span>{blog?.likeCount}</span>
          </div>
          <Link
            href={`${ROUTES.BLOG}/${blog?.id}?page=1&limit=4`}
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
