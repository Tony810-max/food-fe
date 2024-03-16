import React from "react";
import InforCompanyFooter from "./components/ContactFooter";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F8] mt-24 pt-24">
      <div className="container grid grid-cols-3">
        <InforCompanyFooter />
      </div>
    </div>
  );
};

export default Footer;
