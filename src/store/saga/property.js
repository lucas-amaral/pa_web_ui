import { call, put, takeLatest } from 'redux-saga/effects';
import { create, load, remove, update } from '../../services/properties';
import {
    EDIT_PROPERTY,
    SUCCEEDED_PROPERTY,
    LOAD_PROPERTY,
    REMOVE_PROPERTY,
    ADD_PROPERTY,
    UPDATE_PROPERTY,
} from '../../constants/ActionTypes';

function* loadProperty(action) {
    try {
        const payload = yield call(load, action.data.username);

        if (payload) {
            yield put({ type: UPDATE_PROPERTY, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'PROPERTY_FAILED', message: e.message });
    }
}

function* addProperty(action) {
    try {
        const payload = yield call(create, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_PROPERTY, payload });
        }
    } catch (e) {
        // yield put({ type: 'PROPERTY_FAILED', message: e.message });
    }
}

function* editProperty(action) {
    try {
        const payload = yield call(update, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_PROPERTY, payload });
        }
    } catch (e) {
        // yield put({ type: 'PROPERTY_FAILED', message: e.message });
    }
}

function* removeProperty(action) {
    try {
        const payload = yield call(remove, action.propertyId);

        if (payload) {
            yield put({ type: UPDATE_PROPERTY, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'PROPERTY_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeLatest(ADD_PROPERTY, addProperty);
    yield takeLatest(LOAD_PROPERTY, loadProperty);
    yield takeLatest(EDIT_PROPERTY, editProperty);
    yield takeLatest(REMOVE_PROPERTY, removeProperty);
}

export default mySaga;
