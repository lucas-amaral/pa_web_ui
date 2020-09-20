import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginComponent from './components/login';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const statusLogin = useSelector((state) => state.login);

    useEffect(() => {
        console.log('status', statusLogin);
        if (statusLogin.logged) {
            history.push('/dashboard');
        }
    }, [statusLogin]);

    const onSubmit = (data) =>
        dispatch({
            type: 'LOGIN_REQUESTED',
            data: {
                username: data.username,
                password: data.password,
            },
        });

    return <LoginComponent onSubmit={onSubmit} />;
}

export default Login;
