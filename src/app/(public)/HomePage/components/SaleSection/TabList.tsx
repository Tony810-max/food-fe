import React from "react";

interface valueTabList {
  id: number;
  name: string;
  value: number;
  onSetIdCategory: (value: number) => void;
}

const TabList: React.FC<valueTabList> = ({
  name,
  value,
  id,
  onSetIdCategory,
}) => {
  return (
    <div
      className="flex flex-col gap-1 justify-center items-center bg-[#f7f7f8] border-2 py-5 rounded-[0.5rem] cursor-pointer hover:text-[#f53e32] hover:opacity-70"
      onClick={() => {
        onSetIdCategory(id);
      }}
    >
      <span className="font-medium leading-normal text-base">{name}</span>
      <span className="text-[#7a7a7a]">{value} items</span>
    </div>
  );
};

export default TabList;
