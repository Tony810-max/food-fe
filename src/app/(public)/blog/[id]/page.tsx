'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CarouselDetailblog from './components/CarouselDetailblog';
import ContentDetailBlog from './components/ContentDetailBlog';
import CommentDetailBlog from './components/CommentDetailBlog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import PaginationDetailBlog from './components/PaginationDetailBlog';
import useDetailBlog from '../hooks/useDetailBlog';
import { commentSchema } from './types/const';

const DetaiBlogPage = () => {
  const { dataDetailBlog, dataCommentDetailBlog, handleComment } =
    useDetailBlog();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(commentSchema),
  });

  const isLogined = React.useMemo(() => {
    if (!localStorage) return false;

    const user = localStorage?.getItem('user');

    if (user) return true;

    return false;
  }, []);

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
              />
            ))}
          </div>
          <PaginationDetailBlog />
        </div>
        {isLogined && (
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
        )}
      </div>
    </div>
  );
};

export default DetaiBlogPage;
