'use client';

import React, { useState } from 'react';

import AboveHeader from './AboveHeader/AboveHeader';
import dynamic from 'next/dynamic';
import SidebarHeader from './SidebarHeader';

const BelowHeader = dynamic(() => import('./BelowHeader/BelowHeader'), {
  ssr: false,
});

const HeaderMain = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="relative">
      <AboveHeader check={check} onSetCheck={setCheck} />
      {check && <SidebarHeader onSetCheck={setCheck} check={check} />}
      <BelowHeader />
    </div>
  );
};

export default HeaderMain;
