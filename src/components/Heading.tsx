import React from 'react';

interface HeadingProps {
  title: string;
  des: string;
}

const Heading: React.FC<HeadingProps> = ({ des, title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xl sm:text-4xl text-center font-bold font-sans leading-normal">
        {title}
      </span>
      <span className="text-sm sm:text-lg max-w-[43rem] text-center leading-normal">
        {des}
      </span>
    </div>
  );
};

export default Heading;
