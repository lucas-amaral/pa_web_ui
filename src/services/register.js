import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls'

export const doRegister = (data) => {
    axiosInstance().post(URLS.USER.ADD, data)
        .then((response) => {
            console.log('response', response);
        })
        .catch((err) => {
            console.log('err', err);
        });
};
