import { API_URL, Product } from "@/types/common";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useDetailProduct = () => {
  const [dataProducts, setDataProducts] = useState<Product>();
  const params = useParams();
  const idProduct = Number(params.id);

  const fetchData = async () => {
    try {
      const reponse = await axios.get(
        `${API_URL}/api/v1/products/${idProduct}`
      );
      if (reponse) {
        setDataProducts(reponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    dataProducts: dataProducts,
  };
};

export default useDetailProduct;
