import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import CheckBoxBillingProduct from "../../../../../components/Checkbox";
import InforCustomerBillingProduct from "./InforCustomerBillingProduct";

const BillingDetailsProduct = () => {
  return (
    <form className="col-span-2 space-y-[1.875rem]">
      <div className=" border border-[#e9e9e9] p-6 rounded-[0.313rem]">
        <span className="text-xl leading-tight font-sans font-semibold">
          Billing Details
        </span>
        <div className="py-6">
          <span className="text-base leading-none text-[#2b2b2d] font-sans">
            Checkout Options
          </span>
          <div className="flex gap-[3.074rem] py-3">
            <CheckBoxBillingProduct
              id={"existingAddress"}
              title={"I want to use an existing address"}
            />
            <CheckBoxBillingProduct
              id={"newAddress"}
              title={"I want to use a new address"}
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-[1.875rem] pt-[1.938rem]">
            <InforCustomerBillingProduct title={"Full Name"} />
            <InforCustomerBillingProduct title={"Address"} />
            <div>
              <label>Post Code</label>
              <Input />
            </div>
            <div>
              <label>Last Name*</label>
              <Input />
            </div>
            <div>
              <label>Last Name*</label>
              <Input />
            </div>
            <div>
              <label>Last Name*</label>
              <Input />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant={"destructive"}>Place Order</Button>
      </div>
    </form>
  );
};

export default BillingDetailsProduct;
