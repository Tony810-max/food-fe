import Image from "next/image";
import React from "react";

import { User, Heart, HeartIcon } from "lucide-react";
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
    icon: HeartIcon,
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
    <div>
      <div className="container flex items-center justify-between">
        <div className="relative aspect-[5/2] w-40">
          <Image src={"/images/logo.webp"} alt="logo" fill />
        </div>
        <FormBelowHeader />
        <div className="flex gap-7">
          {LIST_ITEM.map((item) => (
            <div key={item?.id} className="flex items-center gap-2">
              <item.icon width={20} height={20} />
              <Link
                href={item?.route}
                className="text-lg font-semibold capitalize"
              >
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
