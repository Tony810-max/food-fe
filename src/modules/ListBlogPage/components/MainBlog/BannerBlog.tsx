import React from 'react';

import Image from 'next/image';

const BannerBlog = () => {
  return (
    <div className="relative w-full h-[29rem]">
      <Image
        src={
          'https://gcs.tripi.vn/public-tripi/tripi-feed/img/473773qDY/dia-chi-ban-hamburger-ngon-nhat-tai-da-nang-763682.jpg'
        }
        alt="blog"
        fill
        priority
        unoptimized
      />
    </div>
  );
};

export default BannerBlog;
