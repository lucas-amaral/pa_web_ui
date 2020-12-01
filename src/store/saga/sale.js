import { call, put, takeLatest } from 'redux-saga/effects';
import { create, load, remove, update } from '../../services/sales';
import {
    EDIT_SALE,
    SUCCEEDED_SALE,
    LOAD_SALE,
    REMOVE_SALE,
    ADD_SALE,
    UPDATE_SALE,
} from '../../constants/ActionTypes';

function* loadSale(action) {
    try {
        const payload = yield call(load, action.data.propertyId);

        if (payload) {
            yield put({ type: UPDATE_SALE, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'SALE_FAILED', message: e.message });
    }
}

function* addSale(action) {
    try {
        const payload = yield call(create, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_SALE, payload });
        }
    } catch (e) {
        // yield put({ type: 'SALE_FAILED', message: e.message });
    }
}

function* editSale(action) {
    try {
        const payload = yield call(update, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_SALE, payload });
        }
    } catch (e) {
        // yield put({ type: 'SALE_FAILED', message: e.message });
    }
}

function* removeSale(action) {
    try {
        const payload = yield call(remove, action.saleId);

        if (payload) {
            yield put({ type: UPDATE_SALE, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'SALE_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeLatest(ADD_SALE, addSale);
    yield takeLatest(LOAD_SALE, loadSale);
    yield takeLatest(EDIT_SALE, editSale);
    yield takeLatest(REMOVE_SALE, removeSale);
}

export default mySaga;
