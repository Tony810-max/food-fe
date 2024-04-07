import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  totalProduct: number;
  limit: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  setCurrentPage,
  totalProduct,
  limit,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 ">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>
      <div>{totalProduct < limit ? currentPage : `${ currentPage } / ${ totalPage }`} </div>
      <Button
        disabled={totalProduct < limit || currentPage === totalPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
