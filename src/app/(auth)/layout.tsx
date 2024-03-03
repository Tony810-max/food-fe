import React from "react";
import HeaderAuth from "../../components/layouts/Auth/HeaderAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <HeaderAuth />
      {children}
    </>
  );
};

export default layout;
