import Image from 'next/image';
import React from 'react';

interface ImgLastestProps {
  image: string;
}

const ImageLatestSideRight: React.FC<ImgLastestProps> = ({ image }) => {
  return (
    <div className="relative w-full aspect-square">
      <Image
        src={image}
        alt="imgLatest1"
        sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
        fill
      />
    </div>
  );
};

export default ImageLatestSideRight;
