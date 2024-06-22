'use client';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { metaComment } from '@/types/common';

interface paginationProps {
  metaComment: metaComment | undefined;
}

const PaginationDetailBlog: React.FC<paginationProps> = ({ metaComment }) => {
  const param = useParams<{ id: string }>()?.id;
  const searchParam = useSearchParams();
  const searchPage = searchParam.get('page');
  const currentPage = parseInt(searchParam.get('page') || '1', 10);
  const totalPages = metaComment && metaComment?.totalPages;
  const previous =
  currentPage && currentPage <= 1 ? 1 : currentPage && currentPage - 1;
  
    const next =
    totalPages && currentPage && currentPage >= totalPages
      ? totalPages
      : currentPage + 1;

    const startPage = currentPage && Math.max(currentPage - 2, 1);
    const endPage = startPage && totalPages && Math.min(startPage + 4, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Link
            href={`/blog/${param}?page=${previous}`}
            className="px-4 hover:opacity-70"
            scroll={false}
          >
            Previous
          </Link>
        </PaginationItem>
        { startPage && startPage > 1 && (
          <>
            <PaginationItem>
              <Link
                href={`/blog/${param}?page=1`}
                className="px-4 hover:opacity-70"
                scroll={false}
              >
                1
              </Link>
            </PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
          </>
        )}
        { endPage &&
          Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <PaginationItem key={index}>
              <Link
                href={`/blog/${param}?page=${startPage + index}`}
                className={cn('px-4 hover:opacity-70', {
                  'text-[#F53E32] shadow-md py-2 border rounded-lg':
                  startPage + index === Number(searchPage),
                })}
                scroll={false}
              >
                {startPage + index}
              </Link>
            </PaginationItem>
          ))}
        {endPage && endPage < totalPages && (
          <>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem>
              <Link
                href={`/blog/${param}?page=${totalPages}`}
                className="px-4 hover:opacity-70"
                scroll={false}
              >
                {totalPages}
              </Link>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <Link
            href={`/blog/${param}?page=${next}`}
            className="px-4 hover:opacity-70"
            scroll={false}
          >
            Next
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDetailBlog;
