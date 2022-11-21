import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import UserReducer from "./reducers/UserReducer";
import userSaga from "./saga/userSaga";


// import userSaga from "./user/saga";


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([...userSaga,]);
}

// export type RootState = ReturnType<typeof rootReducer>

const createAppStore = () => {
    const store = configureStore({
        reducer: {
            user: UserReducer
        },
        middleware: [sagaMiddleware]
    });
    sagaMiddleware.run(rootSaga);
  
    return store;
  };

const store = createAppStore();

// export type AppState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch


export default store