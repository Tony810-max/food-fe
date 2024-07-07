import { productOrderMain } from '@/types/common';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import InfoProductDetail from './InfoProductDetail';

export interface IOrderInfo {
  dataOrderInfo: productOrderMain[];
}

const OrderInformation: React.FC<IOrderInfo> = ({dataOrderInfo}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="font-sans text-base font-semibold capitalize"
        >
          View detail
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recipient Information</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>
        <InfoProductDetail dataOrderInfo={dataOrderInfo} />
      </DialogContent>
    </Dialog>
  );
};

export default OrderInformation;
