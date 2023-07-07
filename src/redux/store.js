// store.js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    running: false,
    elapsedTime: 0,
  },
  reducers: {
    start: (state) => {
      state.running = true;
    },
    stop: (state) => {
      state.running = false;
    },
    reset: (state) => {
      state.elapsedTime = 0;
    },
    tick: (state) => {
      state.elapsedTime += 1;
    },
  },
});

export const { start, stop, reset, tick } = stopwatchSlice.actions;

export default configureStore({
  reducer: stopwatchSlice.reducer,
});
