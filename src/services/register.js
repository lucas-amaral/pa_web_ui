import axios from 'axios';

export const doRegister = (data) => {
    console.log('data', data);
    axios
        .post(`https://crm-service.herokuapp.com/users`, data)
        .then((response) => {
            console.log('response', response);
        })
        .catch((err) => {
            console.log('err', err);
        });
};
