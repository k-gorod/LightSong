
const initialState = {
    isVisible: true,
    content: "",
  }
  
const modalReducer = (
    state: typeof initialState = initialState,
    action: any
  ) => {
    switch (action.type) {
      case 'SET_MODAL_VISIBLE':
        const { isVisible, content } = action.payload

        return { ...state, content, isVisible }
      default:
        return state
    }
  }
  
  export default modalReducer
  