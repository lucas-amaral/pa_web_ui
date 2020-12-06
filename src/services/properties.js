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
            throw err;
        });
};

export const update = async (data) => {
    return axiosInstance()
        .put(URLS.PROPERTY.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const remove = (interest) => {
    return axiosInstance().delete(
        URLS.PROPERTY.DELETE.replace(':id', interest)
    );
};

export const loadImages = (propertyId) => {
    return axiosInstance().get(
        URLS.PROPERTY.GET_IMAGES.replace(':id', propertyId)
    );
};

export const saveImage = async (data) => {
    return axiosInstance()
        .post(URLS.PROPERTY.ADD_IMAGE, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const removeImage = (imageId) => {
    return axiosInstance().delete(
        URLS.PROPERTY.DELETE_IMAGE.replace(':id', imageId)
    );
};
