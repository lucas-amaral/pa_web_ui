import { call, put, takeLatest } from 'redux-saga/effects';
import { create, load, update } from '../../services/users';
import {
    USER_SUCCEEDED,
    UPDATE_USER,
    LOAD_USER,
    ADD_USER,
    EDIT_USER,
    FAILED_USER,
} from '../../constants/ActionTypes';
import { errorNotification, notification } from '../../utils/notificationUtils';

function* loadUser(action) {
    try {
        const payload = yield call(load, action.data.username);

        if (payload) {
            yield put({ type: UPDATE_USER, payload: payload.data });
        }
    } catch (e) {
        yield put(errorNotification('Ocorreu um erro ao buscar usuário'));
    }
}

function* addUser(action) {
    try {
        const payload = yield call(create, action.data);

        if (payload) {
            yield put({ type: USER_SUCCEEDED, payload });
            yield put(notification('Cadastro realizado com sucesso'));
        }
    } catch (e) {
        yield put({ type: FAILED_USER });
        yield put(errorNotification('Ocorreu um erro ao cadastrar o usuário'));
    }
}

function* editUser(action) {
    try {
        const payload = yield call(update, action.data);

        if (payload) {
            yield put({ type: USER_SUCCEEDED, payload });
        }
    } catch (e) {
        yield put({ type: FAILED_USER });
        yield put(errorNotification('Ocorreu um erro ao editar usuário'));
    }
}

function* mySaga() {
    yield takeLatest(ADD_USER, addUser);
    yield takeLatest(EDIT_USER, editUser);
    yield takeLatest(LOAD_USER, loadUser);
}

export default mySaga;
