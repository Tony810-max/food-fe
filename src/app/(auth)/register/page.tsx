"use client";
import Image from "next/image";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import AuthLogo from "@/components/AuthLogo";

const SignUpPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container w-fit flex flex-col items-center px-8 border border-[#E9E9E9] justify-start rounded">
        <AuthLogo />
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUpPage;
