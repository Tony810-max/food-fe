'use client';
import React from 'react';
import InfoOrderProduct from './components/InfoOrderProduct';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import BillingDetailsProduct from './components/BillingDetailsProduct';
import { Button } from '@/components/ui/button';
import { checkoutSchema } from './types/checkoutSchema';
import { CartProvider } from '@/contexts/useSummaryOrder';
import axios from 'axios';
import { API_URL, dataShippingAdress } from '@/types/common';
import { toast } from 'react-toastify';
import useCartProduct from '@/hooks/useCartProduct';
import { useRouter } from 'next/navigation';
import ROUTES from '@/types/routes';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = React.useState<string>('delivery');
  const { dataCartProduct } = useCartProduct();
  const router = useRouter();
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
      console.log(dataOrder);
      const response = await axios.post(`${API_URL}/api/v1/orders`, dataOrder, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response) {
        toast.success('Your order has been placed successfully');
        setTimeout(() => {
          router.push(ROUTES.PURCHASEORDER);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrderProduct = (data: dataShippingAdress) => {
    switch (paymentMethod) {
      case 'delivery':
        console.log('working delivery order');
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
      onSubmit={handleSubmit(handleOrderProduct)}
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
