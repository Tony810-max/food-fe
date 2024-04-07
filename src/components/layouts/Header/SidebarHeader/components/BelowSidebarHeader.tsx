import ROUTES from "@/types/routes";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import FormBelowSidebarHeader from "./FormBelowSidebarHeader";

const BelowSidebarHeader = () => {
  const { handleLogOut, user } = useAuth();
  return (
    <div className="flex flex-col items-center justify-between">
      <FormBelowSidebarHeader />
      <div className="flex flex-col items-center gap-7">
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
        <Link
          href={ROUTES.CART}
          className={cn(
            "flex items-center gap-2 cursor-pointer hover:text-orange-400",
            {
              "pointer-events-none": !user,
            }
          )}
        >
          <ShoppingCart color="white" width={20} height={20} />
          <span className="text-lg text-white font-semibold capitalize">
            cart
          </span>
        </Link>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-56">
              <Button variant="outline">{`${user?.firstName} ${user?.lastName}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 space-y-2">
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="space-y-3">
                <DropdownMenuItem className="flex items-center p-2 gap-2 border rounded-[0.313rem]">
                  <User
                    color="white"
                    className=" h-4 w-4 cursor-pointer hover:opacity-70"
                  />
                  <Link
                    href={ROUTES.PROFILE}
                    className="text-white font-semibold cursor-pointer hover:opacity-70"
                  >
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogOut}
                  className="flex items-center p-2 gap-2 border rounded-[0.313rem]"
                >
                  <LogOut
                    color="white"
                    className="h-4 w-4 cursor-pointer hover:opacity-70"
                  />
                  <span className="text-white font-semibold cursor-pointer hover:opacity-70">
                    Log out
                  </span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BelowSidebarHeader;
