import React from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import ROUTES from "@/types/routes";
import { ChevronDown } from "lucide-react";

const ELEMENTS_HEADER = [
  {
    id: 1,
    name: "category",
    item: [
      "Cake & Milk",
      "Fresh Meat",
      "Vegetable",
      "Apple & Mango",
      "Strawbery",
      "View More",
    ],
  },
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
    <Menubar className="border-none">
      <Link href={ROUTES.Home}>Home</Link>
      {ELEMENTS_HEADER.map((element, id) => (
        <MenubarMenu key={element?.id}>
          <MenubarTrigger className="flex gap-[0.3rem]">
            <span className="capitalize ">{element?.name}</span>
            <ChevronDown size={14} />
          </MenubarTrigger>
          <MenubarContent>
            {element?.item?.map((category, index) => (
              <MenubarItem key={index}>
                <Link href={ROUTES.Category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default MenubarAboveHeader;
