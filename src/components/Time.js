import React from 'react';
import upBtn from '../assets/images/up_btn.png';
import upBtnDisabled from '../assets/images/up_btn_disabled.png';
import downBtn from '../assets/images/down_btn.png';
import downBtnDisabled from '../assets/images/down_btn_disabled.png';

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
          <img 
            src={isUpDisabled ? upBtnDisabled : upBtn} 
            alt="Increase Time" 
            className="time-btn-image"
          />
        </button>
        <button 
          onClick={() => adjustTime(-5 * 60)} 
          disabled={isDownDisabled} 
          className="time-button"
        >
          <img 
            src={isDownDisabled ? downBtnDisabled : downBtn} 
            alt="Decrease Time" 
            className="time-btn-image"
          />
        </button>
      </div>
      <div className="time">
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default Time;
