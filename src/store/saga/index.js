import { all } from 'redux-saga/effects';

import interest from './interest';
import user from './user';
import login from './login';
import neighborhood from './neighborhood';

export default function* sagas() {
    yield all([interest(), user(), login(), neighborhood()]);
}
