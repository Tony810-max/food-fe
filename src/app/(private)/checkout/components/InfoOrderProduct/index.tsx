import React from 'react';

import SummaryOrderProduct from './components/SummaryOrderProduct';
import PagementMethodImage from './components/PaymentMethodImage';
import PaymentMethodOrder from './components/PagementMethodOrder';

interface IInfoOrder {
  paymentMethod?: string;
  onSetPaymentMethod: (value: string) => void;
}

const InfoOrderProduct: React.FC<IInfoOrder> = ({
  paymentMethod,
  onSetPaymentMethod,
}) => {
  return (
    <div className="col-span-1 px-3 space-y-[1.875rem]">
      <SummaryOrderProduct  />
      <PaymentMethodOrder
        paymentMethod={paymentMethod}
        onSetPaymentMethod={onSetPaymentMethod}
      />
      <PagementMethodImage />
    </div>
  );
};

export default InfoOrderProduct;
