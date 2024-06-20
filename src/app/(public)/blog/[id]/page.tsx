"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useBlog from '../hooks/useBlog'

import CarouselDetailblog from './components/CarouselDetailblog'
import ContentDetailBlog from './components/ContentDetailBlog'
import CommentDetailBlog from './components/CommentDetailBlog'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import PaginationDetailBlog from './components/PaginationDetailBlog';

const schema = yup
  .object()
  .shape({
    comment: yup.string().required(),
  })
  .required();

const DetaiBlogPage = () => {
  const [checkUser,setCheckUser] = useState(false)
  const {dataDetailBlog, dataCommentDetailBlog, handleComment } =useBlog()
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });  

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user) {
      setCheckUser(true)
    } 
    else{
      localStorage?.setItem('preHref',window.location.href)
    }
    return () => {
      setCheckUser(false)
    }
  },[])

  return (
      <div className='container py-20 space-y-4'> 
        <div className='flex gap-5'>
            <CarouselDetailblog img={dataDetailBlog?.images} />
            <ContentDetailBlog description={dataDetailBlog?.description} title={dataDetailBlog?.title} />
        </div>
        <div className='space-y-5'>
        <div className='space-y-3'>
          <p className='font-sans text-xl font-bold py-2 px-5 uppercase'>Comment</p>
          <div className='space-y-3 min-h-[32rem]'>
            {dataCommentDetailBlog?.map(item => (
              <CommentDetailBlog key={item?.id} id={item?.id} idUser={item?.author?.id} comment={item?.content} name={`${item?.author?.firstName} ${item?.author?.lastName}`} dataUpdate={item?.createdAt} />
            ))}
          </div>
      <PaginationDetailBlog />
      </div>
       {checkUser &&
        <form className='space-y-4 border rounded-lg border-black shadow-md px-4 py-4' onSubmit={handleSubmit(handleComment)} >
          <Textarea placeholder="Type your comment here..." {...register('comment')} className='border font-sans text-lg border-black ' />
          <div className='flex justify-end py-2'>
          <Button type='submit' variant={"destructive"}>Comment</Button>
          </div>
        </form>
         }
        </div>
      </div>

  )
}

export default DetaiBlogPage