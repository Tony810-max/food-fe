import Image from "next/image";
import React from "react";

import { User, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import ROUTES from "@/types/routes";
import FormBelowHeader from "./components/FormBelowHeader";

const LIST_ITEM = [
  {
    id: 1,
    name: "account",
    icon: User,
    route: ROUTES.SignIn,
  },
  {
    id: 2,
    name: "wishlist",
    icon: User,
    route: "",
  },
  {
    id: 3,
    name: "cart",
    icon: Heart,
    route: ROUTES.Cart,
  },
];

const BelowHeader = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container flex items-center justify-between">
        <div className="relative w-[10rem] h-[5.2rem]">
          <Image src={"/images/logo.webp"} alt="logo" fill />
        </div>
        <FormBelowHeader />
        <div className="flex gap-7">
          {LIST_ITEM.map((item) => (
            <div key={item?.id} className="flex items-center gap-2">
              <item.icon />
              <Link href={item?.route} className="text-xl font-bold capitalize">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;
