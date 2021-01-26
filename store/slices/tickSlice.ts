import { createSlice } from '@reduxjs/toolkit'

const clockSlice = createSlice({
  name: 'tick',
  initialState: {
    lastUpdate: 0,
    light: true,
    ts: Date.now(),
  },
  reducers: {
    tick: (state, action) => {
      state.lastUpdate = action.payload.lastUpdate
      state.light = !!action.payload.light
      state.ts = Date.now(),
    },
  },
})

export const selectClock = (state) => state.clock

export const { tick } = clockSlice.actions

export default clockSlice.reducer