import { API_URL, metaComment } from '@/types/common';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const usePagination = () => {
  const [metaComment, setMetaComment] = useState<metaComment>();
  const [totalItems, setTotalItems] = useState<number>();
  const idBlog = useParams<{ id: string }>()?.id;
  const searchParam = useSearchParams();
  const search = searchParam?.get('page');

  const fetchMetaComment = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/comment/by-post/${idBlog}?postId=${idBlog}&page=${search}&limit=4`,
      );
      if (response) {
        console.log(response?.data?.meta);
        setMetaComment(response?.data?.meta);
        setTotalItems(response?.data?.meta?.totalItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMetaComment();
  }, []);

  return {
    fetchMetaComment,
    metaComment,
    totalItems,
  };
};

export default usePagination;
