"use client";


import React from "react";
import FormChangePassword from "./components/FormChangePassword";
import HeaderChangePassword from "./components/HeaderChangePassword";

const ChangePassword = () => {
  return (
    <div className="container py-5 flex justify-center">
      <div className="border min-w-[26.25rem]">
        <HeaderChangePassword />
        <div className="px-10 py-3 space-y-6 w-full">
          <span className="block font-sans text-2xl font-semibold text-center leading-normal">Reset password</span>
          <FormChangePassword />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
