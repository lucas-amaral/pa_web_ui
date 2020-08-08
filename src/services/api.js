import axios from 'axios';

export const doTest = () => {
    return axios.get(`https://counterpatest.free.beeceptor.com`);
};
