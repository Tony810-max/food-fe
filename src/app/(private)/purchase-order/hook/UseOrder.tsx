'use client';
import React from 'react';
import axios from 'axios';
import { API_URL, IOrder } from '@/types/common';
import { useSearchParams } from 'next/navigation';

const UseOrder = () => {
  const [dataOrderUSer, setDataOrderUSer] = React.useState<IOrder>();
  const [tabCurr, setTabCurr] = React.useState('processing');
  const searchParam = useSearchParams();
  const search = searchParam?.get('page');

  const fetchOrderUser = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.get(
        `${API_URL}/api/v1/orders/user/me/?status=${tabCurr}&page=${search}&limit=4`,
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
    2;
  }, [tabCurr, search]);

  return {
    dataOrderUSer,
    setTabCurr,
    tabCurr,
    fetchOrderUser,
  };
};

export default UseOrder;
