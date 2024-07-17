import React from 'react';

import SummaryOrderProduct from './components/SummaryOrderProduct';
import PagementMethodImage from './components/PaymentMethodImage';
import PaymentMethodOrder from './components/PagementMethodOrder';
import { CartProduct } from '@/types/common';

interface IInfoOrder {
  paymentMethod?: string;
  onSetPaymentMethod: (value: string) => void;
  summaryValue: number;
  dataCartProduct?: CartProduct;
}

const InfoOrderProduct: React.FC<IInfoOrder> = ({
  paymentMethod,
  onSetPaymentMethod,
  dataCartProduct,
  summaryValue,
}) => {
  return (
    <div className="col-span-1  px-3 space-y-[1.875rem]">
      <SummaryOrderProduct
        summaryValue={summaryValue}
        dataCartProduct={dataCartProduct}
      />
      <PaymentMethodOrder
        paymentMethod={paymentMethod}
        onSetPaymentMethod={onSetPaymentMethod}
      />
      <PagementMethodImage />
    </div>
  );
};

export default InfoOrderProduct;
