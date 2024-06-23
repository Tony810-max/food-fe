import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { commentContext } from './CommentDetailBlog';

import { formUpdateProps } from '../types/const';
import { API_URL } from '@/types/common';
import axios from 'axios';
import { toast } from 'react-toastify';

interface formUpdate {
  id: number;
  onSetOpen: (value: boolean) => void;
  fetchCommentDetailBlog: () => void;
}

const schema = yup
  .object()
  .shape({
    comment: yup.string().required(),
  })
  .required();

const FormUpdateDetailBlog: React.FC<formUpdate> = ({
  id,
  onSetOpen,
  fetchCommentDetailBlog,
}) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const comment = useContext(commentContext);

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

  return (
    <form
      className="grid gap-4 py-4"
      onSubmit={handleSubmit((data) =>
        handleUpdateComment(data, id, onSetOpen),
      )}
    >
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Comment
        </Label>
        <Input
          id="name"
          placeholder={comment}
          className="col-span-3"
          {...register('comment')}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant={'destructive'}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default FormUpdateDetailBlog;
