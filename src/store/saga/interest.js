import { call, put, takeEvery } from 'redux-saga/effects';
import { save, load, remove, update } from '../../services/interests';
import {
  EDIT_INTEREST,
  INTEREST_SUCCEEDED,
  LOAD_INTEREST,
  REMOVE_INTEREST,
  SEND_INTEREST,
  UPDATE_INTEREST,
} from '../../constants/ActionTypes';

function* sendInterest(action) {
  try {
    const payload = yield call(save, action.dataInterest);

    if (payload) {
      yield put({ type: INTEREST_SUCCEEDED, payload: payload.data });
    }
  } catch (e) {
    // yield put({ type: 'INTEREST_FAILED', message: e.message });
  }
}

function* editInterest(action) {
  try {
    const payload = yield call(update, action.data);

    if (payload) {
      yield put({ type: INTEREST_SUCCEEDED, payload });
    }
  } catch (e) {
    // yield put({ type: 'INTEREST_FAILED', message: e.message });
  }
}

function* loadInterest(action) {
  try {
    const payload = yield call(load, action.data.username);

    if (payload) {
      yield put({ type: UPDATE_INTEREST, payload: payload.data });
    }
  } catch (e) {
    // yield put({ type: 'INTEREST_FAILED', message: e.message });
  }
}

function* removeInterest(action) {
  try {
    const payload = yield call(remove, action.interestID);

    if (payload) {
      yield put({ type: UPDATE_INTEREST, payload: payload.data });
    }
  } catch (e) {
    // yield put({ type: 'INTEREST_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(SEND_INTEREST, sendInterest);
  yield takeEvery(LOAD_INTEREST, loadInterest);
  yield takeEvery(EDIT_INTEREST, editInterest);
  yield takeEvery(REMOVE_INTEREST, removeInterest);
}

export default mySaga;
