import React from 'react';
import startBtn from '../assets/images/start_btn.png';
import stopBtn from '../assets/images/stop_btn.png';

const Button = ({ toggleTimer, isRunning }) => {
  return (
    <button onClick={toggleTimer} className="toggle-button">
      <img 
        src={isRunning ? stopBtn : startBtn} 
        alt={isRunning ? 'Stop' : 'Start'} 
        className="button-image"
      />
    </button>
  );
};

export default Button;
