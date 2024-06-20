import { API_URL, Product } from '@/types/common';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const useDetailProduct = () => {
  const [dataDetailProducts, setDataDetailProducts] = useState<Product>();
  const params = useParams();
  const idProduct = Number(params.id);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchDataDetailProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const reponse = await axios.get(
        `${API_URL}/api/v1/products/${idProduct}`,
      );
      if (reponse) {
        setDataDetailProducts(reponse.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [idProduct]);

  useEffect(() => {
    fetchDataDetailProduct();
  }, [fetchDataDetailProduct]);

  return {
    dataDetailProducts: dataDetailProducts,
    isLoading,
  };
};

export default useDetailProduct;
