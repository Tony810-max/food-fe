import { API_URL, IComment } from '@/types/common';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const useCommentDetailBlog = () => {
  const [dataCommentDetailBlog, setDataCommentDetailBlog] =
    useState<IComment[]>();

  const params = useParams<{ id: string }>();
  const idBlog = params?.id;
  const searchParam = useSearchParams();
  const search = searchParam?.get('page');

  const fetchCommentDetailBlog = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/comment/by-post/{postId}?postId=${idBlog}&page=${search}&limit=4`,
      );

      if (response) {
        console.log(response);
        setDataCommentDetailBlog(response?.data?.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchCommentDetailBlog,
    dataCommentDetailBlog,
  };
};

export default useCommentDetailBlog;
