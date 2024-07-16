import { API_URL, IComment, IMeta } from '@/types/common';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const useCommentDetailBlog = () => {
  const params = useParams<{ id: string }>();
  const idBlog = params?.id;
  const searchParam = useSearchParams();
  const search = searchParam?.get('page');
  const [dataCommentDetailBlog, setDataCommentDetailBlog] =
    useState<IComment[]>();
  const [metaComment, setMetaComment] = useState<IMeta>();

  const fetchCommentDetailBlog = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/comment/by-post/{postId}?postId=${idBlog}&page=${search}&limit=4`,
      );

      if (response) {
        setDataCommentDetailBlog(response?.data?.comments);
        setMetaComment(response?.data?.meta);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchCommentDetailBlog,
    dataCommentDetailBlog,
    metaComment,
    search,
    idBlog,
  };
};

export default useCommentDetailBlog;
