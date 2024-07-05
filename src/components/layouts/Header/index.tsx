'use client';

import React, { useState } from 'react';

import AboveHeader from './AboveHeader';
import dynamic from 'next/dynamic';
import useCategory from '@/hooks/useCategory';

const BelowHeader = dynamic(() => import('./BelowHeader'), {
  ssr: false,
});

const HeaderMain = () => {
  const [check, setCheck] = useState(false);
  const { categories } = useCategory();

  return (
    <div className="relative">
      <AboveHeader
        check={check}
        onSetCheck={setCheck}
        categories={categories}
      />

      <BelowHeader categories={categories} />
    </div>
  );
};

export default HeaderMain;
