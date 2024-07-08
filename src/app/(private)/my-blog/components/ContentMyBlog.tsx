import { Badge } from '@/components/ui/badge';
import React from 'react';

interface IContentMyBlog {
  title: string;
  description: string;
  status: boolean;
}

const ContentMyBlog: React.FC<IContentMyBlog> = ({
  description,
  status,
  title,
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-end">
        {status ? (
          <Badge
            variant={'destructive'}
            className="bg-green-500 font-sans text-xs py-1 px-3 capitalize font-semibold"
          >
            ratify
          </Badge>
        ) : (
          <Badge
            variant={'destructive'}
            className="font-sans text-xs py-1 px-3 capitalize font-semibold"
          >
            Awaiting approval
          </Badge>
        )}
      </div>
      <span className="flex justify-center font-sans text-xl font-bold capitalize">
        {title}
      </span>
      <p className="font-sans text-base min-h-52 max-h-60 overflow-auto text-justify border py-2 px-2 rounded-xl">
        {description}
      </p>
    </div>
  );
};

export default ContentMyBlog;
