import Image from 'next/image';
import React from 'react';
import {
  User,
  ShoppingCart,
  LogOut,
  ShoppingBag,
  Bell,
  LockKeyhole,
} from 'lucide-react';

import ROUTES from '@/types/routes';
import FormBelowHeader from './FormBelowHeader';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { ICategory } from '@/types/common';

interface Props {
  categories: ICategory[];
}
const BelowHeader: React.FC<Props> = ({ categories }) => {
  const { handleLogOut, user } = useAuth();
  const [checkNotifications, setCheckNotifications] =
    React.useState<boolean>(false);

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
          href={ROUTES.PURCHASEORDER}
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild className={'w-56'}>
              <Button variant="outline">{`${user?.firstName} ${user?.lastName}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4 cursor-pointer hover:opacity-70" />
                  <Link
                    href={ROUTES.PROFILE}
                    className="font-semibold cursor-pointer hover:opacity-70"
                  >
                    Profile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem>
                <LockKeyhole className="mr-2 h-4 w-4 cursor-pointer hover:opacity-70" />
                <Link
                  href={ROUTES.CHANGEPASSWORD}
                  className="font-semibold cursor-pointer hover:opacity-70 capitalize"
                >
                  Change password
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogOut}>
                <LogOut className="mr-2 h-4 w-4 cursor-pointer hover:opacity-70" />
                <span className="font-semibold cursor-pointer hover:opacity-70">
                  Log out
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          ''
        )}

        {user ? (
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className=" relative top-2 flex items-center cursor-pointer"
                  onClick={() => setCheckNotifications(true)}
                >
                  <Bell />
                  {!checkNotifications && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">day la thong bao</PopoverContent>
            </Popover>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BelowHeader;
