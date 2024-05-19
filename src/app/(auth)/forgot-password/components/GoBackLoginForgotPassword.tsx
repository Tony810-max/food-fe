import React from "react";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const GoBackLoginForgotPassword = () => {
  return (
    <Link href="/login" className="">
      <ChevronLeft size={48} color="#F53E32" className="py-1 px-2" />
    </Link>
  );
};

export default GoBackLoginForgotPassword;
