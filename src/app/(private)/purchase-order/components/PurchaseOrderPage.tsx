'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { IMeta } from '@/types/common';

const PaginationPurchaseOrder = dynamic(
  () => import('./PaginationPurchaseOrder'),
  {
    suspense: true,
    ssr: false,
  },
);

interface PaginationProps {
  metaComment: IMeta | undefined;
}

const PurchaseOrderPage: React.FC<PaginationProps> = ({ metaComment }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaginationPurchaseOrder metaComment={metaComment} />
    </Suspense>
  );
};

export default PurchaseOrderPage;
