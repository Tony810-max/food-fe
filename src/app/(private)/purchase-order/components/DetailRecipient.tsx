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

import InfoUser from './InfoUser';
import { dataShippingAdress } from '@/types/common';

export interface IDetailRecipients {
  dataUser: dataShippingAdress;
}

const DetailRecipient: React.FC<IDetailRecipients> = ({ dataUser }) => {
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
        <InfoUser dataUser={dataUser} />
      </DialogContent>
    </Dialog>
  );
};

export default DetailRecipient;
