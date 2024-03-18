import { ArrowRight } from "lucide-react";
import React from "react";

interface ListProps {
  id: number | null;
  name: string;
  onClick?: (value: number | string) => void;
}

const ListItem: React.FC<ListProps> = ({ id, name, onClick }) => {
  const handleSetFilterByCategoryId = () => {
    if (onClick && id) {
      onClick(id);
    }

    if (onClick && !id) {
      onClick("");
    }
  };

  return (
    <button
      onClick={handleSetFilterByCategoryId}
      className="flex justify-between items-center  bg-[#f7f7f8] rounded-lg px-4 py-3  hover:opacity-70 hover:text-[#F53E32]"
    >
      <span className="font-bold text-lg capitalize ">{name}</span>
      <ArrowRight />
    </button>
  );
};

export default ListItem;
