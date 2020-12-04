import { call, put, takeLatest } from 'redux-saga/effects';
import {
    create,
    load,
    loadImages,
    remove,
    removeImage,
    saveImage,
    update,
} from '../../services/barters';
import {
    LOAD_BARTER,
    ADD_BARTER,
    EDIT_BARTER,
    REMOVE_BARTER,
    SUCCEEDED_BARTER,
    UPDATE_BARTER,
    REMOVE_FORM_INTEREST_BARTER,
    ADD_FORM_INTEREST_BARTER,
    LOAD_BARTER_IMAGES,
    ADD_BARTER_IMAGE,
    REMOVE_BARTER_IMAGE,
    SUCCEEDED_ADD_BARTER_IMAGE,
    SUCCEEDED_REMOVE_BARTER_IMAGE,
    UPDATE_BARTER_IMAGES,
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
            yield put({
                type: REMOVE_FORM_INTEREST_BARTER,
                barterId: action.barterId,
            });
            yield put({ type: ADD_FORM_INTEREST_BARTER, payload });
            yield put({ type: SUCCEEDED_BARTER, payload });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* removeBarter(action) {
    try {
        const payload = yield call(remove, action.barterId);

        if (payload) {
            yield put({
                type: REMOVE_FORM_INTEREST_BARTER,
                barterId: action.barterId,
            });
            yield put({ type: SUCCEEDED_BARTER, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* loadBarterImages(action) {
    try {
        const payload = yield call(loadImages, action.barterId);

        if (payload) {
            yield put({ type: UPDATE_BARTER_IMAGES, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
        console.error('FAILED_BARTER');
    }
}

function* addBarterImage(action) {
    try {
        const payload = yield call(saveImage, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_ADD_BARTER_IMAGE, payload });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* removeBarterImage(action) {
    try {
        yield call(removeImage, action.imageId);

        yield put({
            type: SUCCEEDED_REMOVE_BARTER_IMAGE,
            imageId: action.imageId,
        });
    } catch (e) {
        // yield put({ type: 'FAILED_BARTER', message: e.message });
    }
}

function* mySaga() {
    yield takeLatest(LOAD_BARTER, loadBarter);
    yield takeLatest(ADD_BARTER, addBarter);
    yield takeLatest(EDIT_BARTER, editBarter);
    yield takeLatest(REMOVE_BARTER, removeBarter);
    yield takeLatest(LOAD_BARTER_IMAGES, loadBarterImages);
    yield takeLatest(ADD_BARTER_IMAGE, addBarterImage);
    yield takeLatest(REMOVE_BARTER_IMAGE, removeBarterImage);
}

export default mySaga;
