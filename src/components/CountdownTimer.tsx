"use client";
import React, { useState, useEffect } from "react";

interface ITime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<ITime | undefined>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateTimeLeft() {
    const dateEnd = new Date(2024, 12, 31);
    const dateStart = new Date();
    const difference = dateEnd.getTime() - dateStart.getTime();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
  }

  return (
    <div>
      <div>{timeLeft?.days} Days</div>
      <div>{timeLeft?.hours} Hours</div>
      <div>{timeLeft?.minutes} Minutes</div>
      <div>{timeLeft?.seconds} Seconds</div>
    </div>
  );
};

export default CountdownTimer;
