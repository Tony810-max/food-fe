import { API_URL, IProduct } from '@/types/common';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export interface IMetaData {
  currentPage: number;
  limit: number;
  totalItems: number;
  totalPage: number;
}

const useProduct = (limit = 10) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  
  const [meta, setMeta] = React.useState<IMetaData | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParam = useSearchParams();
  const searchPage = searchParam.get('page');
  const page = searchPage ? searchPage : 1;

  const fetchProduct = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/products?page=${page}&limit=${limit}`,
      );
      if (response) {
        setProducts(response.data.products);
        setMeta(response.data.meta);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [limit, searchPage]);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const maxPriceValue = React.useMemo(() => {
    if (!products) return 0;

    return Math.max(...products.map((product) => Number(product.price)));
  }, [products]);

  return {
    products: products,
    maxPrice: maxPriceValue,
    setProducts,
    isLoading,
    meta,
  };
};

export default useProduct;
