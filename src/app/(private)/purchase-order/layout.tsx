'use client';
import React from 'react';

import ROUTES from '@/types/routes';
import Tab from './components/tab';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [checkHref, setCheckHref] = React.useState<string>('processing');

  const DATA_PURCHASE_ORDER = [
    {
      id: 1,
      href: ROUTES.PURCHASEORDER_PROCESSING,
      title: 'processing',
    },
    {
      id: 2,
      href: ROUTES.PURCHASEORDER_SHIPPED,
      title: 'shipped',
    },
    {
      id: 3,
      href: ROUTES.PURCHASEORDER_DELIVERED,
      title: 'delivered',
    },
    {
      id: 4,
      href: ROUTES.PURCHASEORDER_CANCELLED,
      title: 'cancelled',
    },
  ];
  return (
    <div>
      <div className="container py-10 space-x-2 flex justify-center w-full">
        {DATA_PURCHASE_ORDER?.map((item) => (
          <Tab
            key={item?.id}
            href={item?.href}
            title={item?.title}
            checkHref={checkHref}
            onSetCheckHref={setCheckHref}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default layout;
