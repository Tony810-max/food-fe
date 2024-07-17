'use client';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ReactStars from 'react-rating-stars-component';
import { format } from 'date-fns';
import { useReview } from '@/hooks/useReview';

const ReviewTabAboutProduct = () => {
  const { reviewProductId } = useReview();
  
  return (
    <div className="py-4 max-h-60 overflow-auto">
      {reviewProductId?.map((reiview) => (
        <div className="flex items-center gap-4" key={reiview?.id}>
          <Avatar className="self-start">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <span className="font-sans text-lg italic font-medium">
              {reiview?.user
                ? `${reiview?.user?.firstName} ${reiview?.user?.lastName}`
                : 'Anonymous '}
            </span>
            <span className="font-sans text-base italic font-normal">
              {format(new Date(reiview?.createdAt), 'dd-MM-yyy hh:mm:ss')}
            </span>
            <ReactStars
              count={5}
              value={reiview?.ratings}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
            <div className="flex">
              <blockquote className=" border-l-2 pl-2 italic">
                {reiview.comment}
              </blockquote>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewTabAboutProduct;
