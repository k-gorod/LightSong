
const initialState = {
  login: '',
  userId: '',
  username: '',
  token: ''
}

export const userReducer = (
  state: typeof initialState = initialState,
  action: any
) => {
  switch (action.type) {
    case 'UPDATE_USER':
      const updateUserData = action.payload

      return { ...state, ...updateUserData }
    case 'REGISTER_USER':
      const registerData = action.payload

      return { ...state, login: registerData.login, userID: registerData.id }
    default:
      return state
  }
}

export default userReducer
