import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { SnackbarProvider } from 'notistack';

const App = () => (
    <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
            <Routes />
            <GlobalStyle />
        </SnackbarProvider>
    </Provider>
);

export default App;
