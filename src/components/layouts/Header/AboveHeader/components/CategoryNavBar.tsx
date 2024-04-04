import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useCategory from "@/hooks/useCategory";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoryNavBar = () => {
  const { categories } = useCategory();

  return (
    <Menubar className="border-none p-0">
      <MenubarMenu>
        <MenubarTrigger className="flex gap-1">
          <span className="capitalize font-semibold text-base">category</span>
          <ChevronDown size={14} />
        </MenubarTrigger>
        <MenubarContent>
          {categories?.map((category, index) => (
            <MenubarItem key={index}>
              <Link href={"/"}>{category.title}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CategoryNavBar;
