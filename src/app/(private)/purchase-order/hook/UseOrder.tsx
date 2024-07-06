'use client';
import React from 'react';
import axios from 'axios';
import { API_URL, IOrder } from '@/types/common';

const UseOrder = () => {
  const [dataOrderUser, setDataOrderUser] = React.useState<IOrder>();

  const getOrderId = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.get(`${API_URL}/api/v1/orders/user/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response) {
        setDataOrderUser(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getOrderId();
  }, []);

  return {
    dataOrderUser,
  };
};

export default UseOrder;
