import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  USERINFO_REQUEST,
  USERINFO_SUCCESS,
  USERINFO_FAILURE,
} from '../reducers/common';

function userAPI() {
  // const url = `/user`
  // return axios.get(url)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ email: 'abc@nate.com' });
    }, 500);
  });
}
function* user(): Generator<any> {
  try {
    const result = yield call(userAPI);
    yield put({
      type: USERINFO_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: USERINFO_FAILURE,
    });
  }
}

function* userWatch() {
  yield takeLatest(USERINFO_REQUEST, user);
}

export default function* commonSaga() {
  yield all([fork(userWatch)]);
}
