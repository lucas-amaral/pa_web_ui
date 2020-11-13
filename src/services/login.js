import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls'

export const doLogin = (username, password) => {
    return axiosInstance().post(URLS.AUTH.LOGIN, {}, { auth: { username, password } });
};
