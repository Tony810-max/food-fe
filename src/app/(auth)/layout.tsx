/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import HeaderAuth from "../../components/layouts/Auth/HeaderAuth";
import { useRouter } from "next/navigation";
import ROUTES from "@/types/routes";
import useAuth from "@/hooks/useAuth";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push(ROUTES.HOME);
    }
  }, [router, user]);

  return (
    <>
      <HeaderAuth />
      {children}
    </>
  );
};

export default layout;
