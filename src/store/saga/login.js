// import { call, put, takeEvery } from 'redux-saga/effects';
// import { doTest } from '../../services/api';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchLogin(action) {
//     try {
//         const payload = yield call(
//             doTest,
//             action.data.username,
//             action.data.password
//         );
//         if (payload) {
//             console.log('work', payload.headers['x-auth-token']);
//             yield put({ type: 'LOGIN_SUCCEEDED', payload });
//         }
//     } catch (e) {
//         yield put({ type: 'LOGIN_FAILED', message: e.message });
//     }
// }

// function* mySaga() {
//     yield takeEvery('LOGIN_REQUESTED', fetchLogin);
// }

// export default mySaga;
