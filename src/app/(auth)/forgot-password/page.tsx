import React from "react";

import GoBackLoginForgotPassword from "./components/GoBackLoginForgotPassword";
import ContentForgotPassword from "./components/ContentForgotPassword";

const ForgotPassword = () => {
  return (
    <div className="container py-24 flex flex-col items-center ">
      <div className="border shadow-lg">
        <GoBackLoginForgotPassword />
        <ContentForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;
