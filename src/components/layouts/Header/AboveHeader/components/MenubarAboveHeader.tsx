import React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import ROUTES from "@/types/routes";
import { ChevronDown } from "lucide-react";
import CategoryNavBar from "./CategoryNavBar";

const ELEMENTS_HEADER = [
  {
    id: 2,
    name: "products",
    item: ["Popular Products", "Daily best sells", "Deals of the day"],
  },
  {
    id: 3,
    name: "pages",
    item: [""],
  },
  {
    id: 4,
    name: "blogs",
    item: [""],
  },
  {
    id: 5,
    name: "elements",
    item: [""],
  },
];

const MenubarAboveHeader = () => {
  return (
    <Menubar className="border-none gap-3">
      <Link href={ROUTES.HOME} className="font-semibold text-base">
        Home
      </Link>

      <CategoryNavBar />

      {ELEMENTS_HEADER.map((element, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="flex gap-1">
            <span className="capitalize font-semibold text-base">
              {element?.name}
            </span>
            <ChevronDown size={14} />
          </MenubarTrigger>
          <MenubarContent>
            {element?.item?.map((category, index) => (
              <MenubarItem key={index}>
                <Link href={ROUTES.CATEGORY}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default MenubarAboveHeader;
