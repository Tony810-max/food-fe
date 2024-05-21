"use client";
import ROUTES from "@/types/routes";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const TITLE_HEADING = [
  {
    value: ROUTES.SIGNIN,
    label: "Login",
  },
  {
    value: ROUTES.SIGNUP,
    label: "Register",
  },
  {
    value: ROUTES.FORGOTPASSWORD,
    label: "Forgot Password",
  },
  {
    value: ROUTES.SHOP,
    label: "Product",
  },
  {
    value: ROUTES.SHOP,
    label: "shop",
  },
  {
    value: ROUTES.CART,
    label: "cart",
  },
  {
    value: ROUTES.CHECKOUT,
    label: "checkout",
  },
  {
    value: ROUTES.PROFILE,
    label: "profile",
  },
  {
    value: ROUTES.ABOUTUS,
    label: "about us",
  },
  {
    value: ROUTES.BLOG,
    label: "blog",
  },
  {
    value: ROUTES.FAQ,
    label: "faq",
  },
  {
    value: ROUTES.PURCHASEORDER,
    label: "purchase order",
  },
  {
    value: ROUTES.CHANGEPASSWORD,
    label: "change password",
  },
];

const HeaderAuth: React.FC = () => {
  const pathname = usePathname();

  const label = TITLE_HEADING.find(
    (pathnameItem) =>
      pathnameItem.value === pathname || pathname.includes(pathnameItem.value)
  );

  return (
    <div className="bg-[#F53E32] py-6">
      <div className="container flex justify-between">
        <span className="font-semibold text-white text-xl capitalize">
          {label?.label}
        </span>
        <span className="text-white capitalize">Home - {label?.label}</span>
      </div>
    </div>
  );
};

export default HeaderAuth;
