import { Button } from '@/components/ui/button';
import ROUTES from '@/types/routes';
import Link from 'next/link';
import React from 'react';

const NoProductExists = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-4 min-h-[50vh]">
      <span className="font-sans text-lg font-semibold leading-normal">
        Your cart is empty
      </span>
      <Link href={ROUTES.SHOP}>
        <Button
          variant={'destructive'}
          className="bg-[#ee4d2d] font-sans text-lg"
        >
          Go Shopping Now
        </Button>
      </Link>
    </div>
  );
};

export default NoProductExists;
