import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleClick = () => {
    setRunning(!running);
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const reset = () => {
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Simple Stopwatch</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl font-bold">
          {hours}:{minutes.toString().padStart(2, '0')}:{seconds
            .toString()
            .padStart(2, '0')}:{milliseconds.toString().padStart(2, '0')}
        </div>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              running ? 'bg-red-500' : 'bg-green-500'
            } text-white`}
            onClick={handleClick}
          >
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
