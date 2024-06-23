import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ICategory } from '@/types/common';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  categories: ICategory[];
}
const CategoryNavBar: React.FC<Props> = ({ categories }) => {
  return (
    <Menubar className="border-none ">
      <MenubarMenu>
        <MenubarTrigger className="flex gap-1">
          <span className="capitalize font-semibold text-base">category</span>
          <ChevronDown size={14} />
        </MenubarTrigger>
        <MenubarContent>
          {categories?.map((category, index) => (
            <MenubarItem key={index}>
              <Link href={'/'}>{category.title}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CategoryNavBar;
