import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls';

export const load = (barterId) => {
    return axiosInstance().get(URLS.BARTERS.GET, {
        params: { id: barterId },
    });
};

export const create = async (data) => {
    return axiosInstance()
        .post(URLS.BARTERS.ADD, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const update = (data) => {
    return axiosInstance()
        .put(URLS.BARTERS.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const remove = (barterId) => {
    return axiosInstance().delete(URLS.BARTERS.DELETE.replace(':id', barterId));
};
