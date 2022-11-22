import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import userReducer from './reducers/user.reducer'
import userSaga from './saga/userSaga'

// import userSaga from "./user/saga";

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield all([...userSaga])
}

// export type RootState = ReturnType<typeof rootReducer>

// convert object to string and store in localStorage
function saveToLocalStorage (state: any) {

}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage () {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const subscribeMiddleware = (store: any) => (next: any) => (action: any) => {
  try {
    const state = JSON.stringify(store.getState())
    localStorage.setItem('persistantState', state)
  } catch (e) {
    console.warn(e)
  }
}

const createAppStore = () => {
  const store = configureStore({
    reducer: {
      user: userReducer
    },
    middleware: [sagaMiddleware, subscribeMiddleware],
    preloadedState: loadFromLocalStorage()
  })

  sagaMiddleware.run(rootSaga)

  return store
}

const store = createAppStore()

// export type AppState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch

export default store
