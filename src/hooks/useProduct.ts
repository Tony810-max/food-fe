import { API_URL, IProduct } from "@/types/common";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

const useProduct = (limit = 10) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [priceFilter, setPriceFilter] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/products?page=${currentPage}&limit=${limit}`
      );
      if (response) {
        setProducts(response.data.products);
        setTotalPage(response.data.meta.totalPage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [limit, currentPage]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const maxPriceValue = useMemo(() => {
    if (!products) return 0;

    return Math.max(...products.map((product) => Number(product.price)));
  }, [products]);

  return {
    products: products,
    maxPrice: maxPriceValue,
    priceFilter,
    setProducts,
    setPriceFilter,
    currentPage,
    setCurrentPage,
    totalPage,
    isLoading,
    limit,
  };
};

export default useProduct;
