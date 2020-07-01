import axios from 'axios';

export const doLogin = (username, password, setLoginInvalid, setLoginValid) => {
    axios
        .post(
            `https://crm-service.herokuapp.com/login`,
            {},
            {
                auth: { username, password },
            }
        )
        .then((response) => {
            const token = response.headers['x-auth-token'];
            localStorage.setItem('token', token);
            setLoginValid();
        })
        .catch((err) => {
            setLoginInvalid(err);
        });
};
