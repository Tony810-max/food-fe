'use client';
import React from 'react';
import InfoOrderProduct from './components/InfoOrderProduct';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import BillingDetailsProduct from './components/BillingDetailsProduct';
import { Button } from '@/components/ui/button';
import { checkoutSchema } from './types/checkoutSchema';
import axios from 'axios';
import { API_URL } from '@/types/common';
import { CartProvider } from '@/contexts/useSummaryOrder';
import useCartProduct from '@/hooks/useCartProduct';

type dataShippingAdress = {
  address: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  postCode: string;
  state: string;
};

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = React.useState<string>('delivery');
  const { dataCartProduct } = useCartProduct();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const fetchCashOnDelivery = async (data: dataShippingAdress) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const ordersProduct = dataCartProduct?.items?.map((product) => {
        return {
          id: product?.product?.id,
          product_unit_price: product?.product?.price,
          product_quanity: product?.quantity,
          title: product?.product?.title,
          description: product?.product?.description,
          discount: product?.product?.discount,
          images: product?.product?.images,
        };
      });
      console.log(ordersProduct);
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
        orderedProducts: {
          id: 1,
          product_unit_price: 100000,
          product_quanity: 1,
          title: 'Product 1',
          description: 'Description 1',
          discount: 0,
          images: ['image1'],
        },
        type: 'cash',
        isPaid: 'false',
      };
      const response = await axios.post(`${API_URL}/api/v1/orders`, dataOrder, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrderProduct = (data: dataShippingAdress) => {
    switch (paymentMethod) {
      case 'delivery':
        fetchCashOnDelivery(data);
        break;
      case 'transfer':
        console.log('working transfer');
        break;
      default:
        console.log('not working...!!!');
        break;
    }
  };

  return (
    <form
      className="container py-[6.25rem] grid grid-cols-3 gap-4"
      onSubmit={handleSubmit(() => handleOrderProduct)}
    >
      <CartProvider>
        <InfoOrderProduct
          paymentMethod={paymentMethod}
          onSetPaymentMethod={setPaymentMethod}
        />
      </CartProvider>
      <BillingDetailsProduct
        register={register}
        watch={watch}
        errors={errors}
        setValue={setValue}
        control={control}
        reset={reset}
      />
      <div className="flex justify-end col-span-3">
        <Button type="submit" variant={'destructive'}>
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default CheckoutPage;
