"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export default function CountdownTimerV2({
  targetDate,
  className = "",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex items-center space-x-2 md:space-x-4 ${className}`}>
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-transparent px-4 py-3">
          <span className="text-xxl md:text-xxl text-white">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-tiny mt-1 font-medium text-white uppercase">
          DAYS
        </span>
      </div>

      {/* Separator */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 items-center">
          <span className="text-xl text-white">:</span>
        </div>
        <div className="h-4"></div>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-transparent px-4 py-3">
          <span className="text-xxl md:text-xxl text-white">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-tiny mt-1 font-medium text-white uppercase">
          HOURS
        </span>
      </div>

      {/* Separator */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 items-center">
          <span className="text-xl text-white">:</span>
        </div>
        <div className="h-4"></div>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-transparent px-4 py-3">
          <span className="text-xxl md:text-xxl text-white">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-tiny mt-1 font-medium text-white uppercase">
          MINS
        </span>
      </div>

      {/* Separator */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 items-center">
          <span className="text-xl text-white">:</span>
        </div>
        <div className="h-4"></div>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-transparent px-4 py-3">
          <span className="text-xxl md:text-xxl text-white">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-tiny mt-1 font-medium text-white uppercase">
          SECS
        </span>
      </div>
    </div>
  );
}
