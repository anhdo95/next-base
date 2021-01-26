import { Dispatch } from "redux"

export const tickActionTypes = {
  TICK: 'TICK',
}

export const serverRenderClock = (isServer: boolean) => (dispatch: Dispatch) => {
  return dispatch({
    type: tickActionTypes.TICK,
    light: !isServer,
    ts: Date.now(),
  })
}

export const startClock = () => (dispatch: Dispatch) => {
  return setInterval(
    () => dispatch({ type: tickActionTypes.TICK, light: true, ts: Date.now() }),
    1000
  )
}