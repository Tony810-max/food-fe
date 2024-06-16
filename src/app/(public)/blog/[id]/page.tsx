"use client"
import React, { createContext, useEffect } from 'react'
import { useParams } from 'next/navigation'

import useBlog from '../hooks/useBlog'

import CarouselDetailblog from './components/CarouselDetailblog'
import ContentDetailBlog from './components/ContentDetailBlog'
import CommentDetailBlog from './components/CommentDetailBlog'

const DetaiBlogPage = () => {
  const id = useParams<{id: string}>()?.id
  const {dataDetailBlog, dataCommentDetailBlog } =useBlog(id)

  return (
      <div className='container py-20 space-y-4'> 
        <div className='flex gap-5'>
            <CarouselDetailblog img={dataDetailBlog?.images} />
            <ContentDetailBlog description={dataDetailBlog?.description} title={dataDetailBlog?.title} />
        </div>
        <div>
        {dataCommentDetailBlog?.map(item => (
        <CommentDetailBlog key={item?.id} id={item?.id} idUser={item?.author?.id} comment={item?.content} name={`${item?.author?.firstName} ${item?.author?.lastName}`} dataUpdate={item?.createdAt} />
        ))}
        </div>
      </div>

  )
}

export default DetaiBlogPage