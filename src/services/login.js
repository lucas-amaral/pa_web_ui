import axios from 'axios';

const HOST = 'https://crm-service.herokuapp.com';
// const HOST = 'http://localhost:8080';

export const doLogin = (username, password) => {
    return axios.post(`${HOST}/login`, {}, { auth: { username, password } });
};
