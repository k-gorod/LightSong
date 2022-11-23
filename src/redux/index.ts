import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import { loadFromLocalStorage, saveToLocalStorage } from './redux.config'
import { rootSaga, sagaMiddleware } from './saga'

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
  preloadedState: loadFromLocalStorage()
})

sagaMiddleware.run(rootSaga)

store.subscribe(() => saveToLocalStorage(store.getState()))

export type AppState = ReturnType<typeof store.getState>


export default store
