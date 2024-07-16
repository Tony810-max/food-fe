import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { LockKeyhole, LogOut, NotepadText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ROUTES from '@/types/routes';

interface IDropDown {
  name: string;
  handleLogOut: () => void;
}

const DropdownMenuHeader: React.FC<IDropDown> = ({ handleLogOut, name }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={'w-56'}>
        <Button variant="outline">{name}</Button>
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
        <DropdownMenuItem>
          <NotepadText className="mr-2 h-4 w-4 cursor-pointer hover:opacity-70" />
          <Link
            href={ROUTES.MYBLOG}
            className="font-semibold cursor-pointer hover:opacity-70 capitalize"
          >
            my blog
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
  );
};

export default DropdownMenuHeader;
