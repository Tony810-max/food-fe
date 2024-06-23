'use client';
import React, { createContext } from 'react';

import { useUser } from '@/hooks/useUser';
import { format } from 'date-fns';

import UpdateDetailBlog from './UpdateDetailBlog';
import DeleteDetailBlog from './DeleteDetailBlog';

interface commentProps {
  name: string;
  comment: string;
  dataUpdate: string;
  idUser: number;
  id: number;
  fetchCommentDetailBlog: () => void;
}
export const commentContext = createContext('');

const CommentDetailBlog: React.FC<commentProps> = ({
  id,
  idUser,
  comment,
  name,
  dataUpdate,
  fetchCommentDetailBlog,
}) => {
  const { dataProfile } = useUser();
  return (
    <commentContext.Provider value={comment}>
      <div className="border rounded-lg py-4 px-4 space-y-2 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-lg font-bold capitalize">
              {name}
            </span>
            <span className="font-sans text-sm italic">
              {format(new Date(dataUpdate), 'dd-MM-yyyy hh:mm:ss')}
            </span>
          </div>
          {idUser === dataProfile?.id && (
            <div className="flex gap-2">
                <UpdateDetailBlog
                  id={id}
                  fetchCommentDetailBlog={fetchCommentDetailBlog}
                />
                <DeleteDetailBlog
                  id={id}
                  fetchCommentDetailBlog={fetchCommentDetailBlog}
                />
            </div>
          )}
        </div>
        <span className="block font-sans text-base leading-normal">
          {comment}
        </span>
      </div>
    </commentContext.Provider>
  );
};

export default CommentDetailBlog;
