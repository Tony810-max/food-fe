import Image from "next/image";
import React, { useMemo } from "react";

import { User, HeartIcon, ShoppingCart, LogOut } from "lucide-react";
import ROUTES from "@/types/routes";
import FormBelowHeader from "./components/FormBelowHeader";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BelowHeader = () => {
  const user: any = useMemo(() => {
    if (typeof localStorage !== "undefined") {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage?.getItem("user")!)
        : null;
      const accessToken = localStorage.getItem("access-token")
        ? JSON.parse(localStorage.getItem("access-token")!)
        : null;

      if (user && accessToken) return user;

      return null;
    }
  }, []);

  const handleLogOut = () => {
    if (localStorage && window) {
      localStorage?.removeItem("user");
      localStorage?.removeItem("access-token");
      window?.location?.reload();
    }
  };

  return (
    <div className="py-5">
      <div className="container flex items-center justify-between">
        <Link href={ROUTES.HOME} className="relative aspect-[5/2] w-40">
          <Image
            src={"/images/logo.webp"}
            alt="logo"
            fill
            sizes="(min-width: 768px) 100vw"
          />
        </Link>
        <FormBelowHeader />
        <div className="flex gap-7">
          {!user ? (
            <Link
              href={ROUTES.SIGNIN}
              className="flex items-center gap-2 cursor-pointer hover:text-orange-400"
            >
              <User width={20} height={20} />
              <span className="text-lg font-semibold capitalize">login</span>
            </Link>
          ) : (
            ""
          )}

          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
            <HeartIcon width={20} height={20} />
            <span className="text-lg font-semibold capitalize">wishlist</span>
          </div>
          <Link
            href={ROUTES.CART}
            className={cn(
              "flex items-center gap-2 cursor-pointer hover:text-orange-400",
              {
                "pointer-events-none": !user,
              }
            )}
          >
            <ShoppingCart width={20} height={20} />
            <span className="text-lg font-semibold capitalize">cart</span>
          </Link>
          {user ? (
            <NavigationMenu className="w-full">
              <NavigationMenuList className="w-full">
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="text-lg font-semibold">{`${user?.firstName} ${user?.lastName}`}</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full px-5 py-2 space-y-4">
                    <Link href={ROUTES.PROFILE} className=" font-semibold">
                      Profile
                    </Link>
                    <button
                      className="flex items-center gap-2 w-full hover:opacity-70"
                      onClick={handleLogOut}
                    >
                      <LogOut />
                      <span className="font-semibold"> Logout</span>
                    </button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;
