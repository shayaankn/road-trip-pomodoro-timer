import React from 'react';

const Time = ({ time, isRunning, adjustTime }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const isUpDisabled = time >= 45 * 60 || isRunning;
  const isDownDisabled = time <= 5 * 60 || isRunning;

  return (
    <div className="time-container">
      <div className="time-buttons">
        <button 
          onClick={() => adjustTime(5 * 60)} 
          disabled={isUpDisabled} 
          className="time-button"
        >
          Up
        </button>
        <button 
          onClick={() => adjustTime(-5 * 60)} 
          disabled={isDownDisabled} 
          className="time-button"
        >
          Down
        </button>
      </div>
      <div className="time">
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default Time;
