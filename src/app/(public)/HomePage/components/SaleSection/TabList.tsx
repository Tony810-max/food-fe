import React from "react";

interface valueTabList {
  name: string;
  value: number;
}

const TabList: React.FC<valueTabList> = ({ name, value }) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center bg-[#f7f7f8] border-2 py-5 rounded-[0.5rem] cursor-pointer hover:text-[#f53e32] hover:opacity-70">
      <span className="font-medium leading-normal text-base">{name}</span>
      <span className="text-[#7a7a7a]">{value} items</span>
    </div>
  );
};

export default TabList;
