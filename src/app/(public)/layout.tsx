import HeaderAuth from "@/components/layouts/Auth/HeaderAuth";
import React, { Suspense } from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderAuth />
      <Suspense>{children}</Suspense>
    </>
  );
};

export default layout;
