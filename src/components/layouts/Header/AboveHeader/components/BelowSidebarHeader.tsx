import ROUTES from '@/types/routes';
import Link from 'next/link';
import React from 'react';
import { User } from 'lucide-react';
import FormBelowSidebarHeader from './FormBelowSidebarHeader';
import DropdownSideBarHeader from './DropdownSideBarHeader';

const BelowSidebarHeader = () => {
  const user = localStorage.getItem('user');

  return (
    <div className="flex flex-col items-center justify-between">
      <FormBelowSidebarHeader />
      <div className="flex flex-col items-center gap-2">
        {!user ? (
          <Link
            href={ROUTES.SIGNIN}
            className="flex items-center gap-2 cursor-pointer hover:text-orange-400"
          >
            <User width={20} height={20} />
            <span className="text-lg font-semibold capitalize">login</span>
          </Link>
        ) : (
          ''
        )}
        <Link
          href={`${ROUTES.SHOP}?page=1`}
          className="border rounded-md w-full text-center py-1 items-center gap-2 cursor-pointer hover:text-orange-400"
        >
          Products
        </Link>
        <Link
          href={`${ROUTES.BLOG}?page=1`}
          className="border rounded-md w-full py-1 text-center capitalize  text-base  hover:text-orange-400"
        >
          Blog
        </Link>
        {user ? <DropdownSideBarHeader /> : ''}
      </div>
    </div>
  );
};

export default BelowSidebarHeader;
