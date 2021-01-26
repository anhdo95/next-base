import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import countReducer from '@store/slices/countSlice'
import tickReducer from '@store/slices/tickSlice'
import userReducer from '@store/slices/userSlice'

import rootSaga from '@saga'

const combinedReducer = combineReducers({
  count: countReducer,
  tick: tickReducer,
  user: userReducer,
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
  const sagaMiddleware = createSagaMiddleware()
  const store: any = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware().prepend(sagaMiddleware);
      return middleware;
    },
    devTools: true,
  })

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(initStore)