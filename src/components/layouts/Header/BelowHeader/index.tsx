import Image from 'next/image';
import React from 'react';
import { User, ShoppingCart, ShoppingBag } from 'lucide-react';

import ROUTES from '@/types/routes';
import FormBelowHeader from './FormBelowHeader';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { useAuth } from '@/hooks/useAuth';
import { ICategory } from '@/types/common';
import DropdownMenuHeader from './DropdownMenuHeader';

interface Props {
  categories: ICategory[];
}
const BelowHeader: React.FC<Props> = ({ categories }) => {
  const { handleLogOut, user } = useAuth();

  return (
    <div className="container py-5 lg:flex items-center gap-2 justify-between hidden ">
      <Link href={ROUTES.HOME} className="relative aspect-[5/2] w-40">
        <Image
          src={'/images/logo.webp'}
          alt="logo"
          fill
          sizes="(min-width: 768px) 100vw"
        />
      </Link>
      <FormBelowHeader categories={categories} />
      <div className="flex gap-7">
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
          href={ROUTES.CART}
          className={cn(
            'flex items-center gap-2 cursor-pointer hover:text-orange-400',
            {
              'pointer-events-none': !user,
            },
          )}
        >
          <ShoppingCart width={20} height={20} />
          <span className="text-lg font-semibold capitalize">cart</span>
        </Link>
        <Link
          href={`${ROUTES.PURCHASEORDER}?page=1&limit=4`}
          className={cn(
            'flex items-center gap-2 cursor-pointer hover:text-orange-400',
            {
              'pointer-events-none': !user,
            },
          )}
        >
          <ShoppingBag width={20} height={20} />
          <span className="text-lg font-semibold capitalize">
            purchase order
          </span>
        </Link>
        {user ? (
          <DropdownMenuHeader
            handleLogOut={handleLogOut}
            name={`${user?.firstName} ${user?.lastName}`}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BelowHeader;
