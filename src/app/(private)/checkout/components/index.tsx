import React from "react";
import InfoOrderProduct from "./InfoOrderProduct";
import BillingDetailsProduct from "./BillingDetailsProduct";

const Checkout = () => {
  return (
    <div className="container py-[6.25rem] grid grid-cols-3 gap-4">
      <InfoOrderProduct />
      <BillingDetailsProduct />
    </div>
  );
};

export default Checkout;
