import { API_URL, IProduct } from "@/types/common";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

const useProduct = (page = 1, limit = 10) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [priceFilter, setPriceFilter] = useState<number[]>([]);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/products?page=${page}&limit=${limit}`
      );
      if (response) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }, [limit, page]);

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
    setPriceFilter,
  };
};

export default useProduct;
