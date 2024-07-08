import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ROUTES from '@/types/routes';

const SuccessfullTrade = () => {
  return (
    <div className="space-y-4">
      <CheckCircle color={'green'} size={'44'} className="text-center w-full" />
      <p className="font-sans text-lg text-center text-green-600 uppercase">
        successfull trade
      </p>
      <div className="space-x-2">
        <Link href={ROUTES?.HOME}>
          <Button
            variant={'secondary'}
            className="font-sans text-base capitalize"
          >
            Go to home
          </Button>
        </Link>
        <Link href={ROUTES?.SHOP}>
          <Button
            variant={'destructive'}
            className="font-sans text-base capitalize"
          >
            Go to shop
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessfullTrade;
