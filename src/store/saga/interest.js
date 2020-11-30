import { call, put, takeEvery } from 'redux-saga/effects';
import { create, load, remove, update } from '../../services/interests';
import {
    create as createBarter,
    remove as removeBarter,
} from '../../services/barters';
import {
    EDIT_INTEREST,
    INTEREST_SUCCEEDED,
    LOAD_INTEREST,
    REMOVE_INTEREST,
    ADD_INTEREST,
    UPDATE_INTEREST,
    ADD_INTEREST_BARTER,
    REMOVE_INTEREST_BARTER,
    REMOVE_FORM_INTEREST_BARTER,
    ADD_FORM_INTEREST_BARTER,
} from '../../constants/ActionTypes';

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

function* addInterest(action) {
    try {
        const payload = yield call(create, action.dataInterest);

        if (payload) {
            yield put({ type: INTEREST_SUCCEEDED, payload });
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

function* removeInterest(action) {
    try {
        const payload = yield call(remove, action.interestId);

        if (payload) {
            yield put({ type: UPDATE_INTEREST, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* addInterestBarter(action) {
    try {
        const payload = yield call(createBarter, action.data);

        if (payload) {
            yield put({ type: ADD_FORM_INTEREST_BARTER, payload });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* removeInterestBarter(action) {
    try {
        yield call(removeBarter, action.barterId);

        yield put({
            type: REMOVE_FORM_INTEREST_BARTER,
            barterId: action.barterId,
        });
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(ADD_INTEREST, addInterest);
    yield takeEvery(LOAD_INTEREST, loadInterest);
    yield takeEvery(EDIT_INTEREST, editInterest);
    yield takeEvery(REMOVE_INTEREST, removeInterest);
    yield takeEvery(ADD_INTEREST_BARTER, addInterestBarter);
    yield takeEvery(REMOVE_INTEREST_BARTER, removeInterestBarter);
}

export default mySaga;
