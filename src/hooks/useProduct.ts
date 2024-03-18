import { API_URL, IProduct } from "@/types/common";
import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/products`);
      if (response) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    products: products,
  };
};

export default useProduct;
