import axios from 'axios';

export const save = (data) => {
    console.log('data', data);
    axios
        .post(`https://crm-service.herokuapp.com/interests`, data)
        .then((response) => {
            console.log('response', response);
        })
        .catch((err) => {
            console.log('err', err);
        });
};
