import React from "react";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchSideRight = () => {
  return (
    <div className="flex items-center py-6 w-full max-w-md bg-white dark:bg-gray-800 rounded-l-lg overflow-hidden">
      <Input className="flex-1 bg-white rounded-none" placeholder="Search" />
      <div className="px-3 py-2 bg-[#F53E32] dark:bg-gray-700 rounded-r-lg">
        <Search color="#ffff" className="text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
};

export default SearchSideRight;
