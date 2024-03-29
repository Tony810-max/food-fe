import { API_URL, Product } from "@/types/common";
import axios from "axios";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useDetailProduct = () => {
  const [dataProducts, setDataProducts] = useState<Product>();
  const params = useParams();
  const idProduct = Number(params.id);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const reponse = await axios.get(
        `${API_URL}/api/v1/products/${idProduct}`
      );
      if (reponse) {
        setDataProducts(reponse.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [idProduct]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    dataProducts: dataProducts,
    isLoading,
  };
};

export default useDetailProduct;
