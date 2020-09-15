import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { doLogin } from '../../services/login';

import LoginComponent from './components/login';

function Logon() {
    const history = useHistory();
    const dispatch = useDispatch();
    const statusLogin = useSelector((state) => state.login);

    useEffect(() => {
        console.log(statusLogin);
    }, [statusLogin]);

    // const setLoginValid = () => {
    //     history.push('/dashboard');
    // };

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

export default Logon;

// const { register, errors, handleSubmit, reset } = useForm();

// import { useSelector, useDispatch } from 'react-redux';
// import {
//     Creators as LoginActions,
//     Types as LoginTypes,
// } from '../../store/ducks/login';

// const dispatch = useDispatch();
// const [loginInvalid, setLoginInvalid] = useState(false);

// const onSubmit = async (data) =>
//     doLogin(data.username, data.password, setLoginInvalid, setLoginValid);

// const onSubmit = async (data) =>
//     doLogin(data.username, data.password, setLoginInvalid, setLoginValid);
// dispatch({
//     type: LoginActions.LOGIN_REQUESTED,
// data: {
//     username: data.username,
//     password: data.password,
// },
// });
