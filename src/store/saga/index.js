import { all } from 'redux-saga/effects';

import interest from './interest';
import login from './login';

export default function* sagas() {
    yield all([interest(), login()]);
}
