"use client";

import Link from "next/link";
import React from "react";

import AboveHeader from "./AboveHeader/AboveHeader";
import BelowHeader from "./BelowHeader/BelowHeader";

const HeaderMain = () => {
  return (
    <div>
      <AboveHeader />
      <BelowHeader />
    </div>
  );
};

export default HeaderMain;
