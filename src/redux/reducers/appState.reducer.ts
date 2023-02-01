
const initialState = {
    sideBarIsVisible: false,
    logoIsHighlighted: true
}
  
const appStateReducer = (
    state: typeof initialState = initialState,
    action: any
  ) => {
    switch (action.type) {
      case 'SET_SIDEBAR_IS_OPEN':
        return { ...state, sideBarIsVisible: action.payload }
      case 'SET_LOGO_HIGHLIGHT_STATE' :
        return { ...state, logoIsHighlighted: action.payload }
      default:
        return state
    }
  }
  
  export default appStateReducer
  