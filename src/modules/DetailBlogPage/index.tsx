'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CarouselDetailblog from './components/CarouselDetailblog';
import ContentDetailBlog from './components/ContentDetailBlog';
import CommentDetailBlog from './components/CommentDetailBlog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import PaginationDetailBlog from './components/PaginationDetailBlog';
import { commentSchema, dataCommentProps } from './types/const';
import axios from 'axios';
import { API_URL } from '@/types/common';
import { toast } from 'react-toastify';
import useDetailBlog from './hooks/useDetailBlog';
import useCommentDetailBlog from './hooks/useCommentDetailBlog';
import { useRouter } from 'next/navigation';

const DetaiBlogPage = () => {
  const { fetchDetailBlog, dataDetailBlog } = useDetailBlog();
  const {
    fetchCommentDetailBlog,
    dataCommentDetailBlog,
    metaComment,
    idBlog,
    search,
  } = useCommentDetailBlog();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(commentSchema),
  });
  const router = useRouter();

  const handleComment = async (data: dataCommentProps) => {
    try {
      const accessToken = await JSON.parse(
        localStorage.getItem('accessToken')!,
      );
      const response = await axios.post(
        `${API_URL}/api/v1/comment/comment/${idBlog}`,
        {
          content: data?.comment,
          postId: Number(idBlog),
        },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        toast.success('Commented');
        fetchCommentDetailBlog();
        reset();
        router.push('/blog/1?page=1&limit=4', { scroll: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (idBlog) {
      fetchDetailBlog(idBlog);
      fetchCommentDetailBlog();
    }
  }, [idBlog]);

  useEffect(() => {
    fetchCommentDetailBlog();
  }, [search]);

  return (
    <div className="container py-20 space-y-4">
      <div className="flex gap-5">
        <CarouselDetailblog img={dataDetailBlog?.images} />
        <ContentDetailBlog
          description={dataDetailBlog?.description}
          title={dataDetailBlog?.title}
        />
      </div>
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="font-sans text-xl font-bold py-2 px-5 uppercase">
            Comment
          </p>
          <div className="space-y-3 min-h-[32rem]">
            {dataCommentDetailBlog?.map((item) => (
              <CommentDetailBlog
                key={item?.id}
                id={item?.id}
                idUser={item?.author?.id}
                comment={item?.content}
                name={`${item?.author?.firstName} ${item?.author?.lastName}`}
                dataUpdate={item?.createdAt}
                fetchCommentDetailBlog={fetchCommentDetailBlog}
              />
            ))}
          </div>
          <PaginationDetailBlog metaComment={metaComment} />
        </div>
        {/* {isLogined && ( */}
        <form
          className="space-y-4 border rounded-lg border-black shadow-md px-4 py-4"
          onSubmit={handleSubmit(handleComment)}
        >
          <Textarea
            placeholder="Type your comment here..."
            {...register('comment')}
            className="border font-sans text-lg border-black "
          />
          <div className="flex justify-end py-2">
            <Button type="submit" variant={'destructive'}>
              Comment
            </Button>
          </div>
        </form>
        {/* )} */}
      </div>
    </div>
  );
};

export default DetaiBlogPage;
