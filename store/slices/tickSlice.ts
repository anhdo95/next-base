import { createSlice, Dispatch } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "tick",
  initialState: {
    lastUpdate: 0,
    light: true,
  },
  reducers: {
    tick: (state, action) => {
      state.lastUpdate = action.payload.lastUpdate;
      state.light = !!action.payload.light;
    },
  },
});

export const selectLastUpdate = (state: any) => state.tick.lastUpdate
export const selectLight = (state: any) => state.tick.selectLight

export const { tick } = clockSlice.actions;

export const startClock = () => (dispatch: Dispatch) => {
  return setInterval(
    () =>
      dispatch(tick({ light: true, lastUpdate: Date.now() })),
    1000
  );
};

export const serverRenderClock = (isServer: boolean) => (
  dispatch: Dispatch
) => {
  return dispatch(
    tick({
      light: !isServer,
      lastUpdate: Date.now(),
    })
  );
};

export default clockSlice.reducer;
