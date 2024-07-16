import { AlignJustify, Phone } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import ROUTES from '@/types/routes';
import CategoryNavBar from './components/CategoryNavBar';
import { ICategory } from '@/types/common';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import BelowSidebarHeader from './components/BelowSidebarHeader';

interface AboveProps {
  check: boolean;
  onSetCheck: (value: boolean) => void;
  categories: ICategory[];
}

const AboveHeader: React.FC<AboveProps> = ({ categories }) => {
  return (
    <div className=" flex shadow-md">
      <div className="container flex py-3 items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify className="block lg:hidden hover:opacity-70 cursor-pointer" />
          </SheetTrigger>
          <SheetContent />
          <SheetContent className="block lg:hidden">
            <SheetHeader>
              <SheetTitle>Food Trove</SheetTitle>
            </SheetHeader>
            <BelowSidebarHeader />
          </SheetContent>
        </Sheet>
        <div className="lg:flex items-center justify-between gap-3 hidden ">
          <Link href={ROUTES.HOME} className="font-semibold text-base px-3">
            Home
          </Link>
          <CategoryNavBar categories={categories} />
          <Link
            href={`${ROUTES.SHOP}?page=1`}
            className="capitalize font-semibold text-base px-3"
          >
            Products
          </Link>
          <Link
            href={`${ROUTES.BLOG}?page=1`}
            className="capitalize font-semibold text-base px-3"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span className="tracking-wider text-sm">+123 ( 456 ) ( 7890 )</span>
        </div>
      </div>
    </div>
  );
};

export default AboveHeader;
