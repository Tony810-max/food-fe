import React from 'react';
import InfoOrderProduct from './components/InfoOrderProduct';
import BillingDetailsProduct from './components/BillingDetailsProduct';

const CheckoutPage = () => {
  return (
    <div className="container py-[6.25rem] grid grid-cols-3 gap-4">
      <InfoOrderProduct />
      <BillingDetailsProduct />
    </div>
  );
};

export default CheckoutPage;
