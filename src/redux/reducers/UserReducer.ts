
const initialState = {
    username: "Login"
  };
  
  export const UserReducer = (
    state: typeof initialState = initialState,
    action: any,
  ) => {
    switch (action.type) {
      case 'UPDATE_USER':
        console.log('GET_NEW_CARDS');
        const { id, login } = action.payload
  
        return { ...state, login, id };
    //   case 'CHANGE_CHAR_NAME':
    //     console.log('CHANGE_CHAR_NAME');
  
    //     return { ...state, name: action.payload };
    //   case 'REDEFINE_CARD_LIST':
    //     console.log('REDEFINE_CARD_LIST');
    //     return { ...state, cardsList: action.payload };
      default:
        return state;
    }
  };
  
  export default UserReducer;