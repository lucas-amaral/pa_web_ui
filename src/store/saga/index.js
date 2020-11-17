import { all } from 'redux-saga/effects';

import interest from './interest';
import user from './users';
import login from './login';

export default function* sagas() {
    yield all([interest(), user(), login()]);
}
