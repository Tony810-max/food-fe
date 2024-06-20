'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface ITime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = useCallback(() => {
    const dateEnd = new Date(2024, 12, 31);
    const dateStart = new Date();
    const difference = dateEnd.getTime() - dateStart.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState<ITime | undefined>(
    calculateTimeLeft(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeLeft]);

  return (
    <div className="flex gap-3 items-center border-2 border-[#E9CBBE] rounded-lg px-6 py-3 w-fit">
      <div className="flex flex-col">
        <span className="text-center text-xl font-bold font-sans">
          {timeLeft?.days}{' '}
        </span>
        <span className="font-sans text-[#7A7A7A]">Days</span>
      </div>
      <span className="text-[#7A7A7A] text-2xl">:</span>
      <div className="flex flex-col">
        <span className="text-center text-xl font-bold font-sans">
          {timeLeft?.hours}
        </span>
        <span className="font-sans text-[#7A7A7A]"> Hours</span>
      </div>
      <span className="text-[#7A7A7A] text-2xl">:</span>
      <div className="flex flex-col">
        <span className="text-center text-xl font-bold font-sans">
          {timeLeft?.minutes}
        </span>
        <span className="font-sans text-[#7A7A7A]"> Minutes</span>
      </div>
      <span className="text-[#7A7A7A] text-2xl">:</span>
      <div className="flex flex-col">
        <span className="text-center text-xl font-bold font-sans">
          {timeLeft?.seconds}
        </span>
        <span className="font-sans text-[#7A7A7A]"> Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
