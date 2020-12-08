import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import ducks from './ducks';

import mySaga from './saga';

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const store = createStore(
    ducks,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(mySaga);

  return store;
};

export default configStore();
