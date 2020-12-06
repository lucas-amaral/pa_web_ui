import URLS from '../constants/Urls';
import axiosInstance from './axiosInstance';

export const load = (propertyId) => {
    return axiosInstance().get(URLS.SALE.GET, {
        params: { propertyId },
    });
};

export const loadByUser = (username) => {
    return axiosInstance().get(URLS.SALE.GET_BY_USER, {
        params: { username },
    });
};

export const create = async (data) => {
    return axiosInstance()
        .post(URLS.SALE.ADD, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const update = async (data) => {
    return axiosInstance()
        .put(URLS.SALE.EDIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const remove = (saleId) => {
    return axiosInstance().delete(URLS.SALE.DELETE.replace(':id', saleId));
};
