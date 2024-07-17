'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import UseOrder from './hook/UseOrder';
import TableData from './components/TableData';
import Image from 'next/image';
import PaginationPurchaseOrder from './components/PaginationPurchaseOrder';
import SelectTab from './components/SelectTab';
import { DATA_TAB } from './types/constant';

const PurchaseOrder: React.FC = () => {
  const { dataOrderUSer, tabCurr, setTabCurr, fetchOrderUser } = UseOrder();
  const [checkTab, setCheckTab] = React.useState<boolean>(false);

  React.useEffect(() => {
    tabCurr === 'processing' ? setCheckTab(true) : setCheckTab(false);
  }, [tabCurr]);

  return (
    <div className="container py-10 space-y-2">
      <div className="space-x-2 hidden sm:flex justify-center w-full">
        {DATA_TAB.map((item) => (
          <Button
            key={item}
            variant={'link'}
            onClick={() => {
              setTabCurr(item);
            }}
            className={cn('font-sans text-base capitalize', {
              'bg-[#f53e32] text-white rounded-lg font-bold ': tabCurr === item,
            })}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="flex sm:hidden justify-center">
        <SelectTab onSetTabCurr={setTabCurr} />
      </div>
      <div className="min-h-80">
        {dataOrderUSer && dataOrderUSer.data.length > 0 ? (
          <TableData
            dataOrderUSer={dataOrderUSer}
            fetchOrderUser={fetchOrderUser}
            checkTab={checkTab}
          />
        ) : (
          <div className="flex flex-col gap-5 items-center py-10">
            <div className="relative w-20 h-20 sm:w-32 sm:h-32">
              <Image
                src="/images/Cancel-Order.webp"
                alt="imgNoOrder"
                fill
                unoptimized
                priority
              />
            </div>
            <span className="font-sans text-lg sm:text-xl text-center font-semibold italic">
              No orders yet
            </span>
          </div>
        )}
      </div>
      {dataOrderUSer?.meta && dataOrderUSer?.meta?.totalPages > 1 && (
        <PaginationPurchaseOrder metaComment={dataOrderUSer?.meta} />
      )}
    </div>
  );
};

export default PurchaseOrder;
