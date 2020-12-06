import { call, put, takeEvery } from 'redux-saga/effects';
import { doLogin } from '../../services/login';
import {
    LOGIN_FAILED,
    LOGIN_REQUESTED,
    LOGIN_SUCCEEDED,
} from '../../constants/ActionTypes';
import { errorNotification } from '../../utils/notificationUtils';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* requestLogin(action) {
    try {
        const payload = yield call(
            doLogin,
            action.data.username,
            action.data.password
        );
        if (payload) {
            yield put({ type: LOGIN_SUCCEEDED, payload });
        }
    } catch (e) {
        yield put(errorNotification('Usuário ou senha incorretos'));
        yield put({ type: LOGIN_FAILED });
    }
}

function* mySaga() {
    yield takeEvery(LOGIN_REQUESTED, requestLogin);
}

export default mySaga;
