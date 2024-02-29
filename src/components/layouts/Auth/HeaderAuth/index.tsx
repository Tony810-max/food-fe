"use client";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderAuth: React.FC = () => {
  let url = usePathname();
  if (url.startsWith("/")) {
    url = url.substring(1);
  }
  return (
    <div className="bg-[#F53E32] py-6">
      <div className="container flex justify-between">
        <span className="font-semibold text-white text-xl capitalize">
          {url}
        </span>
        <span className="text-white capitalize">Home - {url}</span>
      </div>
    </div>
  );
};

export default HeaderAuth;
