import { all } from 'redux-saga/effects';

import interest from './interest';
import message from './message';

export default function* sagas() {
    yield all([interest(), message()]);
}
