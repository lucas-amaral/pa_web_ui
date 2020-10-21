import axios from 'axios';

export const save = (data) => {
    const config = {
        headers: { 'X-Auth-Token': `${localStorage.getItem('token')}` },
    };

    axios
        .post(`https://crm-service.herokuapp.com/interests`, data, config)
        .then((response) => {
            console.log('response', response);
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const load = (username) => {
    const config = {
        headers: { 'X-Auth-Token': `${localStorage.getItem('token')}` },
    };

    return axios.get(
        `https://crm-service.herokuapp.com/interests?username=${username}`,
        config
    );
};

export const remove = (interest) => {
    const config = {
        headers: { 'X-Auth-Token': `${localStorage.getItem('token')}` },
    };

    return axios.delete(
        `https://crm-service.herokuapp.com/interests/${interest}`,
        config
    );
};
