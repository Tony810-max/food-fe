"use client";

import React from "react";

import AboveHeader from "./AboveHeader/AboveHeader";
import dynamic from "next/dynamic";

const BelowHeader = dynamic(() => import("./BelowHeader/BelowHeader"), {
  ssr: false,
});

const HeaderMain = () => {
  return (
    <div>
      <AboveHeader />
      <BelowHeader />
    </div>
  );
};

export default HeaderMain;
