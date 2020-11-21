import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_STREET, UPDATE_STREET } from '../../constants/ActionTypes';
import { load } from '../../services/streets';

function* loadStreet(action) {
    try {
        const payload = yield call(load, action.zipCode);

        if (payload) {
            yield put({ type: UPDATE_STREET, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(LOAD_STREET, loadStreet);
}

export default mySaga;
