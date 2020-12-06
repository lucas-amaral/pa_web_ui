import { call, put, takeLatest } from 'redux-saga/effects';
import { save, load, update } from '../../services/users';
import {
  USER_SUCCEEDED,
  LOAD_USER,
  SEND_USER,
  UPDATE_USER,
  EDIT_USER,
} from '../../constants/ActionTypes';

function* sendUser(action) {
  try {
    const payload = yield call(save, action.dataUser);

    if (payload) {
      yield put({ type: USER_SUCCEEDED, payload });
    }
  } catch (e) {
    // yield put({ type: USER_FAILED, message: e.message });
  }
}

function* editUser(action) {
  try {
    const payload = yield call(update, action.data);

    if (payload) {
      yield put({ type: USER_SUCCEEDED, payload });
    }
  } catch (e) {
    // yield put({ type: USER_FAILED, message: e.message });
  }
}

function* loadUser(action) {
  try {
    const payload = yield call(load, action.data.username);

    if (payload) {
      yield put({ type: UPDATE_USER, payload: payload.data });
    }
  } catch (e) {
    // yield put({ type: USER_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(SEND_USER, sendUser);
  yield takeLatest(EDIT_USER, editUser);
  yield takeLatest(LOAD_USER, loadUser);
}

export default mySaga;
