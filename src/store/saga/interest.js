import { call, put, takeLatest } from 'redux-saga/effects';
import { create, load, remove, update } from '../../services/interests';
import {
  EDIT_INTEREST,
  SUCCEEDED_INTEREST,
  LOAD_INTEREST,
  REMOVE_INTEREST,
  ADD_INTEREST,
  UPDATE_INTEREST,
  FAILED_INTEREST,
  RESET_LOADING_DATA_INTEREST,
  RESET_INTEREST,
} from '../../constants/ActionTypes';
import { errorNotification, notification } from '../../utils/notificationUtils';

function* loadInterest(action) {
  try {
    const payload = yield call(load, action.data.username);

    if (payload) {
      yield put({ type: UPDATE_INTEREST, payload: payload.data });
    } else {
      yield put({ type: RESET_LOADING_DATA_INTEREST });
    }
  } catch (e) {
    yield put({ type: RESET_LOADING_DATA_INTEREST });
    yield put(errorNotification('Ocorreu um erro ao buscar interesse'));
  }
}

function* addInterest(action) {
  try {
    const payload = yield call(create, action.data);

    if (payload) {
      yield put({ type: SUCCEEDED_INTEREST, payload: payload.data });
    }
  } catch (e) {
    yield put({ type: FAILED_INTEREST });
    yield put(errorNotification('Ocorreu um erro ao adicionar interesse'));
  }
}

function* editInterest(action) {
  try {
    const payload = yield call(update, action.data);

    if (payload) {
      yield put({ type: SUCCEEDED_INTEREST, payload: payload.data });
    }
  } catch (e) {
    yield put({ type: FAILED_INTEREST });
    yield put(errorNotification('Ocorreu um erro ao editar interesse'));
  }
}

function* removeInterest(action) {
  try {
    const payload = yield call(remove, action.interestId);

    if (payload) {
      yield put({ type: RESET_INTEREST });
      yield put(notification('Interesse removido com sucesso'));
    }
  } catch (e) {
    yield put(errorNotification('Ocorreu um erro ao remover interesse'));
  }
}

function* mySaga() {
  yield takeLatest(ADD_INTEREST, addInterest);
  yield takeLatest(LOAD_INTEREST, loadInterest);
  yield takeLatest(EDIT_INTEREST, editInterest);
  yield takeLatest(REMOVE_INTEREST, removeInterest);
}

export default mySaga;
