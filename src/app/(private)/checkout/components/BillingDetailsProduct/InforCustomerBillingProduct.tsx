import { Input } from '@/components/ui/input';
import React from 'react';

interface InfoCustomerProps {
  title: string;
}

const InforCustomerBillingProduct: React.FC<InfoCustomerProps> = ({
  title,
}) => {
  return (
    <div className="col-span-2">
      <label>{title}*</label>
      <Input />
    </div>
  );
};

export default InforCustomerBillingProduct;
