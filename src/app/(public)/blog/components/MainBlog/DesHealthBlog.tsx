import React from "react";
import Image from "next/image";

interface DesHealProps {
  image: string;
  des: string;
}

const DesHealthBlog: React.FC<DesHealProps> = ({ des, image }) => {
  return (
    <div className="space-y-[1.125rem]">
      <div className="relative w-full h-[14.125rem] rounded-[0.313rem]">
        <Image
          src={image}
          alt="img1Blog"
          unoptimized
          priority
          fill
          sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex gap-[0.658rem]">
        <div className="relative w-[1.563rem] h-[1.75rem]">
          <Image
            src="/images/iconBlog.webp"
            alt="iconBlog"
            fill
            sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="max-w-[25.493rem] font-sans text-base leading-relaxed text-[#2b2b2d] font-bold">
          {des}
        </span>
      </div>
    </div>
  );
};

export default DesHealthBlog;
