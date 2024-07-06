'use client';
import { API_URL, dataShippingAdress } from '@/types/common';
import axios from 'axios';
import { toast } from 'react-toastify';
import useCartProduct from '@/hooks/useCartProduct';

const fetchCashOnDelivery = async (data: dataShippingAdress) => {
  const { dataCartProduct } = useCartProduct();
  try {
    const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
    const ordersProduct = dataCartProduct?.items?.map((product) => {
      return {
        id: product?.product?.id,
        product_unit_price: Number(product?.product?.price),
        product_quanity: product?.quantity,
        title: product?.product?.title,
        description: product?.product?.description,
        discount: Number(product?.product?.discount),
        images: product?.product?.images,
      };
    });
    const dataOrder = {
      shippingAddress: {
        phoneNumber: data?.phoneNumber,
        name: data?.name,
        address: data?.address,
        city: data?.city,
        postCode: data?.postCode,
        state: data?.state,
        country: data?.country,
      },
      orderedProducts: ordersProduct,
      type: 'cash',
      isPaid: 'false',
    };
    const response = await axios.post(`${API_URL}/api/v1/orders`, dataOrder, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (response) {
      toast.success('Your order has been placed successfully');
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchCashOnDelivery;
