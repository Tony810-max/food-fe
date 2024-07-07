'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import UseOrder from './hook/UseOrder';
import TableData from './components/TableData';
import Image from 'next/image';

const PurchaseOrder = () => {
  const DATA_TAB = ['processing', 'shipped', 'delivered', 'cancelled'];
  const { dataOrderUSer, tabCurr, setTabCurr } = UseOrder();
  return (
    <div className="container py-10 space-y-2">
      <div className="space-x-2 flex justify-center w-full">
        {DATA_TAB?.map((item) => (
          <Button
            key={item}
            variant={'link'}
            onClick={() => setTabCurr(item)}
            className={cn('font-sans text-base capitalize', {
              'bg-[#f53e32] text-white rounded-lg font-bold ': tabCurr === item,
            })}
          >
            {item}
          </Button>
        ))}
      </div>
      {dataOrderUSer && dataOrderUSer.data.length > 0 ? (
        <TableData dataOrderUSer={dataOrderUSer} />
      ) : (
        <div className="flex flex-col gap-5 items-center py-10">
          <div className="relative w-32 h-32">
            <Image
              src="/images/Cancel-Order.webp"
              alt="imgNoOrder"
              fill
              unoptimized
              priority
            />
          </div>
          <span className="font-sans text-xl text-center  font-semibold italic">
            No orders yet
          </span>
        </div>
      )}
    </div>
  );
};

export default PurchaseOrder;
