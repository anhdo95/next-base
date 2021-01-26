import { createSlice, Dispatch } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "tick",
  initialState: {
    lastUpdate: 0,
    light: true,
  },
  reducers: {
    tickClock(state, action) {
      state.light = !action.payload
      state.lastUpdate = Date.now()
    }
  },
});

export const selectLastUpdate = (state: any) => state.tick.lastUpdate;
export const selectLight = (state: any) => state.tick.selectLight;

export const { tickClock } = clockSlice.actions;

export default clockSlice.reducer;
