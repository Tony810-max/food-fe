import HeaderAuth from "@/components/layouts/Auth/HeaderAuth";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>
   <HeaderAuth />
  {children}</>;
};

export default layout;
