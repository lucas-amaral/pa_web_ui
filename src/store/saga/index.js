import { all } from 'redux-saga/effects';

import interest from './interest';
import user from './user';
import login from './login';
import neighborhood from './neighborhood';
import street from './street';
import barter from './barter';
import property from './property';
import sale from './sale';
import negotiation from './negotiation';

export default function* sagas() {
  yield all([
    interest(),
    user(),
    login(),
    neighborhood(),
    street(),
    barter(),
    property(),
    sale(),
    negotiation(),
  ]);
}
