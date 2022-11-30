import { put, takeEvery } from 'redux-saga/effects'
import { UserResponseType } from '../../types'

import { updateUser } from '../actions/user.actions'

const host = 'http://localhost:4444'



export function * signInUserSaga (action: any) { // TODO any
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const response: UserResponseType = yield fetch(`${host}/sign-in`, {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        "login": action.payload.login,
        "password": action.payload.password
      })
    }).then(async (response) => {
      return await response.json()
    })

    yield put(updateUser({
      token: response.auth.token,
      login: response.user.login,
      username: response.user.username,
      userId: response.user.id
    }))
  } catch (error) {
    console.log(error)
  }
}

const userSaga = [
  takeEvery('SIGN_IN_USER', signInUserSaga)
]

export default userSaga
