import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
    <Provider store={store}>
        <Routes />
        <GlobalStyle />
    </Provider>
);

export default App;
