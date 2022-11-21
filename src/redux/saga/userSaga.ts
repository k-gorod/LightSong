import { put, takeEvery } from 'redux-saga/effects';
import { updateUser } from '../actions/userActions';

const host = "http://localhost:4444"

const data = {
  "login": "Test211asczxzx1_1",
  "password": "1zxcasdzx"
}

export function* registerSaga(action: any) { // TODO any
  try {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const response: Object = yield fetch(`${host}/register`, {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
        body: JSON.stringify({
          "login": action.payload.login,
          "password": action.payload.password
        })
    }).then((response) => {

      return response.json()
    });
    yield put(updateUser(response));
  } catch (error) {
    console.log(error);
  }
}

const userSaga = [
  takeEvery('REGISTER_USER', registerSaga),
];

export default userSaga;