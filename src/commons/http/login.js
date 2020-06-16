import axios from 'axios';

// const login = axios.create({
//     baseURL: `https://crm-service.herokuapp.com/login`,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
// });

const login = () =>
    axios
        .post(`https://crm-service.herokuapp.com/login`, {
            username: 'teste@teste.com',
            password: 'teste',
        })
        .then((response) => console.log('response', response));

export { login };
