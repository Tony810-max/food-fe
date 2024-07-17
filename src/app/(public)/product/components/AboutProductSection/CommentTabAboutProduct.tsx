'use client';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Textarea } from '@/components/ui/textarea';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { API_URL } from '@/types/common';
import { toast } from 'react-toastify';

const schema = yup
  .object()
  .shape({
    comment: yup.string().required('Please enter a comment'),
  })
  .required();

const CommentTabAboutProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [rating, setRating] = useState<number>(5);
  const params = useParams();

  const onSubmit = async (data: { comment: string }) => {
    const dataComment = {
      productId: Number(params?.id),
      ratings: rating,
      comment: data?.comment,
    };

    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.post(
        `${API_URL}/api/v1/reviews`,
        dataComment,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      if (response) {
        toast.success('Thank you for providing us with your feedback');
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="py-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <span>Please share your thoughts on this product. </span>
      <div className="flex items-center gap-2">
        <ReactStars
          count={5}
          value={5}
          onChange={(rate: number) => setRating(rate)}
          size={24}
          activeColor="#ffd700"
        />
        <span className="font-sans text-base italic">
          (Please rate the quality here)
        </span>
      </div>
      <div className="space-y-4">
        <Label htmlFor="comment" className="font-sans text-lg">
          Comment
        </Label>
        <Textarea
          id="comment"
          placeholder="Express your thoughts here"
          {...register('comment')}
        />
      </div>
      {errors.comment?.message && (
        <p className="font-sans text-red-600 text-lg italic">
          {errors.comment?.message}
        </p>
      )}

      <Button
        variant={'destructive'}
        type="submit"
        className="font-sans text-lg capitalize"
      >
        Submit feedback
      </Button>
    </form>
  );
};

export default CommentTabAboutProduct;
