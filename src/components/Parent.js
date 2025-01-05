// import React, { useState } from 'react';
// import Time from './Time';
// import Main from './Main';
// import Button from './Button';

// const Parent = () => {
//   const [time, setTime] = useState(15 * 60); // Current timer value (in seconds)
//   const [adjustedTime, setAdjustedTime] = useState(15 * 60); // User-adjusted time (in seconds)
//   const [isRunning, setIsRunning] = useState(false);
//   const [intervalId, setIntervalId] = useState(null);

//   const toggleTimer = () => {
//     if (isRunning) {
//       clearInterval(intervalId);
//       setTime(adjustedTime); // Reset to the user-adjusted time
//     } else {
//       const id = setInterval(() => {
//         setTime(prevTime => {
//           if (prevTime === 0) {
//             clearInterval(id);
//             setIsRunning(false);
//             return adjustedTime; // Reset to the user-adjusted time
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//       setIntervalId(id);
//     }
//     setIsRunning(!isRunning);
//   };

//   const adjustTime = (amount) => {
//     const newTime = adjustedTime + amount;
//     if (newTime >= 5 * 60 && newTime <= 45 * 60) {
//       setAdjustedTime(newTime); // Update the adjusted time
//       if (!isRunning) {
//         setTime(newTime); // Also update the current time if the timer isn't running
//       }
//     }
//   };

//   return (
//     <div className="parent">
//       <Time time={time} isRunning={isRunning} adjustTime={adjustTime} />
//       <Main />
//       <Button toggleTimer={toggleTimer} isRunning={isRunning} />
//     </div>
//   );
// };

// export default Parent;

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
        const elapsed = Math.floor((now - startTime) / 1000); // Total elapsed time
        const remainingTime = adjustedTime - elapsed;

        if (remainingTime <= 0) {
          setIsRunning(false);
          clearInterval(intervalId);
          setTime(adjustedTime); // Reset to adjusted time
        } else {
          setTime(remainingTime);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isRunning, startTime, adjustedTime]);

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false); // Stop the timer
      setTime(adjustedTime); // Reset to the adjusted time
    } else {
      setStartTime(Date.now());
      setIsRunning(true); // Start the timer
    }
  };

  const adjustTime = (amount) => {
    const newTime = adjustedTime + amount;
    if (newTime >= 5 * 60 && newTime <= 45 * 60) {
      setAdjustedTime(newTime);
      if (!isRunning) {
        setTime(newTime); // Update time only if the timer is not running
      }
    }
  };

  return (
    <div className="parent">
      <Time time={time} isRunning={isRunning} adjustTime={adjustTime} />
      <Main />
      <Button toggleTimer={toggleTimer} isRunning={isRunning} />
    </div>
  );
};

export default Parent;
