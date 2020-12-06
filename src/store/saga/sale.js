import { call, put, takeLatest } from 'redux-saga/effects';
import { create, load, loadByUser, remove, update } from '../../services/sales';
import {
    EDIT_SALE,
    SUCCEEDED_SALE,
    LOAD_SALES,
    LOAD_SALE,
    REMOVE_SALE,
    ADD_SALE,
    UPDATE_SALE,
    UPDATE_SALES,
    FAILED_SALE,
} from '../../constants/ActionTypes';
import { errorNotification } from '../../utils/notificationUtils';

function* loadSales(action) {
    try {
        const payload = yield call(loadByUser, action.data.username);

        if (payload) {
            yield put({ type: UPDATE_SALES, payload: payload.data });
        }
    } catch (e) {
        yield put(errorNotification('Ocorreu um erro ao buscar anúncios'));
    }
}

function* loadSale(action) {
    try {
        const payload = yield call(load, action.data.propertyId);

        if (payload) {
            yield put({ type: UPDATE_SALE, payload: payload.data });
        }
    } catch (e) {
        yield put(errorNotification('Ocorreu um erro ao buscar anúncio'));
    }
}

function* addSale(action) {
    try {
        const payload = yield call(create, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_SALE, payload });
        }
    } catch (e) {
        yield put({ type: FAILED_SALE });
        yield put(errorNotification('Ocorreu um erro ao adicionar anúncio'));
    }
}

function* editSale(action) {
    try {
        const payload = yield call(update, action.data);

        if (payload) {
            yield put({ type: SUCCEEDED_SALE, payload });
        }
    } catch (e) {
        yield put({ type: FAILED_SALE });
        yield put(errorNotification('Ocorreu um erro ao editar anúncio'));
    }
}

function* removeSale(action) {
    try {
        const payload = yield call(remove, action.saleId);

        if (payload) {
            yield put({ type: UPDATE_SALE, payload: payload.data });
        }
    } catch (e) {
        yield put(errorNotification('Ocorreu um erro ao remover anúncio'));
    }
}

function* mySaga() {
    yield takeLatest(LOAD_SALES, loadSales);
    yield takeLatest(LOAD_SALE, loadSale);
    yield takeLatest(ADD_SALE, addSale);
    yield takeLatest(EDIT_SALE, editSale);
    yield takeLatest(REMOVE_SALE, removeSale);
}

export default mySaga;
