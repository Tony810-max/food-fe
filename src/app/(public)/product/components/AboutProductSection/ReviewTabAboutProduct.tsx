'use client';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ReactStars from 'react-rating-stars-component';
import { format } from 'date-fns';
import { useReview } from '@/hooks/useReview';

const ReviewTabAboutProduct = () => {
  const { reviewProductId } = useReview();
  console.log(reviewProductId);
  return (
    <div className="py-4">
      {reviewProductId?.map((product) => (
        <div className="flex items-center gap-4" key={product?.id}>
          <Avatar className="self-start">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <span className="font-sans text-lg italic font-medium">
              {`${product?.user?.firstName} ${product?.user?.lastName}`}
            </span>
            <span className="font-sans text-base italic font-normal">
              {format(new Date(product?.createdAt), 'dd-MM-yyy hh:mm:ss')}
            </span>
            <ReactStars
              count={5}
              value={product?.ratings}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
            <div className="flex">
              <blockquote className=" border-l-2 pl-2 italic">
                {product.comment}
              </blockquote>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewTabAboutProduct;
