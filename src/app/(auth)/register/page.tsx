"use client";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import AuthLogo from "@/components/AuthLogo";

const SignUpPage: React.FC = () => {
  return (
    <div className="py-24 px-5">
      <div className="container flex flex-col items-center px-8 border border-[#E9E9E9] justify-start rounded">
        <AuthLogo />
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUpPage;
