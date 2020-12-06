import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls';

export const load = (username) => {
    return axiosInstance().get(URLS.USER.GET.replace(':username', username));
};

export const create = (data) => {
    return axiosInstance()
        .post(URLS.USER.ADD, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const update = async (data) => {
    return axiosInstance()
        .put(URLS.USER.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};
