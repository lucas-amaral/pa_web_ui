import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const load = (username) => {
    return axiosInstance().get(URLS.PROPERTY.GET, {
        params: { username },
    });
};

export const create = async (data) => {
    return axiosInstance()
        .post(URLS.PROPERTY.ADD, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const update = async (data) => {
    return axiosInstance()
        .put(URLS.PROPERTY.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const remove = (interest) => {
    return axiosInstance().delete(
        URLS.PROPERTY.DELETE.replace(':id', interest)
    );
};
