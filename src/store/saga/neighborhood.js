import { call, put, takeEvery } from 'redux-saga/effects';
import {
    LOAD_NEIGHBORHOOD,
    LOAD_NEIGHBORHOODS,
    UPDATE_NEIGHBORHOOD,
    UPDATE_NEIGHBORHOODS,
} from '../../constants/ActionTypes';
import { loadByCity, load } from '../../services/neighborhoods';

function* loadNeighborhood(action) {
    try {
        const payload = yield call(load, action.data.id);

        if (payload) {
            yield put({ type: UPDATE_NEIGHBORHOOD, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* loadNeighborhoods(action) {
    try {
        const payload = yield call(loadByCity);

        if (payload) {
            yield put({ type: UPDATE_NEIGHBORHOODS, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(LOAD_NEIGHBORHOOD, loadNeighborhood);
    yield takeEvery(LOAD_NEIGHBORHOODS, loadNeighborhoods);
}

export default mySaga;
