import React, { useEffect, useState } from 'react';

const Main = ({ isRunning }) => {
  const [foregroundClass, setForegroundClass] = useState('');

  useEffect(() => {
    setForegroundClass(isRunning ? 'foreground-running' : 'foreground-stopped');
  }, [isRunning]);

  return (
    <div className="main">
      <div className="background" />
      <div className={`foreground ${foregroundClass}`} />
      <img className="car" src={require('../assets/images/car.png')} alt="Car" />
    </div>
  );
};

export default Main;
