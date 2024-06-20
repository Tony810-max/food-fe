import { API_URL, IReviewProduct } from '@/types/common';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const useReview = () => {
  const params = useParams();
  const [reviewProductId, setReviewProductId] = useState<IReviewProduct[]>();
  const [idProduct, setIdProduct] = useState<string | string[]>();
  const fetchReview = useCallback(async () => {
    try {
      if (params?.id) {
        setIdProduct(params?.id);
      }
      const response = await axios.get(
        `${API_URL}/api/v1/reviews/${idProduct}`,
      );
      if (response) {
        setReviewProductId(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [idProduct, params?.id]);

  useEffect(() => {
    fetchReview();
  }, [fetchReview]);
  return {
    reviewProductId,
  };
};
