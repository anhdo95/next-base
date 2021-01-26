export const actionTypes = {
  FAILURE: 'FAILURE',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function startClock() {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}