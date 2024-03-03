import React from "react";
import HeaderAuth from "../../components/layouts/Auth/HeaderAuth";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderAuth />
      {children}
    </>
  );
};

export default layout;
