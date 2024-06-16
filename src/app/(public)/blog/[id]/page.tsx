"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Pencil, Trash2 } from 'lucide-react'

import useBlog from '../hooks/useBlog'

import CarouselDetailblog from './components/CarouselDetailblog'
import ContentDetailBlog from './components/ContentDetailBlog'

const DetaiBlogPage = () => {
  const id = useParams<{id: string}>()?.id
  const {dataDetailBlog} =useBlog(id)

    return (
    <div className='container py-20 space-y-4'> 
      <div className='flex gap-5'>
          <CarouselDetailblog img={dataDetailBlog?.images} />
          <ContentDetailBlog description={dataDetailBlog?.description} title={dataDetailBlog?.title} />
      </div>
      <div>
        <div className='border rounded-lg py-4 px-4 space-y-2'>
          <div className='flex justify-between items-center'>
          <span className='font-sans text-lg font-bold capitalize'>name</span>
          <div className='flex gap-2'>
            <Pencil className='cursor-pointer hover:opacity-70'/>
            <Trash2 color='#f53e32' className='cursor-pointer hover:opacity-70' />
          </div>
          </div>
          <span className='block font-sans text-base'>comment</span>
        </div>
        </div>
    </div>
  )
}

export default DetaiBlogPage