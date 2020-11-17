import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls'

export const save = (data) => {
    axiosInstance().post(URLS.USER.ADD, data);
};

export const update = (data) => {
    axiosInstance().put(URLS.USER.EDIT, data);
};

export const load = (username) => {
    return axiosInstance().get(URLS.USER.GET.replace(":username", username));
};
