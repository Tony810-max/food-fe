import React from 'react';
import { BetweenVerticalStart, Table } from 'lucide-react';

interface filterProps {
  count: number;
}

const HeadingFilterShop: React.FC<filterProps> = ({ count }) => {
  return (
    <div className="flex justify-between items-center bg-[#f7f7f8]  rounded-lg p-[0.375rem]">
      <div className="flex items-center gap-[1.063rem]">
        <div className="flex items-center gap-[0.313rem]">
          <Table size={32} className="border rounded-[0.313rem] p-[0.469rem]" />
          <BetweenVerticalStart
            size={32}
            className="border rounded-[0.313rem] p-[0.469rem]"
          />
        </div>
        <span className="font-sans text-base italic font-bold">
          We found {count} items for you!
        </span>
      </div>
    </div>
  );
};

export default HeadingFilterShop;
