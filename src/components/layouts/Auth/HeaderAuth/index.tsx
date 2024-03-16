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
];

const HeaderAuth: React.FC = () => {
  const pathname = usePathname();

  const label = TITLE_HEADING.find(
    (pathnameItem) => pathnameItem.value === pathname
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
