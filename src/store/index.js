import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ducks from './ducks';

import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ducks, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;
