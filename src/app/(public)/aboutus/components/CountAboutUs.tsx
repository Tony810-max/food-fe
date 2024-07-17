import React from 'react';

interface CountProps {
  value: number;
  title: string;
}

const CountAboutUs: React.FC<CountProps> = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <span className="font-sans text-4xl sm:text-6xl text-[#f53e32] font-bold leading-none">
          {value}
        </span>
        <span className="font-sans text-[#7a7a7a] text-xl lg:text-3xl leading-none font-bold">
          k
        </span>
      </div>
      <span className="font-sans text-sm lg:text-base text-[#212529] font-semibold leading-none">
        {title}
      </span>
    </div>
  );
};

export default CountAboutUs;
