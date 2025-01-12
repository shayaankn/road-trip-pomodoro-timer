// using timestamp method instead of setInterval

import React, { useState, useEffect } from 'react';
import Time from './Time';
import Main from './Main';
import Button from './Button';

const Parent = () => {
  const [time, setTime] = useState(15 * 60); // Current timer value (in seconds)
  const [adjustedTime, setAdjustedTime] = useState(15 * 60); // User-adjusted time (in seconds)
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null); // Record start time

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        const remainingTime = adjustedTime - elapsed;

        if (remainingTime <= 0) {
          setIsRunning(false);
          clearInterval(intervalId);
          setTime(adjustedTime);
        } else {
          setTime(remainingTime);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, startTime, adjustedTime]);

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setTime(adjustedTime);
    } else {
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };

  const adjustTime = (amount) => {
    const newTime = adjustedTime + amount;
    if (newTime >= 5 * 60 && newTime <= 45 * 60) {
      setAdjustedTime(newTime);
      if (!isRunning) {
        setTime(newTime);
      }
    }
  };

  return (
    <div className="parent">
      <Time time={time} isRunning={isRunning} adjustTime={adjustTime} />
      <Main isRunning={isRunning} />
      <Button toggleTimer={toggleTimer} isRunning={isRunning} />
    </div>
  );
};

export default Parent;
