import { call, put, takeLatest } from 'redux-saga/effects';
import {
    create,
    load,
    remove,
    update,
    loadImages,
    removeImage,
    saveImage,
} from '../../services/properties';
import {
    EDIT_PROPERTY,
    SUCCEEDED_PROPERTY,
    LOAD_PROPERTY,
    REMOVE_PROPERTY,
    ADD_PROPERTY,
    UPDATE_PROPERTY,
    UPDATE_PROPERTY_IMAGES,
    SUCCEEDED_ADD_PROPERTY_IMAGE,
    SUCCEEDED_REMOVE_PROPERTY_IMAGE,
    LOAD_PROPERTY_IMAGES,
    ADD_PROPERTY_IMAGE,
    REMOVE_PROPERTY_IMAGE,
} from '../../constants/ActionTypes';

function* loadProperty(action) {
    try {
        const payload = yield call(load, action.data.username);

        if (payload) {
            // Fix it and use list of properties
            yield put({ type: UPDATE_PROPERTY, payload: payload.data[0] });
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

function* loadPropertyImages(action) {
    try {
        const payload = yield call(loadImages, action.barterId);

        if (payload) {
            yield put({ type: UPDATE_PROPERTY_IMAGES, payload: payload.data });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_PROPERTY', message: e.message });
        console.error('FAILED_PROPERTY');
    }
}

function* addPropertyImage(action) {
    try {
        const payload = yield call(saveImage, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_ADD_PROPERTY_IMAGE, payload });
        }
    } catch (e) {
        // yield put({ type: 'FAILED_PROPERTY', message: e.message });
    }
}

function* removePropertyImage(action) {
    try {
        yield call(removeImage, action.imageId);

        yield put({
            type: SUCCEEDED_REMOVE_PROPERTY_IMAGE,
            imageId: action.imageId,
        });
    } catch (e) {
        // yield put({ type: 'FAILED_PROPERTY', message: e.message });
    }
}

function* mySaga() {
    yield takeLatest(ADD_PROPERTY, addProperty);
    yield takeLatest(LOAD_PROPERTY, loadProperty);
    yield takeLatest(EDIT_PROPERTY, editProperty);
    yield takeLatest(REMOVE_PROPERTY, removeProperty);
    yield takeLatest(LOAD_PROPERTY_IMAGES, loadPropertyImages);
    yield takeLatest(ADD_PROPERTY_IMAGE, addPropertyImage);
    yield takeLatest(REMOVE_PROPERTY_IMAGE, removePropertyImage);
}

export default mySaga;
