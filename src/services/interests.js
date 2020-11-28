import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const save = (data) => {
    axiosInstance()
        .post(URLS.INTEREST.ADD, data)
        .then((response) => {
            console.log('response', response);
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const update = async (data) => {
    return await axiosInstance().put(URLS.INTEREST.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

export const load = (username) => {
    return axiosInstance().get(URLS.INTEREST.GET_BY_USERNAME, {
        params: { username },
    });
};

export const remove = (interest) => {
    return axiosInstance().delete(
        URLS.INTEREST.DELETE.replace(':id', interest)
    );
};
