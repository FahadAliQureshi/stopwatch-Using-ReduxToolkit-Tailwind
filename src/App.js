import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, reset, tick } from './redux/store';
import Stopwatch from './Pages/Stopwatch';

const App = () => {
  const running = useSelector((state) => state.running);
  const elapsedTime = useSelector((state) => state.elapsedTime);
  const dispatch = useDispatch();

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running, dispatch]);

  const handleStart = () => {
    dispatch(start());
  };

  const handleStop = () => {
    dispatch(stop());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Stopwatch using Redux Toolkit</h1>
      <p className="text-2xl mb-8">Elapsed Time: {elapsedTime} seconds</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <Stopwatch/>
    </div>
  );
};

export default App;
