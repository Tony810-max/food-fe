import { API_URL, CartProduct } from '@/types/common';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGetHeaderConfig } from './useGetHeaderConfig';

const useCartProduct = () => {
  const [dataCartProduct, setDataCartProduct] = useState<CartProduct[]>([]);
  const { headerConfig } = useGetHeaderConfig();

  const fetchCartProduct = useCallback(async () => {
    try {
      if (!headerConfig) {
        return;
      }
      const respone = await axios.get(
        `${API_URL}/api/v1/cart/user`,
        headerConfig,
      );
      if (respone) {
        setDataCartProduct(respone.data.cart.items);
      }
    } catch (error) {
      console.log(error);
    }
  }, [headerConfig]);

  useEffect(() => {
    fetchCartProduct();
  }, [fetchCartProduct]);

  const summaryValue = useMemo(() => {
    let total = 0;
    if (dataCartProduct) {
      dataCartProduct.map((item) => {
        total += Number(item?.product?.price) * Number(item?.quantity);
      });
    }

    return total;
  }, [dataCartProduct]);

  return {
    dataCartProduct: dataCartProduct,
    fetchCartProduct,
    summaryValue,
  };
};
export default useCartProduct;
