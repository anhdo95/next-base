import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { tickClock } from '@store/slices/tickSlice'
import { loadUsers, loadUsersSuccess } from '@store/slices/userSlice'
import { actionTypes, failure } from './actions'

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    
    yield put(loadUsersSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(loadUsers.type, loadDataSaga),
  ])
}

export default rootSaga