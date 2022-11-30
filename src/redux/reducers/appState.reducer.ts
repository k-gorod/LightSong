
const initialState = {
    sideBarIsVisible: false,
}
  
const appStateReducer = (
    state: typeof initialState = initialState,
    action: any
  ) => {
    switch (action.type) {
      case 'SET_SIDEBAR_IS_OPEN':
        
        return { ...state, sideBarIsVisible: action.payload }

      default:
        return state
    }
  }
  
  export default appStateReducer
  