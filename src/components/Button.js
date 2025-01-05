import React from 'react';

const Button = ({ toggleTimer, isRunning }) => {
  return (
    <button onClick={toggleTimer} className="toggle-button">
      {isRunning ? 'Stop' : 'Start'}
    </button>
  );
};

export default Button;
