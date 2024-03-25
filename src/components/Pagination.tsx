import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>
      <div>
        {currentPage}/{totalPage}
      </div>
      <Button
        disabled={currentPage === totalPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
