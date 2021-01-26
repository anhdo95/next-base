import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import countReducer from '@store/slices/countSlice'
import tickReducer from '@store/slices/tickSlice'

const combinedReducer = combineReducers({
  count: countReducer,
  tick: tickReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    
    if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware().prepend(thunkMiddleware);
      return middleware;
    },
    devTools: true,
  })
}

export const wrapper = createWrapper(initStore)