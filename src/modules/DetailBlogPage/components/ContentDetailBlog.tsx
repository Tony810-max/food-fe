import { Roboto } from 'next/font/google';
import React from 'react';

const cormorant = Roboto({ weight: '500', subsets: ['cyrillic-ext'] });

interface contentDetailBlogProps {
  title: string | undefined;
  description: string | undefined;
}

const ContentDetailBlog: React.FC<contentDetailBlogProps> = ({
  description,
  title,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={`text-lg uppercase font-bold text-center w-full ${cormorant.className}`}
      >
        {title}
      </p>
      <p className="font-sans h-96 border min-w-[40rem] max-w-[50rem] overflow-y-auto rounded-lg px-4 py-2 text-justify shadow-md">
        {description}
      </p>
    </div>
  );
};

export default ContentDetailBlog;
