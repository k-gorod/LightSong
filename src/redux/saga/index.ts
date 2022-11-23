import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import userSaga from './userSaga'


export const sagaMiddleware = createSagaMiddleware()

export function * rootSaga () {
  yield all([...userSaga])
}