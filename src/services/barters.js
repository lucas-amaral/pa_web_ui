import axiosInstance from './axiosInstance';
import URLS from '../constants/Urls';

export const load = (barterId) => {
    return axiosInstance().get(URLS.BARTER.GET, {
        params: { id: barterId },
    });
};

export const create = async (data) => {
    return axiosInstance()
        .post(URLS.BARTER.ADD, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const update = (data) => {
    return axiosInstance()
        .put(URLS.BARTER.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const remove = (barterId) => {
    return axiosInstance().delete(URLS.BARTER.DELETE.replace(':id', barterId));
};

export const loadImages = (barterId) => {
    return axiosInstance().get(URLS.BARTER.GET_IMAGES.replace(':id', barterId));
};

export const saveImage = async (data) => {
    return axiosInstance()
        .post(URLS.BARTER.ADD_IMAGE, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const removeImage = (imageId) => {
    return axiosInstance().delete(
        URLS.BARTER.DELETE_IMAGE.replace(':id', imageId)
    );
};
