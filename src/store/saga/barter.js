import { call, put, takeLatest } from 'redux-saga/effects';
import { create, load, remove, update } from '../../services/barters';
import {
    LOAD_BARTER,
    ADD_BARTER,
    EDIT_BARTER,
    REMOVE_BARTER,
    SUCCEEDED_BARTER,
    UPDATE_BARTER,
} from '../../constants/ActionTypes';

function* loadBarter(action) {
    try {
        const payload = yield call(load, action.data.barterId);

        if (payload) {
            yield put({ type: UPDATE_BARTER, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* addBarter(action) {
    try {
        const payload = yield call(create, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_BARTER, payload });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* editBarter(action) {
    try {
        const payload = yield call(update, action.data);

        if (payload) {
            yield put({ type: UPDATE_BARTER, payload });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* removeBarter(action) {
    try {
        const payload = yield call(remove, action.barterId);

        if (payload) {
            yield put({ type: UPDATE_BARTER, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* mySaga() {
    yield takeLatest(LOAD_BARTER, loadBarter);
    yield takeLatest(ADD_BARTER, addBarter);
    yield takeLatest(EDIT_BARTER, editBarter);
    yield takeLatest(REMOVE_BARTER, removeBarter);
}

export default mySaga;
