import React from 'react';
import CountdownTimer from './CountdownTimer';

const TimerBoxGreatDeal = () => {
  return (
    <div className="p-2 sm:p-6 relative z-10 shadow-md w-fit translate-y-1/2">
      <div>
        <span className="text-xl font-sans text-[#F53E32] font-bold leading-normal">
          35%
        </span>
        <span className="font-sans text-base font-semibold leading-normal px-1">
          Off
        </span>
      </div>
      <div className="flex flex-col max-w-64 md:max-w-[27.5rem] py-5 gap-4">
        <span className="text-lg font-sans font-bold">
          Great deal on organic food.
        </span>
        <span className="font-sans text-[#7A7A7A] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          maecenas accumsan lacus vel facilisis.
        </span>
      </div>
      <CountdownTimer />
    </div>
  );
};

export default TimerBoxGreatDeal;
