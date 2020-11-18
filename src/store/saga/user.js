import { call, put, takeEvery } from "redux-saga/effects";
import { save, load, update } from "../../services/users";
import {
    USER_SUCCEEDED,
    LOAD_USER,
    SEND_USER,
    UPDATE_USER,
    CHANGE_USER,
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

function* changeUser(action) {
    try {
        const payload = yield call(update, action.dataUser);

        if (payload) {
            yield put({ type: USER_SUCCEEDED, payload });
        }
    } catch (e) {
        // yield put({ type: USER_FAILED, message: e.message });
    }
}

function* loadUser(action) {
    try {
        const payload = yield call(load, action.dataUser.username);

        if (payload) {
            yield put({ type: UPDATE_USER, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: USER_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(SEND_USER, sendUser);
    yield takeEvery(CHANGE_USER, changeUser);
    yield takeEvery(LOAD_USER, loadUser);
}

export default mySaga;
