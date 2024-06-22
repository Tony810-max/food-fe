import { API_URL, metaComment } from '@/types/common';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const usePagination = () => {
  const [metaComment, setMetaComment] = useState<metaComment>();
  const idBlog = useParams<{ id: string }>()?.id;
  const searchParam = useSearchParams();
  const search = searchParam?.get('page');

  const fetchMetaComment = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/comment/by-post/{idBlog}?postId=${idBlog}&page=${search}&limit=4`,
      );
      if (response) {
        setMetaComment(response?.data?.meta);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchMetaComment,
    metaComment,
  };
};

export default usePagination;
