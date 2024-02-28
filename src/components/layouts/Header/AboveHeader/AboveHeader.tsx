import { AlignLeft, Phone } from "lucide-react";
import React from "react";
import MenubarHeader from "./components/MenubarAboveHeader";

const AboveHeader = () => {
  return (
    <div className="flex justify-center  shadow-md">
      <div className="container ">
        <div className="flex py-[0.65rem] items-center justify-between">
          <AlignLeft />
          <MenubarHeader />
          <div className="flex items-center gap-[0.08rem]">
            <Phone size={20} />
            <span>+123 (456) (7890)</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboveHeader;
