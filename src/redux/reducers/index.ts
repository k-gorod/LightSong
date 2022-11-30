import appStateReducer from "./appState.reducer"
import modalReducer from "./modal.reducer"
import userReducer from "./user.reducer"

const reducers = {
    user: userReducer,
    modal: modalReducer,
    appState: appStateReducer
  }

export default reducers