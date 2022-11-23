
const initialState = {
  login: '',
  userID: ''
}

export const userReducer = (
  state: typeof initialState = initialState,
  action: any
) => {
  switch (action.type) {
    case 'UPDATE_USER':
      const { id, login } = action.payload.data

      return { ...state, login, userID: id }
    default:
      return state
  }
}

export default userReducer
