import React from "react";

import Link from "next/link";
import ROUTES from "@/types/routes";
import CategoryNavBar from "./CategoryNavBar";

const MenubarAboveHeader = () => {
  return (
    <div className="border-none gap-3 flex items-center">
      <Link href={ROUTES.HOME} className="font-semibold text-base">
        Home
      </Link>
      <CategoryNavBar />
    </div>
  );
};

export default MenubarAboveHeader;
