import React, { useContext, useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ROUTES from '@/types/routes';
import { API_URL } from '@/types/common';
import axios from 'axios';
import {  idUserLikeContext } from '.';
import useDetailBlog from '../../hooks/useDetailBlog';

interface ViewBlog {
  image: string;
  title: string;
  description: string;
  id: number;
  likeCount: number;
  idUser: number;
}

const ViewBlog: React.FC<ViewBlog> = ({ description, image, title, id, idUser,likeCount }) => {
  const [checkHeart, setCheckHeart] = useState<boolean>(false);
  const [checkLike, setCheckLike] = useState<boolean>(false);
  const idUserLike = useContext(idUserLikeContext)
  const {fetchDetailBlog} =useDetailBlog()
  // console.log("idUserLike" ,idUserLike)
  console.log("checkLike" ,checkLike)
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
        setCheckLike(!checkLike);
        fetchDetailBlog(id)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
      const checkUser =  idUserLike?.some(user => user?.includes(idUser))
      if(checkUser){
        setCheckLike(true)
       }
  } ,[idUserLike, idUser])

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
              fill={checkLike  ? '#f53e32' : 'none'}
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
