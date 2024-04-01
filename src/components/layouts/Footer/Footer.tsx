import React from "react";
import ContactFooter from "./components/ContactFooter/ContactFooter";
import CompanyFooter from "./components/CompanyFooter";
import CategoryFooter from "./components/CategoryFooter";
import SubscribeFooter from "./components/SubscribeFooter";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F8] p-24">
      <div className="container grid grid-cols-4">
        <ContactFooter />
        <CompanyFooter />
        <CategoryFooter />
        <SubscribeFooter />
      </div>
    </div>
  );
};

export default Footer;
