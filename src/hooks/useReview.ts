import { API_URL, IReviewProductDetail } from '@/types/common';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const useReview = () => {
  const params = useParams();
  const [reviewProductId, setReviewProductId] =
    useState<IReviewProductDetail[]>();
  const idProduct = params.id;
  
  const fetchReview = useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/reviews/${idProduct}`,
      );
      if (response) {
        response;
        setReviewProductId(response?.data?.reviews);
      }
    } catch (error) {
      console.error(error);
    }
  }, [params?.id]);

  useEffect(() => {
    fetchReview();
  }, []);
  return {
    reviewProductId,
  };
};
