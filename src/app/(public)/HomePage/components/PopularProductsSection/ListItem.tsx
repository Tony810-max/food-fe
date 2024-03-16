import { ArrowRight } from "lucide-react";
import React from "react";

interface ListProps {
  name: string;
}

const ListItem: React.FC<ListProps> = ({ name }) => {
  return (
    <div className="flex justify-between items-center  bg-[#f7f7f8] rounded-lg px-4 py-3">
      <span className="font-bold text-lg capitalize ">{name}</span>
      <ArrowRight />
    </div>
  );
};

export default ListItem;
