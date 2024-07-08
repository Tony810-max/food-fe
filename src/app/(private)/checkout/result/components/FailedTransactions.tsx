import React from 'react';
import { ShieldX } from 'lucide-react';
import ROUTES from '@/types/routes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FailedTransactions = () => {
  return (
    <div className="space-y-4">
      <ShieldX color={'red'} size={'52'} className="text-center w-full " />
      <p className="font-sans text-lg text-center text-red-600 uppercase">
        failed transactions
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
        <Link href={ROUTES?.CART}>
          <Button
            variant={'destructive'}
            className="font-sans text-base capitalize"
          >
            Go to cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FailedTransactions;
