"use client"
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
  } from "@/components/ui/pagination"
import Link from 'next/link'
import { useParams,    useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import usePagination from '../../hooks/usePagination'
import useBlog from '../../hooks/useBlog'

const PaginationDetailBlog = () => {
    const {metaComment, } = usePagination()
    const {valueComment} =useBlog()
    console.log("valueComment" ,valueComment) 
    const param = useParams<{id: string}>()?.id
    const searchParam = useSearchParams()
    const searchPage = searchParam.get('page')
    // const limit = metaComment && metaComment?.limit;
    const totalPages = metaComment && metaComment?.totalPages
    const previous = totalPages && totalPages <= 1 ? 1 : totalPages && totalPages - 1
    const next = totalPages && Number(searchPage) >=  totalPages  ? Number(searchPage)  : Number(searchPage) + 1
    console.log("totalPages 0" ,totalPages) 

    return (
      <Pagination>
        <PaginationContent >
              <PaginationItem>
                    <Link href={`/blog/${param}?page=${previous}`} className='px-4 hover:opacity-70' scroll={false}>Previous</Link>
                  </PaginationItem>
                  {totalPages && Array.from({ length: totalPages }, (_, index) => (
                      <PaginationItem key={index}>
                        <Link href={`/blog/${param}?page=${index + 1}`} 
                        className={cn('px-4 hover:opacity-70',{
                          'text-[#F53E32] shadow-md py-2 border rounded-lg': index + 1 === Number(searchPage),
                        })} scroll={false}>
                          {index + 1}
                        </Link>
                      </PaginationItem>
                    ))}
                    {totalPages && totalPages > 2 &&(
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                    )}
                  <PaginationItem>
                    <Link href={`/blog/${param}?page=${next}`} className='px-4 hover:opacity-70' scroll={false}>Next</Link>
                  </PaginationItem>
        </PaginationContent>
    </Pagination>

  )
}

export default PaginationDetailBlog