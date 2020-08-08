import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { doTest } from '../../services/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMessage(action) {
    try {
        const payload = yield call(doTest);
        yield put({ type: 'MESSAGE_FETCH_SUCCEEDED', payload });
    } catch (e) {
        yield put({ type: 'MESSAGE_FETCH_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery('MESSAGE_FETCH_REQUESTED', fetchMessage);
}

export default mySaga;
