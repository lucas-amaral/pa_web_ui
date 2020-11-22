import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls';

export const save = (data) => {
    axiosInstance().post(URLS.USER.ADD, data).then().catch();
};

export const update = async (data) => {
    return await axiosInstance().put(URLS.USER.EDIT, data)
        .then((response) => {
            return response.data;
        });
};

export const load = (username) => {
    return axiosInstance().get(URLS.USER.GET.replace(':username', username));
};
