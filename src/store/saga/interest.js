import { call, put, takeEvery } from 'redux-saga/effects';
import { save } from '../../services/interests';

function* sendInterest(action) {
    try {
        console.log('workando', action);

        const payload = yield call(save, action.interest);

        if (payload) {
            console.log('workando', payload);
            yield put({ type: 'INTEREST_SUCCEEDED', payload });
        }
    } catch (e) {
        // yield put({ type: 'INTEREST_FAILED', message: e.message });
    }
}

function* mySaga() {
    yield takeEvery('SEND_INTEREST', sendInterest);
}

export default mySaga;
