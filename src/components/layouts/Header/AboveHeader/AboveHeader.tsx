import { AlignLeft, Phone } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import ROUTES from "@/types/routes";
import CategoryNavBar from "./components/CategoryNavBar";

interface AboveProps {
  check: boolean;
  onSetCheck: (value: boolean) => void;
}

const AboveHeader: React.FC<AboveProps> = ({ onSetCheck, check }) => {
  return (
    <div className=" flex shadow-md">
      <div className="container flex py-3 items-center justify-between">
        <AlignLeft
          className="block border border-border p-1 rounded-lg cursor-pointer lg:invisible"
          size={36}
          onClick={() => onSetCheck(!check)}
        />
        <div className="lg:flex items-center gap-6 hidden ">
          <Link href={ROUTES.HOME} className="font-semibold text-base">
            Home
          </Link>
          <CategoryNavBar />
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
