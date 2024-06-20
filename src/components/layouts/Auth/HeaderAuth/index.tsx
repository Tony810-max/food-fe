'use client';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import { TITLE_HEADING } from '../types/labelHeading';

const HeaderAuth: React.FC = () => {
  const pathname = usePathname();

  const label = TITLE_HEADING.find(
    (pathnameItem) =>
      pathnameItem.value === pathname || pathname.includes(pathnameItem.value),
  );

  return (
    <div className="bg-[#F53E32] py-6">
      <div className="container flex justify-between">
        <span className="font-semibold text-white text-xl capitalize">
          {label?.label}
        </span>
        <span className="text-white capitalize">Home - {label?.label}</span>
      </div>
    </div>
  );
};

export default HeaderAuth;
