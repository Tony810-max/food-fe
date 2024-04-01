import React from "react";
import ContactFooter from "./components/ContactFooter/ContactFooter";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F8] p-24">
      <div className="container grid grid-cols-4">
        <ContactFooter />
      </div>
    </div>
  );
};

export default Footer;
