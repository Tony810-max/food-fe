import React from "react";

interface HeadingProps {
  title: string;
  des: string;
}

const HeadingHomePage: React.FC<HeadingProps> = ({ des, title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-4xl font-bold font-sans leading-normal">
        {title}
      </span>
      <span className="text-lg max-w-[43rem] text-center leading-normal">
        {des}
      </span>
    </div>
  );
};

export default HeadingHomePage;
