import React from 'react';
import { LogOut, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import ROUTES from '@/types/routes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const DropdownSideBarHeader = () => {
  const { handleLogOut, user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-56">
        <Button variant="outline">{`${user?.firstName} ${user?.lastName}`}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 space-y-2">
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-3">
          <DropdownMenuItem className="flex items-center p-2 gap-2 border rounded-[0.313rem]">
            <User
              color="black"
              className=" h-4 w-4 cursor-pointer hover:opacity-70"
            />
            <Link
              href={ROUTES.PROFILE}
              className="text-black text-base font-semibold cursor-pointer hover:opacity-70"
            >
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center p-2 gap-2 border rounded-[0.313rem]">
            <Link
              href={ROUTES.CART}
              className={cn(
                'flex items-center gap-2 cursor-pointer hover:text-orange-400',
                {
                  'pointer-events-none': !user,
                },
              )}
            >
              <ShoppingCart
                color="black"
                className="h-4 w-4 cursor-pointer hover:opacity-70"
              />
              <span className="text-base text-black font-semibold capitalize">
                cart
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center p-2 gap-2 border rounded-[0.313rem]">
            <Link
              href={`${ROUTES.PURCHASEORDER}?page=1`}
              className={cn(
                'flex items-center gap-2 cursor-pointer hover:text-orange-400',
                {
                  'pointer-events-none': !user,
                },
              )}
            >
              <ShoppingBag
                color="black"
                className="h-4 w-4 cursor-pointer hover:opacity-70"
              />
              <span className="text-base text-black font-semibold capitalize">
                purchase order
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogOut}
            className="flex items-center p-2 gap-2 border rounded-[0.313rem]"
          >
            <LogOut
              color="black"
              className="h-4 w-4 cursor-pointer hover:opacity-70"
            />
            <span className="text-base text-black font-semibold cursor-pointer hover:opacity-70">
              Log out
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownSideBarHeader;
