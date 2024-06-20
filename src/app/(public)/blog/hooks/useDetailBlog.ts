import { API_URL, IBlog, IComment } from '@/types/common';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface dataCommentProps {
  comment: string;
}
interface formUpdateProps extends dataCommentProps {}

const useDetailBlog = () => {
  const [dataDetailBlog, setDataDetailBlog] = useState<IBlog>();
  const [valueComment, setValueComment] = useState(0);
  const [dataCommentDetailBlog, setDataCommentDetailBlog] =
    useState<IComment[]>();

  const searchParam = useSearchParams();
  const params = useParams<{ id: string }>();
  const idBlog = params?.id;
  const search = searchParam?.get('page');

  const handleDetailBlog = async (id: number | string) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post/${id}`);
      if (response) {
        setDataDetailBlog(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentDetailBlog = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/comment/by-post/{postId}?postId=${idBlog}&page=${search}&limit=4`,
      );

      if (response) {
        setDataCommentDetailBlog(response?.data?.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        setValueComment(valueComment + 1);
        toast.success('Commented');
        fetchCommentDetailBlog();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.delete(`${API_URL}/api/v1/comment/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response) {
        toast.success('Comment deleted...!!!');
        fetchCommentDetailBlog();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateComment = async (
    data: formUpdateProps,
    id: number,
    setOpen: (value: boolean) => void,
  ) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.patch(
        `${API_URL}/api/v1/comment/${id}`,
        {
          content: data?.comment,
          postId: id,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        setOpen(false);
        toast.success('Updated comment');
        fetchCommentDetailBlog();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idBlog) {
      handleDetailBlog(idBlog);
    }
  }, [idBlog]);

  useEffect(() => {
    fetchCommentDetailBlog();
  }, [search]);

  return {
    handleDetailBlog,
    fetchCommentDetailBlog,
    handleComment,
    handleDeleteComment,
    handleUpdateComment,
    dataDetailBlog,
    dataCommentDetailBlog,
    valueComment,
  };
};

export default useDetailBlog;
