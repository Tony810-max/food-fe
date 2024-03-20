import React from "react";
import ContactFooter from "./components/ContactFooter";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F8] mt-24 p-24">
      <div className="container grid grid-cols-3">
        <ContactFooter />
      </div>
    </div>
  );
};

export default Footer;
