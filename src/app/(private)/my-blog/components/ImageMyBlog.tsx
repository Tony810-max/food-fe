import Image from 'next/image';
import React from 'react';

interface IImageMyBlog {
  img: string;
}

const ImageMyBlog: React.FC<IImageMyBlog> = ({ img }) => {
  return (
    <div className="relative sm:w-3/5 w-full h-72 ">
      <Image
        src={img}
        alt="imgBlogMy"
        className="rounded-md"
        fill
        priority
        unoptimized
      />
    </div>
  );
};

export default ImageMyBlog;
