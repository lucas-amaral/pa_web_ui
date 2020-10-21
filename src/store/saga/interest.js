import { call, put, takeEvery } from 'redux-saga/effects';
import { save, load, remove } from '../../services/interests';

function* sendInterest(action) {
    try {
        const payload = yield call(save, action.dataInterest);

        if (payload) {
            yield put({ type: 'INTEREST_SUCCEEDED', payload });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* loadInterest(action) {
    try {
        const payload = yield call(load, action.dataInterest.username);

        if (payload) {
            yield put({ type: 'UPDATE_INTEREST', payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* removeInterest(action) {
    try {
        const payload = yield call(remove, action.interestID);

        if (payload) {
            yield put({ type: 'UPDATE_INTEREST', payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery('SEND_INTEREST', sendInterest);
    yield takeEvery('LOAD_INTEREST', loadInterest);
    yield takeEvery('REMOVE_INTEREST', removeInterest);
}

export default mySaga;
