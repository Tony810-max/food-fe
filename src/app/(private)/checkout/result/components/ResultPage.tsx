'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { API_URL } from '@/types/common';
import axios from 'axios';
import FailedTransactions from '../components/FailedTransactions';
import SuccessfullTrade from '../components/SuccessfullTrade';

const ResultPage = () => {
  const searchParams = useSearchParams();
  const transactionStatus = searchParams?.get('vnp_TransactionStatus');
  const transactionNo = searchParams?.get('vnp_TransactionNo');
  const responseCode = searchParams?.get('vnp_ResponseCode');
  const orderID = searchParams?.get('orderID');

  const fetchOrderResult = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.get(
        `${API_URL}/api/v1/orders/return_url?vnp_TransactionStatus=${transactionStatus}&vnp_TransactionNo=${transactionNo}&vnp_ResponseCode=${responseCode}&orderId=${orderID}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchOrderResult();
  }, []);
  return (
    <Suspense>
      <div className="py-20 container flex justify-center items-center">
        {responseCode && (responseCode === '00' || responseCode === '07') ? (
          <SuccessfullTrade />
        ) : (
          <FailedTransactions />
        )}
      </div>
    </Suspense>
  );
};
export default ResultPage;
