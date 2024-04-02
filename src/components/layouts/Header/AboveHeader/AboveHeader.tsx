import { AlignLeft, Phone } from "lucide-react";
import React from "react";
import MenubarHeader from "./components/MenubarAboveHeader";
import Link from "next/link";
import ROUTES from "@/types/routes";

const AboveHeader = () => {
  return (
    <div className="flex shadow-md">
      <div className="container flex py-3 items-center justify-between">
        <AlignLeft
          className="block border border-border p-1 rounded-lg md:invisible"
          size={36}
        />
        <div className="flex items-center gap-5">
          <MenubarHeader />
          <Link
            href={ROUTES.SHOP}
            className="capitalize font-semibold text-base"
          >
            Products
          </Link>
          <Link
            href={ROUTES.BLOG}
            className="capitalize font-semibold text-base"
          >
            BLOG
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
