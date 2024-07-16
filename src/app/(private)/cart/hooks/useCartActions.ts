import { useGetHeaderConfig } from '@/hooks/useGetHeaderConfig';
import { API_URL } from '@/types/common';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useCartActions = (fetchCartProduct: () => void) => {
  const { headerConfig } = useGetHeaderConfig();

  const handleIncreaseProduct = async (id: number, oldQuantity: number) => {
    try {
      if (!headerConfig) {
        return;
      }

      const newQuantity = oldQuantity + 1;
      const response = await axios.patch(
        `${API_URL}/api/v1/cart/items/${id}/update`,
        {
          quantity: newQuantity,
        },
        headerConfig,
      );

      if (response) {
        fetchCartProduct();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecreaseProduct = async (id: number, oldQuantity: number) => {
    try {
      if (!headerConfig) {
        return;
      }
      const newQuantity = oldQuantity - 1;
      const response = await axios.patch(
        `${API_URL}/api/v1/cart/items/${id}/update`,
        {
          quantity: newQuantity,
        },
        headerConfig,
      );

      if (response) {
        fetchCartProduct();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCartProduct = async (id: number) => {
    try {
      if (!headerConfig) {
        return;
      }
      const response = await axios.delete(
        `${API_URL}/api/v1/cart/items/${id}`,
        headerConfig,
      );
      if (response) {
        toast.success('Delete product successfully');
        fetchCartProduct();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleIncreaseProduct,
    handleDeleteCartProduct,
    handleDecreaseProduct,
  };
};
