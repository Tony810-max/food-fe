'use client';
import React from 'react';
import axios from 'axios';
import { API_URL, IOrder } from '@/types/common';

const UseOrder = () => {
  const [dataOrderUSer, setDataOrderUSer] = React.useState<IOrder>();
  const [tabCurr, setTabCurr] = React.useState('processing');

  const fetchOrderUser = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.get(
        `${API_URL}/api/v1/orders/user/me/?status=${tabCurr}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      if (response) {
        setDataOrderUSer(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchOrderUser();
  }, [tabCurr]);

  return {
    dataOrderUSer,
    setTabCurr,
    tabCurr,
  };
};

export default UseOrder;
